import React, { useState } from 'react';

import './App.css';

import NoteList from './Components/NoteList';
import AddNote from './Components/AddNote';
import Search from './Components/Search';

 

function App() {

  const [notes, setNotes] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  const addNote = (newNote) => {
    if (newNote.trim() !== '') {
      setNotes([newNote, ...notes]);
      setAlertMessage('Note added successfully!');
    } else {
      setAlertMessage('Note cannot be empty!');
    }
  }

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    setAlertMessage('Note deleted successfully!');
  }

  const editNote = (index, updatedNote) => {
    if (updatedNote.trim() !== '') {
      const updatedNotes = [...notes];
      updatedNotes[index] = updatedNote;
      setNotes(updatedNotes);
      setEditedIndex(null);
      setAlertMessage('Note edited successfully!');
    } else {
      setAlertMessage('Note cannot be empty!');
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  const clearAlert = () => {
    setAlertMessage(null);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Note Taking App</h1>
        <h2>Track Your Day Efficiently</h2>
        {alertMessage && (
          <div className="alert">
            {alertMessage}
            <button onClick={clearAlert}>Close</button>
          </div>
        )}
        <AddNote addNote={addNote} />
        <br/>
        <Search handleSearch={handleSearch} />
        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          editNote={(index, updatedNote) => editNote(index, updatedNote)}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}

export default App;