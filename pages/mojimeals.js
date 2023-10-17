import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function MojiMeals() {
  return (
    <div className='main-cont'>
      <Head>
        <title>Moji Meals</title>
        <meta
          name='keywords'
          content='Jeremy Carmona Front-end Developer portfolio, BCIT Digital Design and Development (D3) 2022'
        />
        <meta name='description' content='Moji Meals web app project' />
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
        <h1>Moji Meals</h1>
        <div></div>
      </motion.div>
      <Footer />
    </div>
  );
}
