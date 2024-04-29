import { useState, useRef, useEffect } from "react";
import "./App.css";
import NotesHeader from "./components/NotesHeader";
import NotesFinder from "./components/NotesFinder";
import NotesInput from "./components/NotesInput";
import NotesList from "./components/NotesList";
import NotesFooter from "./components/NotesFooter";

import { ApolloConsumer } from "@apollo/client";

function App({ client }) {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [newNoteIsOpen, setNewNoteIsOpen] = useState(false);

  useEffect(() => {
    const fetchNotes = async (client) => {
      try {
        const GET_NOTES = `#graphql
          query GetNotes {
            notes {
              id
              title
              content
              isDone
            }
          }
        `;

        const { data, errors } = await client.query({ query: GET_NOTES });
        if (errors) {
          setError(errors);
        } else {
          setNotes(data.notes);
        }
      } catch (error) {
        console.error("Error Fetching Notes:", error);
        setError(error);
      }
    };

    // 컴포넌트가 마운트될 때 데이터를 가져옴
    if (client) {
      fetchNotes();
    }
  }, [client, notes]); // 빈 의존성 배열

  if (error) {
    return (
      <div className='App'>
        <p>GraphQL Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className='App'>
      <NotesHeader />
      <NotesFinder noteOpener={setNewNoteIsOpen} />
      {newNoteIsOpen && <NotesInput />}
      <ApolloConsumer>
        {(client) => {
          // TodoList 컴포넌트에 todos를 props로 전달
          return <NotesList notes={notes} error={error} />;
        }}
      </ApolloConsumer>
      <NotesFooter count={notes.length} />
    </div>
  );
}

export default App;
