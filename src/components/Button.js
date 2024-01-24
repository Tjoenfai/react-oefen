import React from 'react';

function Button({ variant = 'primary', text = 'button' }) {
  return (
    <div className="button-container">
      <button type="button" className={`btn btn-${variant}`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
