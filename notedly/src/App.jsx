import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import NotesHeader from "./components/NotesHeader";
import NotesFinder from "./components/NotesFinder";
import NotesInput from "./components/NotesInput";
import NotesList from "./components/NotesList";
import NotesFooter from "./components/NotesFooter";

const GET_NOTES = gql`
  query GetNotes {
    notes {
      id
      title
      content
      invitee_id
      due_date
      isDone
      author_id
    }
  }
`;

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newNoteIsOpen, setNewNoteIsOpen] = useState(false);

  const { loading, data, error: queryError } = useQuery(GET_NOTES);

  useEffect(() => {
    if (queryError) {
      setError(queryError.message);
    } else if (loading) {
      setIsLoading(true);
    } else if (data) {
      setNotes([data.notes]);
    }
  }, [data, queryError]);

  return (
    <div className='App'>
      <NotesHeader />
      <NotesFinder noteOpener={setNewNoteIsOpen} />
      {newNoteIsOpen && <NotesInput />}
      {isLoading && <NotesList notes={notes} error={error} />}
      <NotesFooter count={notes.length} />
    </div>
  );
}

export default App;
