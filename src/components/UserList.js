import React from "react";

export const UserList = ({ list }) => {
  return (
    <div className="display-list ">
      <div className="display-list-title">
        <span className="title ">
          Display List <hr />
        </span>
      </div>
      <ul>
        {list.map((item, i) => {
          //In list index should be written in first level element
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
