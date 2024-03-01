import styles from './ContactLinks.module.css'

const ContactLinks = () => {
  return (
    <div className={styles.contactLinks}>
      <a
        href='https://www.linkedin.com/in/sonia-hiltner/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-linkedin'></i>
      </a>
      <a
        href='https://github.com/soniahiltner'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-github'></i>
      </a>
      <a
        href='mailto:sonia.hiltner@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fas fa-envelope'></i>
      </a>
    </div>
  )
}

export default ContactLinks
