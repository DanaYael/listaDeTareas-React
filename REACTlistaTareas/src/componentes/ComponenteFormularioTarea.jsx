import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListaDeTareas from "./ListadeTareas";

const ComponenteFormularioTarea = () => {
  return (
    <section className="container justify-content ">
      <InputGroup className="mb-3">
        <FormControl
          className="form-control-lg"
          placeholder="Escribe tu nueva tarea"
          aria-label="Tarea"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          <i className="bi bi-plus-circle"></i>
        </Button>
      </InputGroup>
      <ListaDeTareas></ListaDeTareas>
    </section>
  );
};

export default ComponenteFormularioTarea;
