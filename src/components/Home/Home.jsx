import styles from './Home.module.css'

const Home = () => {
  return (
    <div
      className={styles.home}
      id='about'
    >
      <section className={styles.leftHome}>
        <img
          src='/assets/images/photo2.png'
          alt='photo'
          className={styles.myPhoto}
        />
      </section>
      <section className={styles.rightHome}>
        <h2 className={styles.name}>
          hi, i&apos;m <span className={styles.myName}>sonia hiltner. </span> a
          web developer.
        </h2>
        <p> and i love to create beautiful things.</p>
      </section>
    </div>
  )
}

export default Home