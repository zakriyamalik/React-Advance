import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer=(state,action)=>{
  if(action.type==="TESTING")
  {
    const newItems = [...state.people,action.payload]
    return {...state,
      people:newItems,
      modalContent: 'item added'
     ,isModalOpen:true
  
    }
  }
  if(action.type==="NO_VALUE")
    {
      return {...state, modalContent: 'please enter value',isModalOpen:true}
    }
    if(action.type==="CLOSE_MODAL")
      return {...state, isModalOpen:false}
    if(action.type==='REMOVE_ITEM')
    {
      const newItems = state.people.filter(item=>item.id!==action.payload)
      return {...state,people:newItems}
    }

}
const defaultState={
  people: [],
  isModalOpen: false,
  modalContent: '',
}
const Index = () => {
  
  const [name,setName]=useState('');
  const [state,dispatch]= useReducer(reducer,defaultState);
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({type:'TESTING',payload:newItem})
    
    }  else {
      console.log('empty values');
      dispatch({type:'NO_VALUE',payload:'No value'})
      setName('');
      // setModalContent('No value')
      // setIsModalOpen(true)
     
    }
   
  };
  const closeModal=()=>{
    dispatch({type:'CLOSE_MODAL',payload:''})
  }

  return(
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className='form'>
      <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
      />
      </div>
      <button type='submit' >Add</button>
    </form>
    {
      state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={()=>
              dispatch({type:'REMOVE_ITEM',payload:person.id})
            }>
remove
            </button>
          </div>
        );
      })
    }
    </>


  );
};

export default Index;
