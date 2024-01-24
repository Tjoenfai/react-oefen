import sectionImage from '../img/rakket.png';
import React from 'react';

function Section({ title, text, reverse }) {
  return (
    <div className={`section ${reverse ? 'reverse' : ''}`}>
      <div className="section-content">
        <div className="image-container">
          {sectionImage && <img src={sectionImage} alt="Section Image" />}
        </div>
        <div className="text-container">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Section;
