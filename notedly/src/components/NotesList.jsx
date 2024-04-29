import React, { useEffect } from "react";

import NotesListItem from "./NotesListItem.jsx";
const NotesList = ({ notes, error }) => {
  useEffect(() => {
    if (error) {
      console.error("Error fetching todos:", error);
    }
  }, [error]);
  return (
    <>
      {error ? (
        <p>GraphQL Error: {error.message}</p>
      ) : (
        notes.map((note) => {
          return <NotesListItem key={note.id} note={note} />;
        })
      )}
    </>
  );
};

export default NotesList;
