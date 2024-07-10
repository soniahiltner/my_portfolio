
import { useEffect } from 'react'
import styles from './NavLink.module.css'
import PropTypes from 'prop-types'

const NavLink = ({ id, name, link, active, setActive }) => {

  // Handle scrolling to the section when clicking on a link
  const handleScroll = (link) => {
    const element = document.getElementById(link)
    if (!element) return
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: 'smooth'
    })
  }

  // Handle the active link in the navbar when clicking on a link
  const handleClick = (id, link) => {
    setActive(id)
    handleScroll(link)
  }

  // Handle the active link in the navbar when scrolling
  const handleActiveLink = () => {
    const sections = document.querySelectorAll('section')
    const navlinks = document.querySelectorAll('nav button')
    sections.forEach((section) => {
      const top = window.scrollY
      const sectionTop = section.offsetTop - 300
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')
      if (top >= sectionTop && top < sectionTop + sectionHeight) {
        navlinks.forEach((link) => {
          let text = link.textContent.toLowerCase()
          if (text === `${sectionId}`) {
            setActive(parseInt(link.id))
          }
        })
      } 
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', handleActiveLink)
    return () => window.removeEventListener('scroll', handleActiveLink)
  },[])

  return (
    <button
      id={id}
      className={
        active === id ? styles.active + ' ' + styles.navLink : styles.navLink
      }
      onClick={() => handleClick(id, link)}
    >
      {name}
    </button>
  )
}

NavLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
}


export default NavLink