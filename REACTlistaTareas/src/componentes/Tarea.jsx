import React from "react";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";

const Tarea = () => {
  return (
    <section className=" justify-content ">
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between">
          Planificar
          <Button variant="danger " id="button-addon2">
            <i className="bi bi-plus-circle"></i>
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </section>
  );
};

export default Tarea;
