import React from "react";
import "./FinderButton.css";
const FinderButton = ({ text, itemCount, color }) => {
  return (
    <>
      <div className='relative inline-flex justify-center w-1/4 h-10 my-2 text-center bg-gray-600 rounded-full itemm-center'>
        {itemCount ? (
          <div className='absolute flex justify-center w-6 h-6 text-sm text-white bg-red-500 rounded-full right-2 bottom-2 itemCount item-center'>
            {itemCount}
          </div>
        ) : null}
        <button className='text-white capitalize'>{text}</button>
      </div>
    </>
  );
};

export default FinderButton;
