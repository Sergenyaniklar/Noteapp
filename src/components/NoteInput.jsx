import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import './NoteInput.css';

function NoteInput({ onAddNote }) {
  const [noteText, setNoteText] = useState('');
  const [selectedColor, setSelectedColor] = useState('#8BC34A');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      onAddNote(noteText, selectedColor);
      setNoteText('');
    }
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Enter your note here..."
      />
      <div className="note-input-footer">
        <ColorPicker 
          selectedColor={selectedColor} 
          onColorChange={setSelectedColor} 
        />
        <button type="submit" className="add-button">ADD</button>
      </div>
    </form>
  );
}

export default NoteInput;
