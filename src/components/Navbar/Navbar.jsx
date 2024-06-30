import { Link } from 'react-scroll'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <Link
          activeClass='active'
          activeStyle={{ backgroundColor: 'rgba(146, 96, 31, 0.408)' }}
          smooth={true}
          spy={true}
          to='about'
          offset={-100}
        >
          About
        </Link>
        <Link
          activeClass='active'
          activeStyle={{ backgroundColor: 'rgba(146, 96, 31, 0.408)' }}
          smooth={true}
          spy={true}
          to='projects'
          offset={-100}
        >
          Projects
        </Link>
        <Link
          activeClass='active'
          activeStyle={{ backgroundColor: 'rgba(146, 96, 31, 0.408)' }}
          smooth={true}
          spy={true}
          to='contact'
          offset={-100}
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
