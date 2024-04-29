import React from "react";
import FinderButton from "./FinderButton.jsx";
const NotesFinder = ({ noteOpener }) => {
  const changeNoteOpener = ((current) => {
    console.log(current);
    return !current;
  });
  return (
    <div className='NotesFinder'>
      <div className='flex h-10 overflow-hidden bg-blue-600 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl'>
        <input
          className='w-full text-center text-white bg-transparent outline-none placeholder:text-white'
          type='search'
          placeholder='search ...'
        />

        <button
          className='fixed bottom-0 left-0 w-full py-2 font-bold text-white bg-blue-500 rounded pospx-4 hover:bg-blue-700'
          onClick={changeNoteOpener}
        >
          + Add New Note
        </button>
      </div>
      <div className='flex gap-2 btns'>
        <FinderButton text='undone' itemCount='2' color='black' />
        <FinderButton text='review' itemCount='2' color='black' />
        <FinderButton text='marketing' itemCount='2' color='black' />
        <FinderButton text='project' itemCount='2' color='black' />
      </div>
      <FinderButton text='+' />
    </div>
  );
};

export default NotesFinder;
