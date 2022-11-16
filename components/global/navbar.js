import React from 'react';

import Link from 'next/link';

import Popup from 'reactjs-popup';

import { motion } from 'framer-motion';

import BurgerIcon from './burger-icon';
import Menu from './menu';

export default function Navbar({}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className='navbar-cont'
    >
      <object data='JC_Icon_Dark.svg' width='40' height='40' />
      <div className='navbar-links'>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About</Link>
        <a href='/Jeremy_Carmona_Resume.pdf' target='_blank' rel='noreferrer'>
          Resume
        </a>
        <Popup
          modal
          overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
          closeOnDocumentClick={false}
          trigger={(open) => <BurgerIcon open={open} />}
        >
          {(close) => <Menu close={close} />}
        </Popup>
      </div>
    </motion.div>
  );
}
