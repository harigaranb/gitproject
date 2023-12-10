import React, { useState } from 'react';

const Note = ({ index, note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState(note);
  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    editNote(index, updatedNote);
    setIsEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedNote}
            onChange={(e) => setUpdatedNote(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {note}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteNote(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Note;