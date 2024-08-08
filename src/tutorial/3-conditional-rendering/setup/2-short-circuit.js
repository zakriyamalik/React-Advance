import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError,setIsError]=useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = !text && 'hello world';

  return (
    <>
    {/* <h1>{firstValue}</h1>
    <h1>SECOND : {secondValue}</h1> */}
    <h1>{text || 'john doe'}</h1>
    {text && <h1>Hello World</h1>}
    <button className='btn' onClick={()=> setIsError(!isError)}>toggle error </button>
    {!text && <h1>Hello World</h1>}
    {isError && <h1>Error...</h1>}
    {isError?<h2>
      There is an error.
      </h2> : <div>
      <h2>
      There is no error.
      </h2>
      </div>}
    </>
  )
};

export default ShortCircuit;
//UseEffect advanced and  Conditional rendering 
