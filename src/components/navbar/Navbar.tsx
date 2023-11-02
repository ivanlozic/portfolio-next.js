import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <nav>
      <h3>Ivan Lozic</h3>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/aboutPage'>About me</Link>
        </li>
        <li>
          <Link href='/skillsPage'>Skills</Link>
        </li>
        <li>
          <Link href='/contactPage'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
