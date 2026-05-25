import Stripe from 'stripe'

const PRICE_MAP = {
  'managed-starter': {
    price: process.env.STRIPE_PRICE_MANAGED_STARTER,
    mode: 'subscription',
  },
  'managed-growth': {
    price: process.env.STRIPE_PRICE_MANAGED_GROWTH,
    mode: 'subscription',
  },
  'basic-care': {
    price: process.env.STRIPE_PRICE_BASIC_CARE,
    mode: 'subscription',
  },
  'growth-care': {
    price: process.env.STRIPE_PRICE_GROWTH_CARE,
    mode: 'subscription',
  },
  'priority-care': {
    price: process.env.STRIPE_PRICE_PRIORITY_CARE,
    mode: 'subscription',
  },
  'launch-deposit': {
    price: process.env.STRIPE_PRICE_LAUNCH_DEPOSIT,
    mode: 'payment',
  },
  'growth-deposit': {
    price: process.env.STRIPE_PRICE_GROWTH_DEPOSIT,
    mode: 'payment',
  },
  'quick-fix': {
    price: process.env.STRIPE_PRICE_QUICK_FIX,
    mode: 'payment',
  },
  'standard-mod-deposit': {
    price: process.env.STRIPE_PRICE_STANDARD_MOD_DEPOSIT,
    mode: 'payment',
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { planId } = req.body

  if (!planId || !PRICE_MAP[planId]) {
    return res.status(400).json({ error: 'Invalid or unknown plan ID.' })
  }

  const plan = PRICE_MAP[planId]

  if (!plan.price) {
    return res.status(500).json({ error: 'Stripe price not configured for this plan. Please contact Higgins Digital.' })
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Payment system not configured. Please contact Higgins Digital directly.' })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-04-10',
  })

  const siteUrl = process.env.SITE_URL || (
    process.env.NODE_ENV === 'production'
      ? 'https://higginsd.com'
      : 'http://localhost:5173'
  )

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.price,
          quantity: 1,
        },
      ],
      mode: plan.mode,
      success_url: `${siteUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/payments?canceled=true`,
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err.message)
    return res.status(500).json({ error: 'Checkout session could not be created. Please try again or contact Higgins Digital.' })
  }
}
