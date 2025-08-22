import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a Todo App", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo) return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li
            key={i}
            onClick={() => toggleTodo(i)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text} <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
