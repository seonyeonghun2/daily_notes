import React, { useState } from "react";

const TodoInputModal = () => {
  const [todo, setTodo] = useState("");
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className='TodoInputModal'>
      <form autoComplete='off' className='TodoInput-form'>
        <fieldset>
          <h3 className='hidden'>todo</h3>
          <input
            type='text'
            className='border-2 w-full indent-2'
            placeholder='what do you need to do?'
            onChange={handleInputChange}
          />
          <button className='bg-yellow-500 rounded px-2 text-white'>
            Meeting
          </button>
          <button className='bg-indigo-500 rounded px-2 text-white'>
            Review
          </button>
          <button className='bg-sky-500 rounded px-2 text-white'>
            Marketing
          </button>
          <button className='bg-violet-500 rounded px-2 text-white'>
            Project
          </button>
          <button className='w-16 bg-slate-500 rounded px-2 text-white'>
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

export default TodoInputModal;
