import React, { useState } from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import SearchBar from './SearchBar';
import './NotesApp.css';

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (noteText, selectedColor) => {
    const newNote = {
      id: Date.now(),
      text: noteText,
      color: selectedColor
    };
    setNotes([newNote, ...notes]);
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="notes-app">
      <h1>NotesApp</h1>
      <SearchBar onSearch={setSearchTerm} />
      <NoteInput onAddNote={addNote} />
      <NoteList notes={filteredNotes} />
    </div>
  );
}

export default NotesApp;