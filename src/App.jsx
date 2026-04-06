import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Numbers from './components/Numbers'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import MoreFeatures from './components/MoreFeatures'
import FAQ from './components/FAQ'
import Download from './components/Download'
import Footer from './components/Footer'
import Legal from './components/Legal'

export default function App() {
  const [legalPage, setLegalPage] = useState(null)

  useEffect(() => {
    const path = window.location.pathname
    if (path === '/privacy') setLegalPage('privacy')
    else if (path === '/terms') setLegalPage('terms')
  }, [])

  const handleLegal = (type) => {
    setLegalPage(type)
    window.history.pushState({}, '', `/${type}`)
  }

  const handleCloseLegal = () => {
    setLegalPage(null)
    window.history.pushState({}, '', '/')
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Numbers />
        <HowItWorks />
        <Screenshots />
        <MoreFeatures />
        <FAQ />
        <Download />
      </main>
      <Footer onLegal={handleLegal} />
      {legalPage && (
        <Legal type={legalPage} onClose={handleCloseLegal} />
      )}
    </>
  )
}
