import React from "react";
import { XCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";

const Tarea = ({ tarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <Button variant="danger " onClick={() => borrarTarea(tarea)}>
        <XCircle></XCircle>
      </Button>
    </ListGroup.Item>
  );
};

export default Tarea;
