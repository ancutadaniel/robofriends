import React from "react";

export const SearchBox = ({ search }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={search}
      />
    </div>
  );
};
