import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [newNote, setNewNote] = useState('');
  const handleAddNote = () => {
    addNote(newNote);
    setNewNote('Please Add Note');
  }

  return (
    <div>
      <input 
        type="text" 
        value={newNote} 
        onChange={(e) => setNewNote(e.target.value)} 
        placeholder="Enter a new note" 
      />
      <button onClick={handleAddNote}>Add Note</button>
     <br/>
    </div>
  );
}

export default AddNote;