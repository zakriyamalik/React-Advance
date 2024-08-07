import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id!== id);
    setPeople(newPeople);
  };
    return (
    <>
     { people.map((person)=>{
     return(
      <div key={person.id} className='item'>
          <h4>{person.name}</h4>
          <button className='btn' onClick={() => removeItem(person.id)}>Remove</button>
        </div>
     )
   })
} 
<button className='btn' onClick={() => setPeople([])}>Remove all</button>
    </>
  );
};

export default UseStateArray;
