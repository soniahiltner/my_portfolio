import styles from './Contact.module.css'
import { onValidate } from '../../utils/formValidator'
import Thanks from '../../components/Thanks/Thanks'
import {  useState } from 'react'



const Contact = () => {
  const initialData = {
    name: '',
    email: '',
    message: ''
  }
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const submitForm = (e) => {
    e.preventDefault()
    const err = onValidate(data)

    if (err === null) {
      setIsLoading(true)
      fetch('https://formsubmit.co/ajax/sonia.hiltner@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json)
          setIsLoading(false)
          setErrors({})
          setError(null)
          setData(initialData)
          setSuccess(true)
        })
        .catch((error) => {
          console.log(error)
          setError(error)
        })
        .finally(() => {
          setTimeout(() => {
            setSuccess(false)
            setError(null)
            setIsLoading(false)
          }, 4000)
        })
    } else {
      setErrors(err)
    }
  }

  return (
    <section className={styles.contact} id='contact'>
      <form
        className={styles.contactForm}
        onSubmit={submitForm}
      >
        <legend>Contact me</legend>
        <input
          value={data.name}
          type='text'
          name='name'
          placeholder='Your name'
          onChange={handleChange}
          required
        />
        <input
          value={data.email}
          type='email'
          name='email'
          placeholder='Your email'
          title='Enter a valid email'
          onChange={handleChange}
          required
        />

        <textarea
          value={data.message}
          name='message'
          cols='50'
          rows='10'
          placeholder='Your message'
          title='Your message must not exceed 255 characters'
          onChange={handleChange}
          required
        />
        <input
          type='submit'
          value='Get in touch'
          className={styles.submitBtn}
        />
        {isLoading && !error && (
          <div className={styles.contactFormLoader}>
            <img
              src='/assets/images/loader.svg'
              alt='Sending...'
            />
          </div>
        )}
        {errors && !isLoading && (
          <div className={styles.errors}>
            {Object.values(errors).map((error, index) => (
              <span key={index}> {error}</span>
            ))}
          </div>
        )}
        {error && (
          <div className={styles.errors}>
            <span>An error occurred while sending, please try again</span>
          </div>
        )}
        {success && <Thanks />}
      </form>
    </section>
  )
}

Contact.displayName = 'Contact'

export default Contact
