import React, { useState } from "react";
import { Display } from "./Display";

export const Form = ({ addUser }) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    // const str = e.target.value;
    // console.log(str);

    // target is object so that we can destructure and use like below
    const { value } = e.target;

    //update destructured name property of useState
    setName(value);
    // console.log(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    addUser(name);
    // setList([...list, name]);
  };
  return (
    <div className="form">
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input
          type="text"
          required
          placeholder="enter name"
          onChange={handleOnChange}
        />
        <button>Add User</button>
      </form>
    </div>
  );
};
