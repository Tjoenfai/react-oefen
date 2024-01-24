import React from 'react';
import '../App.scss';

function Image({ children }) {
  return (
    <div className="image-container">
      <img src="//via.placeholder.com/2560x600" alt="Grey Image" />
      <div className="overlay-text">{children}</div>
    </div>
  );
}

export default Image;