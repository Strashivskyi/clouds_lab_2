import React from "react";
import { List, Header, Rating } from "semantic-ui-react";

export const Machines = ({ machines }) => {
  return (
    <List>
      {machines.map(machine => {
        return (
          <List.Item key={machine.title}>
            <Header>{machine.address}</Header>
          </List.Item>
        );
      })}
    </List>
  );
};