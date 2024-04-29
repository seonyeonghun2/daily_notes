import React from "react";

const NotesListItem = ({ note }) => {
  if (note) {
    return <p>No note Item Available</p>;
  }
  return (
    <>
      <div>{note.id}</div>
      <div>{note.title}</div>
      <div>{note.content}</div>
      <div>{note.due_date}</div>
      <div>{note.invitee_id}</div>
      <div>{note.isDone ? "Done" : "Undone"}</div>
    </>
  );
};

export default NotesListItem;
