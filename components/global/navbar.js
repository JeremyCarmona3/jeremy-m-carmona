import React from 'react';

import Link from 'next/link';

export default function Navbar({}) {
  return (
    <div className='navbar-cont'>
      <object data='JC_Dark.svg' width='40' height='40' />
      <div className='navbar-links'>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About</Link>
        <Link href='/'>Resume</Link>
      </div>
    </div>
  );
}
