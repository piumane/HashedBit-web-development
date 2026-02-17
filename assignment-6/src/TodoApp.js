import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (!trimmed) return;

    const updated = [...todos, trimmed].sort((a, b) =>
      a.localeCompare(b)
    );

    setTodos(updated);
    setTask(""); // clear input after adding
  };

  const deleteTask = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

return (
  <div className="wrapper">
    <div className="todo">
      <h2>Todo List</h2>

      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default TodoApp;
