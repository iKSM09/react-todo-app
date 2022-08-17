import { useState } from "react";
import { MdAddCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: "sdfb", task: "slfdsidf" },
    { id: "dbjh", task: "sfkjsdilf" },
    { id: "ksda", task: "lsjdfiosdhf" },
    { id: "djkf", task: "wpoejfwe" },
  ]);

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
          onKeyPress={(e) =>
            e.key === "Enter" &&
            setTodos([
              ...todos,
              { id: new Date().getTime().toString(), task: e.target.value },
            ])
          }
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
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            marginBlock: "4px",
          }}
        >
          <MdRadioButtonUnchecked style={{ fontSize: "18px", margin: "6px" }} />
          <p
            style={{
              fontSize: "16px",
              margin: 0,
            }}
          >
            {todo.task}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
