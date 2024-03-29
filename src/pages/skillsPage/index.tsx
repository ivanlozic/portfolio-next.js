import React, { useState, useEffect } from 'react'
import Menu from '@/components/menu/Menu'
import useMenu from '@/hooks/useMenu'
import Image from 'next/image'
import Spinner from '@/components/spinner/Spinner'

const iconSize = {
  width: 100,
  height: 100
}

const SkillsPage = () => {
  const { isMenuOpen, toggleMenu } = useMenu()
  const [paragraphs, setParagraphs] = useState<any[]>([])
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const paragraphData = [
      <Image
        src='/images/skill-icons/html.png'
        alt='HtmlIcon'
        key={0}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/css.png'
        alt='CssIcon'
        key={1}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/sass.png'
        alt='SassIcon'
        key={2}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/js.png'
        alt='JavascriptIcon'
        key={3}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/typescript.png'
        alt='TypescriptIcon'
        key={4}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/react.png'
        alt='ReactIcon'
        key={5}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/angular.png'
        alt='AngularIcon'
        key={6}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/nodejs.png'
        alt='NodeIcon'
        key={7}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/git.png'
        alt='GitIcon'
        key={8}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/figma.png'
        alt='FigmaIcon'
        key={9}
        width={iconSize.width}
        height={iconSize.height}
      />,
      <Image
        src='/images/skill-icons/illustrator.png'
        alt='IllustratorIcon'
        key={10}
        width={iconSize.width}
        height={iconSize.height}
      />
    ]

    const interval = setInterval(() => {
      setCurrentParagraphIndex((prevIndex) => prevIndex + 1)
    }, 700)

    setParagraphs(paragraphData)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const renderedParagraphs = paragraphs
    .slice(0, currentParagraphIndex)
    .map((paragraph, index) => (
      <p className='paragraph' key={index}>
        {paragraph}
      </p>
    ))

  return (
    <div className='skillsPage'>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className='paragraphs'>{renderedParagraphs}</div>
        )}
      </main>
    </div>
  )
}

export default SkillsPage
