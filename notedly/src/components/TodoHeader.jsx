import React from "react";

const TodoHeader = () => {
  return (
    <div className='TodoHeader'>
      <div className='header_top flex justify-between'>
        <h1 className='text-3xl'>Today</h1>
        <button>📅</button>
      </div>
      <p>26 April 2024, Friday</p>
    </div>
  );
};

export default TodoHeader;
