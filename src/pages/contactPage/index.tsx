import Menu from '@/components/menu/Menu'
import useMenu from '@/hooks/useMenu'
import { useState } from 'react'
import React from 'react'
import emailjs from '@emailjs/browser'
import styles from './index.module.scss'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const { isMenuOpen, toggleMenu } = useMenu()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_k34ijro',
        'template_rgwj79u',
        event.currentTarget,
        '6oyvboMgrwfa6ef96'
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      )

    const formData = {
      name,
      email,
      message
    }

    setName('')
    setEmail('')
    setMessage('')
    setCurrentStep(0)
  }

  const isNextButtonDisabled = () => {
    if (currentStep === 0 && name === '') {
      return true
    }
    if (
      (currentStep === 1 && email === '') ||
      (currentStep === 1 && !email.includes('@'))
    ) {
      return true
    }
    if (currentStep === 2 && message === '') {
      return true
    }
    return false
  }
  const isButtonDisabled = isNextButtonDisabled()

  return (
    <div className={styles.contactPage}>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={styles.contactPage__container}>
        <h1> Get in touch</h1>
        <h4>
          If you wanna get in touch, discussing a potential collaboration, or
          simply saying hello, please feel free to complete the wonderful form
          below or send an email to ivanlozic995@gmail.com. Im eager to initiate
          a conversation and explore the possibilities.
        </h4>

        <div className={styles.contactPage__container__}>
          <p>{name}</p>
          <p>{email}</p>
        </div>

        {currentStep === 0 && (
          <form onSubmit={handleNextStep}>
            <label>Name:</label>
            <div>
              <input
                type='text'
                value={name}
                placeholder='Fill with your name'
                onChange={handleNameChange}
                name='user_name'
              />
              <button
                type='submit'
                style={{
                  backgroundColor: isButtonDisabled ? '' : '#29bff3',
                  color: isButtonDisabled ? '' : 'white'
                }}
                disabled={isButtonDisabled}
              >
                Next
              </button>
            </div>
          </form>
        )}
        {currentStep === 1 && (
          <form onSubmit={handleNextStep}>
            <label>Email:</label>

            <div>
              <input
                type='email'
                value={email}
                placeholder='Fill with your email'
                onChange={handleEmailChange}
                name='user_email'
              />

              <button
                type='submit'
                style={{
                  backgroundColor: isButtonDisabled ? '' : '#29bff3',
                  color: isButtonDisabled ? '' : 'white'
                }}
                disabled={isButtonDisabled}
              >
                Next
              </button>
            </div>
          </form>
        )}
        {currentStep === 2 && (
          <form onSubmit={handleSubmit}>
            <label>Message:</label>

            <div>
              <input
                type='text'
                value={message}
                placeholder='Write your message'
                name='message'
                onChange={handleMessageChange}
              />

              <button
                type='submit'
                style={{
                  backgroundColor: isButtonDisabled ? '' : '#29bff3',
                  color: isButtonDisabled ? '' : 'white'
                }}
                disabled={isButtonDisabled}
              >
                Submit your message
              </button>
            </div>
          </form>
        )}

        <div className={styles.contactPage__container__buttonBox}>
          <h3>Lets get social</h3>
          <button>
            <a
              href='https://www.linkedin.com/in/ivan-lozi%C4%87-b72126221/'
              target='_blank'
            >
              LINKEDIN
            </a>
          </button>
          <button>
            <a href='https://github.com/ivanlozic' target='_blank'>
              GITHUB
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
