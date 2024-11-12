import React from 'react';
import './ColorPicker.css';

function ColorPicker({ selectedColor, onColorChange }) {
  const colors = [
    '#E91E63', // pink
    '#9C27B0', // purple
    '#FFC107', // yellow
    '#03A9F4', // blue
    '#8BC34A', // green
  ];

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-option ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
}

export default ColorPicker;