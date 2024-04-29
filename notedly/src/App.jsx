import React, { useState, useEffect } from "react";
import NotesHeader from "./components/NotesHeader";
import NotesFinder from "./components/NotesFinder";
import NotesInput from "./components/NotesInput";
import NotesList from "./components/NotesList";
import NotesFooter from "./components/NotesFooter";
import { useQuery, gql } from "@apollo/client";

function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [newNoteIsOpen, setNewNoteIsOpen] = useState(false);
  const GET_NOTELISTS = gql`
    query GetNoteLists {
      notes {
        id
        title
        content
        invitee_id
        due_date
        author_id
      }
    }
  `;
  function DisplayNoteLists() {
    const { loading, error, data } = useQuery(GET_NOTELISTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.notes.map(({ id, title, content, due_date }) => (
      <div key={id}>
        <p>{title}</p>
        <p>{content}</p>
        <p>{due_date}</p>
      </div>
    ));
  }

  return (
    <div className='App'>
      <NotesHeader />
      <NotesFinder noteOpener={setNewNoteIsOpen} />
      {newNoteIsOpen && <NotesInput />}
      <DisplayNoteLists />
      <NotesFooter count={notes.length} />
    </div>
  );
}

export default App;
