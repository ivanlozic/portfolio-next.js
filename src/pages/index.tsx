import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Menu from '@/components/menu/Menu'
import useMenu from '@/hooks/useMenu';

const inter = Inter({ subsets: ['latin'] })

const iconSize = {
  height: '40px',
  width: '40px'
}

export default function Home() {
  const [isFirstContentVisible, setFirstContentVisible] = useState(true)
  const [isSecondContentVisible, setSecondContentVisible] = useState(false)
  const [isButtonClicked, setButtonClicked] = useState(false)
  const [typedText, setTypedText] = useState('')



  const { isMenuOpen, toggleMenu } = useMenu();

  const showSecondContent = () => {
    setButtonClicked(true)
    setTimeout(() => {
      setFirstContentVisible(false)
      setSecondContentVisible(true)
    }, 500)
  }

  useEffect(() => {
    if (isFirstContentVisible) {
      let intervalId = setInterval(() => {
        const originalText =
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, illum. Facere voluptates sequi laboriosam modi quisquam id sapiente ipsa aliquam!'
        const currentLength = typedText.length
        const remainingText = originalText.slice(currentLength)

        if (remainingText) {
          setTypedText((prevText) => prevText + remainingText.charAt(0))
        } else {
          clearInterval(intervalId)
        }
      }, 50)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [isFirstContentVisible, typedText.length])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
        <Menu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />

          {isFirstContentVisible && (
            <div
              className={`${styles.first} ${
                isButtonClicked ? styles.animateOut : ''
              }`}
            >
              <div className={styles.text}>
                <h1>{typedText}</h1>
                <button className={styles.button} onClick={showSecondContent}>
                  Click me to show second content
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      {isSecondContentVisible && (
        <div className={`${styles.second} ${styles.animateIn}`}>
          Ivan Portfolio radovi
        </div>
      )}
    </>
  )
}
