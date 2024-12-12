import React from "react";
import Tarea from "./Tarea";
import { ListGroup } from "react-bootstrap";

const ListaDeTareas = ({ listaTareas }) => {
  return (
    <ListGroup>
      {listaTareas.map((tarea) => (
        <Tarea key={tarea} tarea={tarea}></Tarea>
      ))}
    </ListGroup>
  );
};

export default ListaDeTareas;
