import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  )
}

export default Navbar