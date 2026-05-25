import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CustomCursor from './components/Cursor/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Work from './pages/Work'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import StartProject from './pages/StartProject'
import Scorecard from './pages/Scorecard'
import HowItWorks from './pages/HowItWorks'
import ContractorWebsites from './pages/ContractorWebsites'
import Payments from './pages/Payments'
import PaymentSuccess from './pages/PaymentSuccess'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/scorecard" element={<Scorecard />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contractor-websites" element={<ContractorWebsites />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
