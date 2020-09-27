import React, { useEffect, useState } from 'react';
import Todo from './Todo'
import './App.css';
import db from './firebase';

let name = "Mustafa";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("I ran when the component loaded");
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().title))
    })

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  // console.log(todos);
  return (
    <div className="app">
      <h1>To-do app made by {name}</h1>
      <form>
        <input type="text" value={input}
          onChange={e => setInput(e.target.value)} />
        <button disabled={!input} type="submit" onClick={handleSubmit}>Add Todo</button>
      </form>

      {todos.map((todo, i) => (
        <Todo title={todo} key={i} />
      ))}
    </div>
  );
}

export default App;
