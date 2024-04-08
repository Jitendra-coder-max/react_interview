import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Assuming you have a CSS file for Navbar styles

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Adjust this value according to your preference
  const scrollThreshold = 100;

  return (
    <nav className={scrollPosition > scrollThreshold ? 'scrolled' : ''}>
      {/* Your navbar content */}
    </nav>
  );
};

export default Navbar;
