import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

type MenuProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Menu({
  isMenuOpen,
  toggleMenu,
}: MenuProps) {
  const iconSize = {
    height: '40px',
    width: '40px'
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX style={iconSize} />
          ) : (
            <FiMenu style={{ ...iconSize, color: 'black' }} />
          )}
        </button>
        {isMenuOpen && (
          <div className={styles.overlay}>
            <ul className={styles.menu}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Skills</a>
              </li>
              <li>
                <Link href='/contactPage'>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
