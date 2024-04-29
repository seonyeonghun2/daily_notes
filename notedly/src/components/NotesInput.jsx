import React, { useState } from "react";
import NoteInputModal from "./NotesInputModal.jsx";
const NotesInput = () => {
  const [newNoteInputIsOpen] = useState(false);
  return (
    <div className='NoteInput'>{newNoteInputIsOpen && <NoteInputModal />}</div>
  );
};

export default NotesInput;
