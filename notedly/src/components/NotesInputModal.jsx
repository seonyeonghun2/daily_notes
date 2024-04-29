import React, { useState } from "react";

const NotesInputModal = () => {
  const [note, setNote] = useState("");
  const handleInputChange = (e) => {
    setNote(e.target.value);
  };
  return (
    <div className='NoteInputModal'>
      <form autoComplete='off' className='NoteInput-form'>
        <fieldset>
          <h3 className='hidden'>Note</h3>
          <input
            type='text'
            className='w-full border-2 indent-2'
            placeholder='what do you need to do?'
            onChange={handleInputChange}
          />
          <button className='px-2 text-white bg-yellow-500 rounded'>
            Meeting
          </button>
          <button className='px-2 text-white bg-indigo-500 rounded'>
            Review
          </button>
          <button className='px-2 text-white rounded bg-sky-500'>
            Marketing
          </button>
          <button className='px-2 text-white rounded bg-violet-500'>
            Project
          </button>
          <button className='w-16 px-2 text-white rounded bg-slate-500'>
            +
          </button>
        </fieldset>
        <fieldset>
          <h3 className='capitalize'>priority</h3>
          <label>High!</label>
          <input type='radio' name='priority' value='high' />
          <label>Medium</label>
          <input type='radio' name='priority' value='medium' defaultChecked />
          <label>Low</label>
          <input type='radio' name='priority' value='low' />
          <label>None</label>
          <input type='radio' name='priority' value='none' />
        </fieldset>
        <fieldset>
          <h3 className='capitalize'>invite</h3>
        </fieldset>
      </form>
    </div>
  );
};

export default NotesInputModal;
