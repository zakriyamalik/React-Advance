import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []); // empty array means it only runs once on component mount
  return <>
   <h3>GitHub Users</h3>
   <ul className="users">
      {users.map(user => (
        <li key={user.id}>
          <img src={user.avatar_url} alt={user.login}/>
          <div>
            <h4>{user.login}</h4>
            <a href={user.html_url}>Profile</a>
          </div>

         </li>
      ))}
    </ul> </>
  // return <h2>fetch data</h2>;

};

export default UseEffectFetchData;
