import React from 'react'
import Menu from '@/components/menu/Menu'
import useMenu from '@/hooks/useMenu'
import Image from 'next/image'
import styles from './index.module.scss'

const AboutPage = () => {
  const { isMenuOpen, toggleMenu } = useMenu()

  return (
    <div className={styles.aboutPage}>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={styles.aboutPage__box}></div>
      <Image
        className={styles.aboutPage__profilePhoto}
        src='/images/Profile-photo.png'
        width={400}
        height={500}
        alt='Profile photo'
      />

      <div className={styles.aboutPage__text}>
        <p>
          As a Software developer, I am dedicated to creating stunning and
          dynamic user interfaces that provide exceptional user experiences.
          With a strong work ethic, I always give 100% to every project,
          ensuring that each one is completed to the best of my abilities.
          Throughout my career, I have built strong relationships with
          teammates, collaborating and working together to create successful
          results. Communication is key in any team environment, and I am proud
          to have worked with diverse populations and successfully overcome any
          communication gaps.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
