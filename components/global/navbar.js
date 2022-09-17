import React from 'react';

import Link from 'next/link';

export default function Navbar({}) {
  return (
    <div className='navbar-cont'>
      <object data='JC_Dark.svg' width='40' height='40' />
      <div className='navbar-links'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/'>
          <a>Resume</a>
        </Link>
      </div>
    </div>
  );
}
