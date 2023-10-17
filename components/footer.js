import React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='footer-cont'
    >
      <hr className='line' />
      <div className='footer-links-cont'>
        <div className='footer-row'>
          <div className='footer-links copyright-cont'>
            <p>Copyright © 2023 Jeremy Carmona. All rights reserved.</p>
          </div>
          <div className='footer-links'>
            <Link href='/about'>About</Link>
            <p className='divider'>|</p>
            <Link href='/privacy-policy'>Privacy Policy</Link>
            <p className='divider'>|</p>
            <Link href='/terms-of-uses'>Terms of Uses</Link>
          </div>
        </div>
        <div className='footer-links icons-cont'>
          <a
            href='https://github.com/JeremyCarmona3'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/jeremymcarmona/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
