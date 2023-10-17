import React from 'react';

import Link from 'next/link';

export default function Menu({ close }) {
  return (
    <div className='menu'>
      <ul>
        <Link href='/'>
          <li onClick={close}>Home</li>
        </Link>
        <Link href='/projects'>
          <li onClick={close}>Projects</li>
        </Link>
        <Link href='/about'>
          <li onClick={close}>About</li>
        </Link>
        <a href='/Jeremy_Carmona_Resume.pdf' target='_blank' rel='noreferrer'>
          <li onClick={close}>Resume</li>
        </a>
      </ul>
    </div>
  );
}
