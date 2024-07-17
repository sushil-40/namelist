// import React from "react";

// export const Display = ({ name }) => {
//   return <div>{name}</div>;
// };

import React from "react";

export const Display = ({ user }) => {
  return (
    <div className="display-screen">
      <span className="title">
        Display real time data <hr />
      </span>
      {user}
    </div>
  );
};
