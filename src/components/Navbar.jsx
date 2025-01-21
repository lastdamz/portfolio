import React from 'react';
import Logo from '../assets/bwg.png'
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-40' src={Logo} alt='logo here' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            {/* LinkedIn Link */}
      <a href='https://www.linkedin.com/in/tonderai-last-madziva-14b5161b3/' target='_blank' rel='noopener noreferrer'
      className=' hover:text-pink-700 transition-colors duration-300'
      >
        <FaLinkedin />
      </a>
      {/* GitHub Link */}
      <a 
        href='https://github.com/lastdamz' 
        target='_blank' 
        rel='noopener noreferrer' 
        className=' hover:text-pink-700 transition-colors duration-300'
      >
        <FaGithub />
      </a>
      {/* Instagram Link */}
      <a href='https://www.instagram.com/last_damz' target='_blank' rel='noopener noreferrer'
      className=' hover:text-pink-700 transition-colors duration-300'
      >
        <FaInstagram />
      </a>
      {/* Twitter Link */}
      <a href='https://twitter.com/DamztheSaint' target='_blank' rel='noopener noreferrer'
      className=' hover:text-pink-700 transition-colors duration-300'
      >
        <FaSquareXTwitter />
      </a>
        </div>
    </nav>
  );
}

export default Navbar;
