import React, { useState } from "react";

function TodoApp() {

  const [todos, setTodos] = useState([
    "Suganya's TODOs",
    "Buy Groceries",
    "Complete Assignment"
  ]);

  const handleSubmit = (newItem) => {
    setTodos([...todos, newItem]);
  };


  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);   
    setTodos(updatedTodos);          
  };

  return (
    <div>
      <h2>TODO List</h2>
      <SubmitForm onSubmit={handleSubmit} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}


function SubmitForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((item, index) => (
        <Todo
          key={index}
          item={item}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

function Todo({ item, index, onDelete }) {
  return (
    <li>
      {item}
      <button onClick={() => onDelete(index)}> X </button>
    </li>
  );
}

export default TodoApp;
