import Head from 'next/head';
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
        <div className='about-me-margin'>
          <div className='about-me-row'>
            <div className='avatar-polaroid'>
              <Polaroid
                image={Avatar}
                alt='Avatar of Jeremy'
                caption="I'm Jeremy 👋"
              />
            </div>
            <div className='about-me-text'>
              <p>
                Hi my name is Jeremy Carmona. I am a front-end developer with a
                background in UI/UX design, graphic design, and digital design.
                I graduated from the Digital Design and Development program at
                BCIT in 2022. From this program, I learned how to design and
                develop cross-platform applications. We were taught industry
                standard practices and how to work collaboratively as a team to
                create projects. In the future, I want to advance my development
                knowledge and become a full-stack developer.
              </p>
            </div>
          </div>
          <div className='about-me-row flex-skills'>
            <div className='skills'>
              <h2>Programming Languages</h2>
              <div>
                <p>JavaScript (ES6)</p>
                <p>HTML</p>
                <p>SASS/CSS</p>
                <p>TypeScript</p>
              </div>
            </div>
            <div className='skills'>
              <h2>Libraries & Frameworks</h2>
              <div>
                <p>React</p>
                <p>Next.js</p>
                <p>Styled-components</p>
                <p>Storybook.js</p>
                <p>React Native</p>
                <p>Expo</p>
                <p>MongoDB</p>
                <p>Socket.IO</p>
                <p>Redux</p>
                <p>Electron</p>
              </div>
            </div>
            <div className='skills'>
              <h2>Tools & Platforms</h2>
              <div>
                <p>Vercel</p>
                <p>Node.js</p>
                <p>Git</p>
                <p>Firebase</p>
                <p>Heroku</p>
              </div>
            </div>
            <div className='skills'>
              <h2>Design</h2>
              <div>
                <p>Figma</p>
                <p>Illustrator</p>
                <p>Photoshop</p>
                <p>After Effects</p>
                <p>Premiere Pro</p>
                <p>InDesign</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
