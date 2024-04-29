import React from "react";

const NotesFooter = ({ count }) => {
  return (
    <>
      <hr />
      <p className='mt-2 text-center'>Total Note Count : {count}</p>
    </>
  );
};

export default NotesFooter;
