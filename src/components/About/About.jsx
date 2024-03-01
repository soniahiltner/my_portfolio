import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About me</h2>
      <p>
        I started programming in 2021 as a self-taught person following the
        <a
          href='https://www.freecodecamp.org/fcc8021d9ee-a905-4650-bda4-14371e852283'
          className={styles.fccLink}
        >
          freeCodeCamp curriculum
        </a>
        . I do not have work experience in any company, but in this period I
        have developed enough personal projects that have allowed me to acquire
        the following knowledge:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>PostgreSQL</li>
        <li>Git</li>
        <li>VSCode</li>
        <li>Python</li>
        <li>Bootstrap</li>
      </ul>
      <div className={styles.resumeBtn}>
        <button className={styles.downloadBtn}>
        <a
            href='/assets/Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
        >
          Download CV <i className='fa fa-download'></i>
        </a>
      </button>
      </div>
      
    </div>
  )
}

export default About
