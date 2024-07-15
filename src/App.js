import { getByDisplayValue } from "@testing-library/react";
import "./App.css";

function App() {
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
        <div className="display">As you are Typing</div>
        <div className="form">
          <form action="">
            <input type="text" />
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
