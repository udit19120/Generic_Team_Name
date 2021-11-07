
import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import '../style/HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (

    <div className='hero-container'>
      <video src='/videos/myntra-1.mp4' autoPlay loop muted />
      <h1>Welcome to India's Fashion Hub</h1>
      <p>Experience Magic</p>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick='/services'

        >
          <Link
            to='/virtualtryon'
            className='link'
            onClick={closeMobileMenu}
            color='black'
          >
            Virtual Try-On (Clothes)
          </Link>
          
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link
            to='/accesories'
            className='link'
            onClick={closeMobileMenu}
            color='black'
          >
            Virtual Try-On (Accessories)
          </Link>
          
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link
            to='/games'
            className='link'
            onClick={closeMobileMenu}
            color='black'
          >
            Play Games
          </Link>
          
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
