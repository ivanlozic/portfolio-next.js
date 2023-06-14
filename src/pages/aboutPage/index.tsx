import React, { useState, useEffect } from 'react';
import Menu from '@/components/menu/Menu';
import useMenu from '@/hooks/useMenu';

const AboutPage = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
 

  return (
    <div className="aboutPage">
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
  
    </div>
  );
};

export default AboutPage;