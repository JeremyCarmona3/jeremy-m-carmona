import Head from 'next/head';
import Image from 'next/image';

import Avatar from '../public/avatar.png';

import Navbar from '../components/global/navbar';
import Footer from '../components/global/footer';

export default function Home() {
  return (
    <div className='main-cont'>
      <div className='center'>
        <Navbar />
        <div className='row'>
          <div className='col'>
            <div className='row grid-two'>
              <div className='col'>
                <h2>Jeremy Carmona</h2>
                <p className='intro-text'>
                  I am a recent graduate of the Digital Design and Development
                  program at the British Columbia Institute of Technology.
                  During my 2 years at BCIT, I learned many things ranging from
                  designing to developing. Although I like designing, developing
                  web and mobile cross-platform applications was something I was
                  more passionate about. I aspire to be a full-stack developer
                  later on in my career.
                </p>
                <div className='row grid-two'>
                  <div className='col'>
                    <h2>Experience</h2>
                    <div>
                      <p>Goopter Holdings Ltd.</p>
                      <p>Front-end Developer Intern</p>
                      <p>April 2022-May 2022</p>
                    </div>
                  </div>
                  <div className='col'>
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
              </div>
              <div>
                <div className='polaroid'>
                  <div className='image'>
                    <Image src={Avatar} alt='Avatar of Jeremy' />
                  </div>
                  <h2>Front-end Developer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row grid-four'>
          <div className='col'>
            <h2>Programming Languages</h2>
            <div>
              <p>JavaScript (ES6+)</p>
              <p>HTML</p>
              <p>SASS/CSS</p>
              <p>TypeScript</p>
            </div>
          </div>
          <div className='col'>
            <h2>Libraries & Frameworks</h2>
            <div>
              <p>JavaScript (ES6+)</p>
              <p>HTML</p>
              <p>SASS/CSS</p>
              <p>TypeScript</p>
            </div>
          </div>
          <div className='col'>
            <h2>Tools & Platforms</h2>
            <div>
              <p>JavaScript (ES6+)</p>
              <p>HTML</p>
              <p>SASS/CSS</p>
              <p>TypeScript</p>
            </div>
          </div>
          <div className='col'>
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
        <Footer />
      </div>
    </div>
  );
}
