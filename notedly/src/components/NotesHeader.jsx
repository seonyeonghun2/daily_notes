import React from "react";

const NotesHeader = () => {
  return (
    <div className='NotesHeader'>
      <div className='flex justify-between header_top'>
        <h1 className='text-3xl'>Today</h1>
        <button>📅</button>
      </div>
      <p className="my-3">26 April 2024, Friday</p>
    </div>
  );
};

export default NotesHeader;
