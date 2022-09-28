import Avatar from '../public/avatar.png';

import Navbar from '../components/global/navbar';
import Footer from '../components/global/footer';
import Polaroid from '../components/global/polaroid';

export default function About() {
  return (
    <div className='main-cont'>
      <div className='content'>
        <Navbar />
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
