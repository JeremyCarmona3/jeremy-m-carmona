import Head from 'next/head';

import Navbar from '../components/global/navbar';
import Footer from '../components/global/footer';

export default function TermsOfUses() {
  return (
    <div className='main-cont'>
      <Head>
        <title>Terms of Uses</title>
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
        <link rel='icon' href='/JC.svg' />
        <link rel='shortcut icon' href='/JC.svg' />
      </Head>
      <Navbar />
      <div className='content'>
        <h1>Terms of Uses</h1>
        <p>
          Jeremy Carmona welcomes you to his Web site. Using this Web site
          indicates your consent and agreement to be bound by this User
          Agreement and any policies or practices contained herein.
        </p>
        <p>
          All content and information (including, but not limited to, code,
          graphics, photos, guides, promotional materials, press releases,
          articles, plans, schedules, illustrations, audio clips, and video
          clips) displayed on this Web site is owned or licensed by Jeremy
          Carmona and its respective owners, all content on this site is
          protected by copyright and other intellectual property laws. Any
          names, titles, logos and designs displayed on the Web site that
          contain Jeremy Carmona, titles, logos, or brands are the exclusive
          property and trademarks of Jeremy Carmona or its members. You may not
          modify, publish, transmit, transfer, sell, reproduce, re-post or alter
          any such content. Jeremy Carmona hereby grants you a personal,
          non-exclusive, non-assignable and non-transferable license to use and
          display, for home, non-commercial and personal use only, one copy of
          any content that you may download from this Web site. Any other use or
          reproduction of this Web site, in whole or in part, will be considered
          to be a violation of Jeremy Carmona
          {"'"}s intellectual property rights.
        </p>
        <p>
          Your use of this Web site constitutes your agreement to abide by these
          terms of use included in this online User Agreement. Jeremy Carmona
          reserves the right to modify, alter or otherwise update this User
          Agreement at any time.
        </p>
        <p>
          If you disagree with any of the above terms of use or any part of the
          User Agreement, do not use this Web site.
        </p>
        <p>Jeremy Carmona + Digital Design and Development BCIT </p>
      </div>
      <Footer />
    </div>
  );
}
