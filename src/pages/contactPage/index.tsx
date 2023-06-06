import Menu from '@/components/menu/Menu'
import useMenu from '@/hooks/useMenu'
import { useState } from 'react'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
 

  const { isMenuOpen, toggleMenu } = useMenu();



  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value)
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = {
      name,
      email,
      message
    }

    console.log(formData)

    setName('')
    setEmail('')
    setMessage('')
    setCurrentStep(0)
  }

  return (
    <div className='main'>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <h1> Get in touch</h1>
      <h4>
        If you wanna get in touch, discussing a potential collaboration, or
        simply saying hello, please feel free to complete the wonderful form
        below or send an email to ivanlozic995@gmail.com. Im eager to initiate a
        conversation and explore the possibilities.
      </h4>

      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>

      {currentStep === 0 && (
        <form onSubmit={handleNext}>
          <label>
            Name:
            <input
              type='text'
              value={name}
              placeholder='Fill with your name'
              onChange={handleNameChange}
            />
          </label>
          <button type='submit'>Next</button>
        </form>
      )}
      {currentStep === 1 && (
        <form onSubmit={handleNext}>
          <label>
            Email:
            <input
              type='email'
              value={email}
              placeholder='Fill with your email'
              onChange={handleEmailChange}
            />
          </label>
          <button type='submit'>Next</button>
        </form>
      )}
      {currentStep === 2 && (
        <form onSubmit={handleSubmit}>
          <label>
            Message:
            <textarea
              value={message}
              placeholder='Write your message'
              onChange={handleMessageChange}
            />
          </label>
          <button type='submit'>Submit your message</button>
        </form>
      )}
      <h3>Lets get social</h3>
      <div>
        <button>LINKEDIN</button>
        <button>GITHUB</button>
      </div>
    </div>
  )
}

export default ContactPage
