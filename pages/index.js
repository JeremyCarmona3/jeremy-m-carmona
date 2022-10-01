import Head from 'next/head';
import { useRouter } from 'next/router';

import OnMePic from '../public/OnMe.png';
import MojiMealsPic from '../public/MojiMeals.png';

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
          content='This portfolio includes projects in front-end development. Jeremy Carmona graduated from the D3 program at BCIT in 2022.'
        />
        <meta name='author' content='Jeremy Carmona' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/JC.svg' />
      </Head>
      <Navbar home='home' />
      <div className='content'>
        <h1>
          Hi, I{"'"}m Jeremy and I am a front-end developer with a background in
          UX/UI design. Welcome to my portfolio 👋
        </h1>
        <p>
          I am a recent graduate of the{' '}
          <a
            href='https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/'
            target='_blank'
            rel='noreferrer'
          >
            Digital Design and Development
          </a>{' '}
          program at the British Columbia Institute of Technology. During my 2
          years at BCIT, I have learned how to design and develop web and mobile
          cross-platform applications.
        </p>
        <div className='row'>
          <div className='row relevant-experience-cont'>
            <div className='relevant-experience'>
              <h2>Experience</h2>
              <div>
                <p>Goopter Holdings Ltd.</p>
                <p>Front-end Developer Intern</p>
                <p>April 2022-May 2022</p>
              </div>
            </div>
            <div className='relevant-experience'>
              <h2>Projects</h2>
              <div>
                <p>MojiMeals</p>
                <p>Full-stack Developer</p>
                <p>February 2022-March 2022</p>
              </div>
              <div>
                <p>OnMe</p>
                <p>Front-end Developer</p>
                <p>September 2021-December 2021</p>
              </div>
            </div>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
