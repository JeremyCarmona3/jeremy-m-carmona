import React from 'react';

import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer({}) {
  return (
    <div className='footer-cont'>
      <hr className='line' />
      <div className='footer-links-cont'>
        <div className='footer-links'>
          <p>Copyright © 2022 Jeremy Carmona. All rights reserved.</p>
          <Link href='/about'>About</Link>
          <p className='divider'>|</p>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <p className='divider'>|</p>
          <Link href='/terms-of-uses'>Terms of Uses</Link>
        </div>
        <div className='footer-links'>
          <a
            href='https://github.com/JeremyCarmona3'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/jeremy-carmona-0685731bb/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}