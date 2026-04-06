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
import LegalPage from './components/LegalPage'

export default function App() {
  const [legalPage, setLegalPage] = useState(null)
  const [isDirectLegal, setIsDirectLegal] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    if (path === '/privacy') {
      setLegalPage('privacy')
      setIsDirectLegal(true)
    } else if (path === '/terms') {
      setLegalPage('terms')
      setIsDirectLegal(true)
    }
  }, [])

  // /privacy, /terms 직접 접근 시 독립 페이지로 렌더
  if (isDirectLegal && legalPage) {
    return <LegalPage type={legalPage} />
  }

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
