import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Avatar from '../public/Avatar.png';

import Navbar from '../components/global/navbar';
import Footer from '../components/global/footer';
import Polaroid from '../components/global/polaroid';

export default function About() {
  return (
    <div className='main-cont'>
      <Head>
        <title>About Me</title>
        <meta
          name='keywords'
          content='Jeremy Carmona Front-end Developer portfolio, BCIT Digital Design and Development (D3) 2022'
        />
        <meta
          name='description'
          content='This portfolio includes projects in front-end development. Jeremy Carmona graduated from the D3 program at BCIT in 2022.'
        />
        <meta name='author' content='Jeremy Carmona' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='google-site-verification'
          content='6Ydm5F2LXehzE-WSRujTL_t_TecSLbMEqmwRAsf3im0'
        />
        <link rel='icon' href='/JC_Icon.svg' />
      </Head>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className='content'
      >
        <h1>About Me</h1>
        <div className='about-me-col'>
          <div className='about-me-row'>
            <div className='profile-pic'>
              <Image
                src='/jeremy.png'
                width={2080}
                height={2080}
                // layout='responsive'
                alt='Picture of Jeremy'
              />
            </div>
            <div className='about-me-col about-me-summary'>
              <p className='about-me-text'>
                Hi my name is Jeremy Carmona. I am a front-end developer with a
                background in UI/UX design, graphic design, and digital design.
                I graduated from the Digital Design and Development program at
                BCIT in 2022. From this program, I learned how to design and
                develop cross-platform applications. We were taught industry
                standard practices and how to work collaboratively as a team to
                create projects. In the future, I want to advance my development
                knowledge and become a full-stack developer.
              </p>
              <div className='skills-cont'>
                <div className='about-me-row'>
                  <div className='skills'>
                    <h3>Programming Languages</h3>
                    <div>
                      <p>JavaScript (ES6)</p>
                      <p>HTML</p>
                      <p>SASS/CSS</p>
                      <p>TypeScript</p>
                    </div>
                  </div>
                  <div className='skills'>
                    <h3>Libraries & Frameworks</h3>
                    <div>
                      <p>React/React Native</p>
                      <p>Next.js</p>
                      <p>Redux</p>
                      <p>MongoDB</p>
                    </div>
                  </div>
                </div>
                <div className='about-me-row'>
                  <div className='skills'>
                    <h3>Tools & Platforms</h3>
                    <div>
                      <p>Git</p>
                      <p>Vercel</p>
                      <p>Node.js</p>
                      <p>WordPress</p>
                    </div>
                  </div>
                  <div className='skills'>
                    <h3>Design</h3>
                    <div>
                      <p>Figma</p>
                      <p>Illustrator</p>
                      <p>Photoshop</p>
                      <p>After Effects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
