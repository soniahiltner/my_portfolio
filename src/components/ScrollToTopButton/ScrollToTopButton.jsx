import styles from './ScrollToTopButton.module.css'

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={handleScrollToTop}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 11l7-7 7 7M5 19l7-7 7 7'
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollToTopButton
