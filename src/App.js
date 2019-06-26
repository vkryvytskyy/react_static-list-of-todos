import React from 'react';
import './App.css';
import TodoList from './Components/TodoList'

function App() {
  return (
    <table className="App">
      <thead>
        <tr className="tableHead">
          <th>id</th>
          <th>title</th>
          <th>completed</th>
          <th>username</th>
        </tr>
      </thead>
      <TodoList />
    </table>
  );
}

export default App;
