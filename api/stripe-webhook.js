import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.warn('STRIPE_WEBHOOK_SECRET not set — webhook verification skipped')
    return res.status(200).json({ received: true, status: 'webhook_secret_missing' })
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Stripe not configured' })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-04-10',
  })

  const sig = req.headers['stripe-signature']
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret)
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err.message)
    return res.status(400).json({ error: `Webhook error: ${err.message}` })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object
      console.log('Checkout session completed:', session.id)
      // TODO: Update database, send confirmation email, trigger fulfillment
      break
    }

    case 'customer.subscription.created': {
      const subscription = event.data.object
      console.log('Subscription created:', subscription.id)
      // TODO: Provision service, update customer record
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object
      console.log('Subscription updated:', subscription.id)
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object
      console.log('Subscription canceled:', subscription.id)
      // TODO: Deprovision service, notify customer
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object
      console.log('Invoice payment succeeded:', invoice.id)
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object
      console.log('Invoice payment failed:', invoice.id)
      // TODO: Notify customer, pause service if needed
      break
    }

    default:
      console.log(`Unhandled webhook event type: ${event.type}`)
  }

  return res.status(200).json({ received: true })
}
