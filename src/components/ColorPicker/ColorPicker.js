import React, { useState, useEffect } from 'react';

function ColorPicker(spy = () => {}) {
  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    localStorage.setItem('current color', bgColor);
  }, [bgColor]);

  const backgroundColor = { backgroundColor: bgColor };

  return (
    <div style={backgroundColor} data-testid="component-container">
      <h1>color picker</h1>
      <button data-testid="btn-darkgrey" onClick={() => setBgColor('darkgrey')}>
        grey
      </button>
      <button data-testid="btn-lime" onClick={() => setBgColor('lime')}>
        lime
      </button>
      <button data-testid="btn-reset" onClick={() => setBgColor('white')}>
        reset
      </button>
    </div>
  );
}

export default ColorPicker;
