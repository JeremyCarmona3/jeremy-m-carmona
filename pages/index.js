import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import OnMePic from '../public/OnMe_MacBook.png';
import MojiMealsPic from '../public/MojiMeals_MacBook.png';
import WestPointHotelPic from '../public/WestPointHotel_MacBook.png';
import PS4ControllerIllustration from '../public/Jeremy_Carmona_Assignment05-01.png';

import Navbar from '../components/global/navbar';
import Footer from '../components/global/footer';
import Polaroid from '../components/global/polaroid';

export default function Home() {
  const router = useRouter();
  return (
    <div className='main-cont'>
      <Head>
        <title>Jeremy Carmona</title>
        <meta name='title' content='Jeremy Carmona' />
        <meta
          name='keywords'
          content='Jeremy Carmona, Jeremy Carmona Front-end Developer portfolio, BCIT Digital Design and Development (D3) 2022'
        />
        <meta
          name='description'
          content='Jeremy Carmona is a solution-driven front-end developer with a solid understanding in how to design and develop cross-platform applications.'
        />
        <meta name='author' content='Jeremy Carmona' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='google-site-verification'
          content='6Ydm5F2LXehzE-WSRujTL_t_TecSLbMEqmwRAsf3im0'
        />
        <link rel='icon' href='/JC_Icon.svg' />
      </Head>
      <Navbar home='home' />
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className='content'
      >
        <div className='header'>
          <p>Jeremy Carmona</p>
          <p>Front-end Developer | UI/UX Designer</p>
          <h1>
            Hi, I am a solution-driven Front-end Developer based in Vancouver,
            BC. Welcome to my portfolio 👋
          </h1>
        </div>
        <div className='row projects-cont'>
          <div
            className='polaroid-cont'
            onClick={() => router.push('/projects')}
          >
            <Polaroid
              image={OnMePic}
              alt='OnMe Application Screenshots'
              caption='OnMe'
            />
          </div>
          <div
            className='polaroid-cont'
            onClick={() => router.push('/projects')}
          >
            <Polaroid
              image={MojiMealsPic}
              alt='MojiMeals Website screenshot'
              caption='MojiMeals'
            />
          </div>
          <div
            className='polaroid-cont'
            onClick={() => router.push('/projects')}
          >
            <Polaroid
              image={PS4ControllerIllustration}
              alt='PS4 Controller Illustration screenshot'
              caption='PS4 Controller Illustration'
            />
          </div>
          <div
            className='polaroid-cont'
            onClick={() => router.push('/projects')}
          >
            <Polaroid
              image={WestPointHotelPic}
              alt='West Point Hotel screenshot'
              caption='West Point Hotel'
            />
          </div>
        </div>
      </motion.div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
