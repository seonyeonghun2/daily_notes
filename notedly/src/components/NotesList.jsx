import React from "react";
import NotesListItem from "./NotesListItem";

const NotesList = ({ notes, error }) => {
  if (error) {
    return <p>Error : {error.message}</p>;
  }
  return (
    <>
      <div className='Notes'>
        {notes.map((note, i) => {
          return <NotesListItem key={i} note={note} />;
        })}
      </div>
    </>
  );
};

export default NotesList;
