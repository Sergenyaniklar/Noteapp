import React from 'react';
import './NoteList.css';

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note"
          style={{ backgroundColor: note.color }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
}

export default NoteList;