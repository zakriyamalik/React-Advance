import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'John Doe',
    age: 30,
    message: 'Hello',
  });
const changeMessage=()=>{
  if( person.message=== 'Hello')
  {
    setPerson({...person, message: 'Goodbye'})
  }
  else
  {
    setPerson({...person, message: 'Hello'})  // Use spread operator to create a new object with updated message property.
  }
  
}
  return(
    <>
    <h2>Person's Name: {person.name}</h2>
    <h2>Person's Age: {person.age}</h2>
    <h2>Person's Message: {person.message}</h2>
    <button className='btn' onClick={changeMessage}>Change Message</button>

    </>
  ) 
};

export default UseStateObject;
