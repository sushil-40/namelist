import React, { useState } from "react";
import { Display } from "./Display";

export const Form = ({ addUser }) => {
  const [user, setUser] = useState("");
  const handleOnChange = (e) => {
    // console.log(e);
    const { value } = e.target;

    setUser(value);
    // console.log(value);

    // console.log(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };
  return (
    <div>
      <Display user={user} />
      <div className="form-container card">
        <form action="" onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <span className="title">
            Input Form <hr />
          </span>
          <div className="input-field-container d-flex">
            <input type="text" className="input-field rounded" />
            <button className="btn btn-primary rounded">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};
