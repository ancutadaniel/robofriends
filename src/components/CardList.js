import React from "react";

import { Card } from "./Card";

export const CardList = ({ robots, updateContext }) => {
  return robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        username={robot.username}
        email={robot.email}
        updateContext={updateContext}
      />
    );
  });
};
