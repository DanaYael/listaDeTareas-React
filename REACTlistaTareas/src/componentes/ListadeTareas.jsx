import React from "react";
import Tarea from "./Tarea";
import { ListGroup } from "react-bootstrap";

const ListaDeTareas = () => {
  return (
    <ListGroup>
      <Tarea />
      <Tarea />
      <Tarea />
    </ListGroup>
  );
};

export default ListaDeTareas;
