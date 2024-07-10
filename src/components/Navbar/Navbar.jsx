import { useState } from 'react'
import styles from './Navbar.module.css'
import NavLink from '../NavLink/NavLink'

const Navbar = () => {
  const menuItmes = [
    { id: 1, name: 'About', link: 'about' },
    { id: 2, name: 'Projects', link: 'projects' },
    { id: 3, name: 'Contact', link: 'contact' }
  ]
  const [active, setActive] = useState(0)

  return (
    <div className={styles.navbar}>
      <nav>
        {menuItmes.map((item) => (
          <NavLink
            key={item.id}
            id={item.id}
            name={item.name}
            link={item.link}
            active={active}
            setActive={setActive}
          />
        ))}
      </nav>
    </div>
  )
}

export default Navbar
