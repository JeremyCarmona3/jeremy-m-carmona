import Head from 'next/head';

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
        <link rel='icon' href='JC.svg' />
      </Head>
      <Navbar />
      <div className='content'>
        <h1>About Me</h1>
        <div>
          <div className='about-me-row'>
            <div>
              <p>
                Hi my name is Jeremy Carmona. I am a front-end developer and I
                graduated from the Digital Design and Development program at
                BCIT in 2022. From this program, I learned how to design and
                develop cross-platform applications. We were taught industry
                standard practices and how to work collaboratively as a team to
                create projects. In the future, I want to advance my development
                knowledge and become a full-stack developer.
              </p>
            </div>
            <div className='avatar-polaroid'>
              <Polaroid
                image={Avatar}
                alt='Avatar of Jeremy'
                caption='Front-end Developer'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
