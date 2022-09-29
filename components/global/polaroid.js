import React from 'react';

import Image from 'next/image';

export default function Polaroid({ image = '', alt = '', caption = '' }) {
  return (
    <div className='polaroid'>
      <div className='image-cont'>
        <div className='image'>
          <Image src={image} alt={alt} />
        </div>
      </div>
      <h2>{caption}</h2>
    </div>
  );
}
