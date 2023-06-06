import Menu from '@/components/menu/Menu'
import useMenu from '@/hooks/useMenu'

const SkillsPage = () => {
  const { isMenuOpen, toggleMenu } = useMenu()

  return (
    <div className='main'>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  )
}

export default SkillsPage
