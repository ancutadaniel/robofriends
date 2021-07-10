import React, { useEffect, useState, createContext } from "react";
import { CardList } from "../components/CardList";
import { SearchBox } from "../components/SearchBox";
import { Scroll } from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import axios from "axios";
import "./App.css";

export const Context = createContext(0);

export const App = () => {
  const [searchfield, setSearchField] = useState("");
  const [robots, setRobots] = useState([]);
  const [count, setCount] = useState(0);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setRobots(json));
    // handleAxios();
  }, []);

  const handleAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setRobots(response.data))
      .catch((err) => console.log(err));
    console.log(robots);
    setCount(count + 1);
  };

  const updateContext = () => {
    console.log("here");
  };

  useEffect(() => {
    document.title = count;
  });

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <Context.Provider value={count}>
      <div>
        {!robots.length ? (
          <h1>Loading...</h1>
        ) : (
          <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox search={onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filterRobots} updateContext={updateContext} />
              </ErrorBoundry>
            </Scroll>
            <button onClick={handleAxios}>{count}</button>
          </div>
        )}
      </div>
    </Context.Provider>
  );
};
