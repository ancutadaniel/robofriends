import React, { useEffect, useState } from "react";
import { CardList } from "../components/CardList";
import { SearchBox } from "../components/SearchBox";
import { Scroll } from "../components/Scroll";
import "./App.css";

export const App = () => {
  const [searchfield, setSearchField] = useState("");
  const [robots, setRobots] = useState([]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setRobots(json));
  }, []);

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div>
      {!robots.length ? (
        <h1>Loading...</h1>
      ) : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox search={onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      )}
    </div>
  );
};
