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
  
  // Handle the visibility of the scroll to top button
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

  // Handle active link in the navbar when scrolling
  useEffect(() => {
    const handleActiveLink = () => {
      const sections = document.querySelectorAll('section')
      const navlinks = document.querySelectorAll('nav button')
      sections.forEach((section) => {
        const top = window.scrollY
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        if (top >= sectionTop && top < sectionTop + sectionHeight) {
          navlinks.forEach((link) => {
            link.classList.remove('active')
            if (link.id === `#${sectionId}`) {
              link.classList.add('active')
            }
          })
        } 
      })
    }
    window.addEventListener('scroll', handleActiveLink)
    return () => window.removeEventListener('scroll', handleActiveLink)
  },[])
    

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
