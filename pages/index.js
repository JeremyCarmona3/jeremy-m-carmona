import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import OnMePic from '../public/OnMe_iPhone13Pro.png';
import MojiMealsPic from '../public/MojiMeals_MacBook.png';
import WestPointHotelPic from '../public/WestPointHotel_MacBook.png';
import PS4ControllerIllustration from '../public/Jeremy_Carmona_Assignment05-01.png';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Polaroid from '../components/polaroid';

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
          <h1>Jeremy Carmona</h1>
          <h3>Front-end Developer | UI/UX Designer</h3>
          <p>
            I am a front-end developer with a background in UI/UX design,
            graphic design, and digital design. I graduated from the Digital
            Design and Development program at BCIT in 2022. From this program, I
            learned how to design and develop cross-platform applications. We
            were taught industry standard practices and how to work
            collaboratively as a team to create projects. In the future, I want
            to advance my development knowledge and become a full-stack
            developer.
          </p>
        </div>
        <div className='row projects-cont'>
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
              image={OnMePic}
              alt='OnMe Application screenshots'
              caption='OnMe'
            />
          </div>
          {/* <div
            className='polaroid-cont'
            onClick={() => router.push('/projects')}
          >
            <Polaroid
              image={PS4ControllerIllustration}
              alt='PS4 Controller Illustration screenshot'
              caption='PS4 Controller Illustration'
            />
          </div> */}
          <div
            className='polaroid-cont'
            onClick={() => router.push('/projects')}
          >
            <Polaroid
              image={WestPointHotelPic}
              alt='West Point Hotel website screenshot'
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
