
import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ContactLinks from './components/ContactLinks/ContactLinks'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

function App() {

  const [showButton, setShowButton] = useState(false)
  
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener('scroll', handleScrollButtonVisibility)
    return () =>
      window.removeEventListener('scroll', handleScrollButtonVisibility)
  }, [])

  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <ContactLinks />
      <Footer />
      {showButton && <ScrollToTopButton />}
    </div>
  )
}

export default App
