import { useState } from 'react';

export default function useMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return { isMenuOpen, toggleMenu };
}