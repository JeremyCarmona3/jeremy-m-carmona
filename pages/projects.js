import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion';

import {
  SiVercel,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiExpo,
  SiFirebase,
  SiMysql,
  SiPhp,
  SiFigma,
  SiWordpress,
} from 'react-icons/si';

import OnMePic from '../public/OnMe_MacBook.png';
import MojiMealsPic from '../public/MojiMeals_MacBook.png';
import WestPointHotelPic from '../public/WestPointHotel_MacBook.png';
import PS4ControllerIllustration from '../public/Jeremy_Carmona_Assignment05-01.png';

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
        <link rel='icon' href='/JC_Icon.svg' />
      </Head>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className='content'
      >
        <h1>Projects</h1>
        <div className='projects'>
          <h2>MojiMeals (Fullstack Developer)</h2>
          <p>February 2022 - March 2022</p>
          {/* <div>
            <Image
              src={MojiMealsPic}
              // 1296 × 784
              // width={1296}
              // height={784}
              // fill={false}
              alt='Picture of the author'
            />
          </div> */}
          <h3>Summary</h3>
          <p>
            MojiMeals is an application that will display a list of emojis from
            a chosen dataset from Kaggle. When a user clicks an emoji, it will
            lead to the next page and show the nutrition data of the emoji
            ingredient or food. It features other pages such as Find Recipe,
            Settings, and Nutrition Calculator.
          </p>
          <div className='projects-info'>
            <div className='projects-image'>
              <Image
                src={MojiMealsPic}
                // 1296 × 784
                // width={1296}
                // height={784}
                // fill={false}
                alt='Picture of the author'
              />
            </div>
            {/* Vercel React Next.js Styled-components Node.js MongoDB Socket.IO */}
            <div className='projects-icons'>
              <h3>Made with</h3>
              <div className='react-icons-grid'>
                <div className='react-icons-cont'>
                  <SiVercel size={100} />
                  <p>Vercel</p>
                </div>
                <div className='react-icons-cont'>
                  <SiReact size={100} />
                  <p>React</p>
                </div>
                <div className='react-icons-cont'>
                  <SiNextdotjs size={100} />
                  <p>Next.js</p>
                </div>
                <div className='react-icons-cont'>
                  <SiStyledcomponents size={100} />
                  <p>Styled-components</p>
                </div>
                <div className='react-icons-cont'>
                  <SiNodedotjs size={100} />
                  <p>Node.js</p>
                </div>
                <div className='react-icons-cont'>
                  <SiMongodb size={100} />
                  <p>MongoDB</p>
                </div>
                <div className='react-icons-cont'>
                  <SiSocketdotio size={100} />
                  <p>Socket.IO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='projects'>
          <h2>OnMe (Front-End Developer)</h2>
          <p>September 2021 - December 2021</p>
          <h3>Summary</h3>
          <p>
            OnMe is a cross-platform mobile app dedicated to the lonely
            residents of Metro Vancouver. It allows the user to order anyone
            inside the current restaurant a food or drink item based on their
            table and seat number. It was created by D3 BCIT students as our 3rd
            semester final project. The proof of concept was presented to 200
            people, including students, faculty, and industry experts.
          </p>
          <div className='projects-info'>
            <div className='projects-image'>
              <Image
                src={OnMePic}
                // 793 × 958
                // width={793}
                // height={958}
                // fill={false}
                alt='Picture of the author'
              />
            </div>
            <div className='projects-icons'>
              <h3>Made with</h3>
              <div className='react-icons-grid'>
                <div className='react-icons-cont'>
                  <SiReact size={100} />
                  <p>React Native</p>
                </div>
                <div className='react-icons-cont'>
                  <SiExpo size={100} />
                  <p>Expo</p>
                </div>
                <div className='react-icons-cont'>
                  <SiStyledcomponents size={100} />
                  <p>Styled-components</p>
                </div>
                <div className='react-icons-cont'>
                  <SiFirebase size={100} />
                  <p>Firebase</p>
                </div>
                <div className='react-icons-cont'>
                  <SiMysql size={100} />
                  <p>MySQL</p>
                </div>
                <div className='react-icons-cont'>
                  <SiPhp size={100} />
                  <p>PHP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='projects'>
          <h2>West Point Hotel (WordPress Developer and UI/UX Designer)</h2>
          <p>January 2021 - May 2021</p>
          <h3>Summary</h3>
          <p>
            West Point Hotel is a hotel booking website created for a mock-up
            client. To simulate the experience of creating a project for a
            client, our instructor acted as our client and gave us the assets
            needed for the website.
          </p>
          <div className='projects-info'>
            <div className='projects-image'>
              <Image
                src={WestPointHotelPic}
                // 1296 × 784
                // width={1296}
                // height={784}
                // fill={false}
                alt='Picture of the author'
              />
            </div>
            <div className='projects-icons'>
              <h3>Made with</h3>
              <div className='react-icons-grid'>
                <div className='react-icons-cont'>
                  <SiFigma size={100} />
                  <p>Figma</p>
                </div>
                <div className='react-icons-cont'>
                  <SiWordpress size={100} />
                  <p>WordPress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='projects'>
          <h2>PS4 Controller Illustration (November 2020)</h2>
          <h3>Role: Graphic Designer</h3>
        </div> */}
        {/* <div className='projects'>
          <h2>MojiMeals (February 2022 - March 2022)</h2>
          <h2>OnMe (September 2021 - December 2021)</h2>
          <h2>West Point Hotel (January 2021 - May 2021)</h2>
          <h2>PS4 Controller Illustration (November 2020)</h2> */}
        {/* <div>
            <div className='projects-polaroid'>
              <Polaroid
                image={OnMePic}
                alt='OnMe Application Screenshots'
                caption='OnMe'
              />
            </div>
          </div> */}
        {/* <div className='project-cont'>
            <div className='projects-description'>
              <h3>OnMe</h3>
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
                <h3>Made With</h3>
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
                <h3>Links</h3>
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
          </div> */}
        {/* </div> */}
        {/* <div className='projects'>
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
              <h3>MojiMeals</h3>
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
                <h3>Made With</h3>
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
                <h3>Links</h3>
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
        <div className='projects'>
          <div>
            <div className='projects-polaroid'>
              <Polaroid
                image={PS4ControllerIllustration}
                alt='PS4 Controller Illustration screenshot'
                caption='PS4 Controller Illustration'
              />
            </div>
          </div>
          <div className='project-cont'>
            <div className='projects-description'>
              <h3>PS4 Controller Illustration</h3>
              <div>
                <p>
                  This was an assignment where we were tasked to choose a
                  mechanical object and illustrate it using Adobe Illustrator.
                </p>
              </div>
            </div>
            <div className='projects-info'>
              <div className='projects-info-col'>
                <h3>Made With</h3>
                <div>
                  <p>Adobe Illustrator</p>
                </div>
              </div>
              <div className='projects-info-col'>
                <h3>Files</h3>
                <a
                  href='/Jeremy_Carmona_Assignment05-01.png'
                  target='_blank'
                  rel='noreferrer'
                >
                  View Illustration
                </a>
                <p>AI file will be available upon request.</p>
              </div>
            </div>
          </div>
          ;
        </div> */}
      </motion.div>
      <Footer />
    </div>
  );
}
