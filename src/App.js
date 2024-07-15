import { getByDisplayValue } from "@testing-library/react";
import "./App.css";
import { useState } from "react";

function App() {
  //if we need any update in value then should use state  (like useState)
  const [name, setName] = useState("Tej");

  const handleOnChange = (e) => {
    // const str = e.target.value;
    // console.log(str);

    // target is object so that we can destructure and use like below
    const { value } = e.target;

    //update destructured name property of useState
    setName(value);
    // console.log(value);
  };
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <div
        className="userList"
        style={{ boxShadow: "0 0 10px grey", padding: "2rem" }}
      >
        <div className="display">{name}</div>
        <div className="form">
          <form action="">
            <input
              type="text"
              required
              placeholder="enter name"
              onChange={handleOnChange}
            />
            <button>Add User</button>
          </form>
        </div>
        <hr />
        <div className="list">
          <ul>
            <li>Tej</li>
            <li>Suni</li>
            <li>Satya</li>
            <li>Zarina</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
