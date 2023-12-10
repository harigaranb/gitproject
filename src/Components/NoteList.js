import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote, editNote, searchQuery }) => {
  const filteredNotes = notes.filter(note =>
    note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul>
      {filteredNotes.map((note, index) => (
        <Note
          key={index}
          index={index}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </ul>
  );
}

export default NoteList;