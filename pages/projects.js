import Head from 'next/head';

import OnMePic from '../public/OnMe.png';
import MojiMealsPic from '../public/MojiMeals.png';

import Navbar from '../components/global/navbar';
import Footer from '../components/global/footer';
import Polaroid from '../components/global/polaroid';

export default function Projects() {
  return (
    <div className='main-cont'>
      <Head>
        <title>Projects</title>
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
        <link rel='shortcut icon' href='/JC.svg' />
      </Head>
      <Navbar />
      <div className='content'>
        <h1>Projects</h1>
        <div className='projects'>
          <div>
            <div className='projects-polaroid'>
              <Polaroid
                image={OnMePic}
                alt='OnMe Application Screenshots'
                caption='OnMe'
              />
            </div>
          </div>
          <div className='project-cont'>
            <div className='projects-description'>
              <h2>OnMe</h2>
              <div>
                <p>
                  OnMe is a cross-platform mobile app dedicated to the lonely
                  residents of Metro Vancouver. It allows the user to order
                  anyone inside the current restaurant a food or drink item
                  based on their table and seat number. It was created by D3
                  BCIT students as our 3rd semester final project. The proof of
                  concept was presented to 200 people, including students,
                  faculty, and industry experts.
                </p>
              </div>
            </div>
            <div className='projects-info'>
              <div className='projects-info-col'>
                <h2>Made With</h2>
                <div>
                  <p>React Native</p>
                  <p>Expo</p>
                  <p>Styled-components</p>
                  <p>Firebase</p>
                  <p>MySQL</p>
                  <p>PHP</p>
                </div>
              </div>
              <div className='projects-info-col'>
                <h2>Links</h2>
                <a
                  href='https://youtu.be/1NiF7avZNEI'
                  target='_blank'
                  rel='noreferrer'
                >
                  Application Demo
                </a>
                <a
                  href='https://github.com/dnguyen130/onme'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='projects'>
          <div>
            <div className='projects-polaroid'>
              <Polaroid
                image={MojiMealsPic}
                alt='MojiMeals Website screenshot'
                caption='MojiMeals'
              />
            </div>
          </div>
          <div className='project-cont'>
            <div className='projects-description'>
              <h2>MojiMeals</h2>
              <div>
                <p>
                  MojiMeals is an application that will display a list of emojis
                  from a chosen dataset from Kaggle. When a user clicks an
                  emoji, it will lead to the next page and show the nutrition
                  data of the emoji ingredient or food. It features other pages
                  such as Find Recipe, Settings, and Nutrition Calculator.
                </p>
              </div>
            </div>
            <div className='projects-info'>
              <div className='projects-info-col'>
                <h2>Made With</h2>
                <div>
                  <p>Vercel</p>
                  <p>React</p>
                  <p>Next.js</p>
                  <p>Styled-components</p>
                  <p>Node.js</p>
                  <p>MongoDB</p>
                  <p>Socket.IO</p>
                </div>
              </div>
              <div className='projects-info-col'>
                <h2>Links</h2>
                <a
                  href='https://moji-meals.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Site
                </a>
                <a
                  href='https://github.com/JeremyCarmona3/moji-meals'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
