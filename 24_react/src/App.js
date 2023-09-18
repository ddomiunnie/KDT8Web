import React from 'react';
import './App.css';

function App() {
  //jsx 요소에 반드시 부모 요소가 필요!

  let users = [
    { id: 1, name: 'John', age: 25, vip: true },
    { id: 2, name: 'Jane', age: 19, vip: false },
    { id: 3, name: 'Alice', age: 30, vip: true },
    { id: 4, name: 'Bob', age: 18, vip: false },
    { id: 5, name: 'Charlie', age: 35, vip: true },
  ];

  let newUsers = users.filter((user) => user.vip);
  console.log(newUsers);

  return (
    <ul>
      {newUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
