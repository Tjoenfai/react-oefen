import React from 'react';


function WhyQuantumSky() {
  return (
    <div className="why-quantum-sky">
      <h2>Why QuantumSky</h2>
      <div className="columns-container">
        <div className="column">
          {Box("Box 1", "Lorem ipsum dolor sit amet.")}
          {Box("Box 2", "Lorem ipsum dolor sit amet.")}

        </div>
        <div className="column">
          {Box("Box 3", "Lorem ipsum dolor sit amet.")}
          {Box("Box 4", "Lorem ipsum dolor sit amet.")}

        </div>
        <div className="column">
          {Box("Box 5", "Lorem ipsum dolor sit amet.")}
          {Box("Box 6", "Lorem ipsum dolor sit amet.")}

        </div>
      </div>
    </div>
  );
}

function Box(title, text) {
  return (
    <div className="box">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default WhyQuantumSky;
