
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ContactLinks from './components/ContactLinks/ContactLinks'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'

function App() {
  
  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <ContactLinks />
      <Footer />
    </div>
  )
}

export default App
