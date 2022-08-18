import { useState, useEffect } from "react";
import {
  MdAddCircleOutline,
  MdSubdirectoryArrowRight,
  MdTaskAlt,
  MdRadioButtonUnchecked,
  MdDelete,
} from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todos"));

    setTodos(todoList);
  }, []);

  const today = () => {
    const date = new Date();

    let day = date.getData();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}/${month}/${day}`;

    return currentDate;
  };

  const addNewTask = (e) => {
    if (e.key === "Enter") {
      const newTask = {
        id: new Date().getTime().toString(),
        task: e.target.value,
        completed: false,
        editable: false,
      };
      setTodos([...todos, newTask]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTask]));
      e.target.value = "";
    }
  };

  const makeTaskEditable = (id) => {
    let editableTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editable: true };
      }
      return todo;
    });
    setTodos(editableTask);
  };

  const editTask = (e, id) => {
    let task = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: e.target.value };
      }
      return todo;
    });
    setTodos(task);
  };

  const updateTask = (e, id) => {
    if (e.key === "Enter") {
      let updatedTask = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, editable: false };
        }
        return todo;
      });
      setTodos(updatedTask);
      localStorage.todos = JSON.stringify(updatedTask);
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
    localStorage.todos = JSON.stringify(completedTask);
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.todos = JSON.stringify(updatedTodos);
  };

  return (
    <div className="App">
      <h1>My Tasks</h1>
      <h6>{today}</h6>

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
            {todo.editable ? (
              <input
                value={todo.task}
                onChange={(e) => editTask(e, todo.id)}
                onKeyPress={(e) => updateTask(e, todo.id)}
                type="text"
                className={`editable${todo.id}`}
                style={{
                  width: "120px",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  borderBottom: "1px solid gray",
                  fontSize: "16px",
                }}
              />
            ) : (
              <p
                onClick={() => makeTaskEditable(todo.id)}
                style={{
                  margin: "0",
                  fontSize: "16px",
                  textDecoration: todo.completed ? "line-through" : null,
                }}
              >
                {todo.task}
              </p>
            )}
          </div>
          <span>
            <MdSubdirectoryArrowRight
              onClick={() => console.log("sjdh")}
              style={{ fontSize: "18px", margin: "6px" }}
            />
            <MdDelete
              onClick={() => deleteTask(todo.id)}
              style={{ fontSize: "18px", margin: "6px" }}
            />
          </span>
        </div>
      ))}
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

      <div
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
          <span style={{ lineHeight: "0px" }}>
            <MdRadioButtonUnchecked
              style={{ fontSize: "18px", margin: "6px" }}
            />
          </span>
          <p
            style={{
              margin: 0,
              fontSize: "16px",
            }}
          >
            sdfjksdvjs
          </p>
        </div>
        <span>
          <MdSubdirectoryArrowRight
            style={{ fontSize: "18px", margin: "6px" }}
          />
          <MdDelete style={{ fontSize: "18px", margin: "6px" }} />
        </span>
      </div>
      <div
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
          <span style={{ lineHeight: "0px" }}>
            <MdSubdirectoryArrowRight
              style={{ fontSize: "18px", margin: "6px" }}
            />
            <MdRadioButtonUnchecked
              style={{ fontSize: "18px", margin: "6px", marginLeft: "0" }}
            />
          </span>
          <p
            style={{
              margin: 0,
              fontSize: "16px",
            }}
          >
            sdfjksdvjs
          </p>
        </div>
        <span>
          <MdDelete style={{ fontSize: "18px", margin: "6px" }} />
        </span>
      </div>
    </div>
  );
}

export default App;
