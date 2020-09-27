import React from 'react';
import './Todo.css'

const Todo = (props) => {
  // console.log("props: "+JSON.stringify(props));
  return (<div className="todo">
    <h2>{props.title}</h2>
    {/* <p>{props.description}</p> */}
  </div>);
}

export default Todo;