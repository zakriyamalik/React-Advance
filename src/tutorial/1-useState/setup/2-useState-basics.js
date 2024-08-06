import React, { useState } from 'react';

const UseStateBasics = () => {
  // Initialize a state variable
  const [text,setText]= useState('random title');

  // Handler function to update the state variable
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };


  // Render the component
  return (
    <div>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>Toggle Text</button>
    </div>
  );
 
};

export default UseStateBasics;
