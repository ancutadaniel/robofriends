import React, { useContext } from "react";
import { Context } from "../containers/App";

export const Card = ({ id, name, username, email, updateContext }) => {
  const counter = useContext(Context);
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200X200}`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{`we are here by context ${counter}`}</p>
        <button onClick={() => updateContext()}>Click Me!</button>
      </div>
    </div>
  );
};
