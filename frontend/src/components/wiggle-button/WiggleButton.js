import React from 'react';
import style from './WiggleButton.module.css'
function WiggleButton({ width, height, color, onClick, children }) {
  return (
    <button onClick={onClick} className={color === 'red' ? style.redButton : style.blueButton} style={{ width: width, height: height }}>{children}</button>
  );
}

export default WiggleButton