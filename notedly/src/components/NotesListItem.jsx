import React from "react";

const NotesListItem = ({ note }) => {
  console.log(note);
  return (
    <>
      {note.map((v, i) => (
        <ul key={i} className='flex w-full'>
          <li>{v.id}</li>
          <li>{v.title}</li>
          <li>{v.content}</li>
          <li>{v.due_date}</li>
          <li>{v.invitee_id}</li>
          <li>{v.isDone ? "Done" : "Undone"}</li>
          <li>{v.author_id}</li>
        </ul>
      ))}
    </>
  );
};

export default NotesListItem;
