import styles from './Home.module.css'

const Home = () => {
  return (
    <div
      className={styles.home}
    >
      <div className={styles.leftHome}>
        <img
          src='/assets/images/photo2.png'
          alt='photo'
          className={styles.myPhoto}
        />
      </div>
      <div className={styles.rightHome}>
        <h2 className={styles.name}>
          hi, i&apos;m <span className={styles.myName}>sonia hiltner. </span> a
          web developer.
        </h2>
        <p> and i love to create beautiful things.</p>
      </div>
    </div>
  )
}

export default Home