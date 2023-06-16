import React, { useState, useEffect } from 'react';
import Menu from '@/components/menu/Menu';
import useMenu from '@/hooks/useMenu';
import Image from 'next/image';

const AboutPage = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
 

  return (
    <div className="aboutPage">
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere facilis consectetur eum ut sed quos neque officiis laudantium et dolore nemo suscipit, vero delectus eaque, adipisci accusamus quas maxime? Ducimus enim doloribus totam a, impedit fugit accusantium. Debitis voluptatum repellat soluta, ab delectus consequatur fugiat odio. Dolorem aliquam rerum ratione!</p>

    

    </div>
  );
};

export default AboutPage;