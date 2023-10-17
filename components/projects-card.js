import React from 'react';
import PropTypes from 'prop-types';

// import './projects-card.scss';
// import './text.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';

import OnMePic from '/public/OnMe_iPhone13Pro.png';
import MojiMealsPic from '/public/MojiMeals_MacBook.png';
import WestPointHotelPic from '/public/WestPointHotel_MacBook.png';

export default function ProjectsCard({
  projectName,
  summary,
  projectLink,
  projectType,
  projectScope,
  role,
  toolsUsed,
  projectImage,
}) {
  const router = useRouter();
  return (
    <div className='projects-card-cont'>
      <div className='projects-card-summary'>
        <h2>{projectName}</h2>
        <p>{summary}</p>
        <p className='read-more-link' onClick={() => router.push(projectLink)}>
          <b>
            Read more {'>'}
            {'>'}
            {'>'}
          </b>
        </p>
      </div>
      <div className='projects-card-info'>
        <h2>Info</h2>
        <ul>
          <li>
            <b>Project type:</b> {projectType}
          </li>
          <li>
            <b>Project scope:</b> {projectScope}
          </li>
          <li>
            <b>My role:</b> {role}
          </li>
          <li>
            <b>Tools:</b> {toolsUsed}
          </li>
        </ul>
      </div>
      <div className='projects-card-image-cont'>
        <Image layout='intrinsic' src={projectImage} alt='Project Image' />
      </div>
    </div>
  );
}

ProjectsCard.propTypes = {
  projectName: PropTypes.string,
  summary: PropTypes.string,
  projectLink: PropTypes.string,
  projectType: PropTypes.string,
  projectScope: PropTypes.string,
  role: PropTypes.string,
  toolsUsed: PropTypes.string,
  projectImage: PropTypes.string,
};

ProjectsCard.defaultProps = {
  projectName: 'Project Name',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem mauris, interdum eget sagittis nec, molestie facilisis est. Vestibulum gravida volutpat nibh at laoreet. Mauris arcu nibh, ullamcorper et leo quis, commodo dapibus sem. Praesent ut convallis urna. Suspendisse vitae neque eu diam maximus faucibus.',
  projectLink: '/projects',
  projectType: 'Project Type',
  projectScope: 'Project Scope',
  role: 'My role',
  toolsUsed: 'Tools used in project',
  projectImage: WestPointHotelPic,
};
