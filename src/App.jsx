import { useState } from "react";
import {
  MdAddCircleOutline,
  MdTaskAlt,
  MdRadioButtonUnchecked,
  MdDelete,
} from "react-icons/md";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTask = (e) => {
    if (e.key === "Enter") {
      const newTask = {
        id: new Date().getTime().toString(),
        task: e.target.value,
      };
      setTodos([...todos, newTask]);
      e.target.value = "";
    }
  };

  const completeTask = (id) => {
    let completedTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(completedTask);
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>My Tasks</h1>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MdAddCircleOutline style={{ fontSize: "22px", margin: "4px" }} />
        <input
          type="text"
          placeholder="Add a Task"
          onKeyPress={addNewTask}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            borderBottom: "1px solid gray",
            fontSize: "16px",
          }}
        />
      </section>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="task"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBlock: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBlock: "4px",
            }}
          >
            <span
              onClick={() => completeTask(todo.id)}
              style={{ lineHeight: "0px" }}
            >
              {todo.completed ? (
                <MdTaskAlt style={{ fontSize: "18px", margin: "6px" }} />
              ) : (
                <MdRadioButtonUnchecked
                  style={{ fontSize: "18px", margin: "6px" }}
                />
              )}
            </span>
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                textDecoration: todo.completed ? "line-through" : null,
              }}
            >
              {todo.task}
            </p>
          </div>
          <MdDelete
            onClick={() => deleteTask(todo.id)}
            style={{ fontSize: "18px", margin: "6px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
