import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaDeTareas from "./ListadeTareas";
import { FormGroup, FormText } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";

const FormularioTarea = () => {
  const [listaTareas, setListaTareas] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const posteriorValidacion = (data) => {
    if (listaTareas.some((tarea) => tarea === data.tarea.trim())) {
      alert("La tarea ya existe");
    } else {
      setListaTareas([...listaTareas, data.tarea]);
      reset();
    }
  };

  const borraTarea = (nombreTarea) => {
    const tareaFiltradas = listaTareas.filter((tarea) => tarea != nombreTarea);
    setListaTareas(tareaFiltradas);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(posteriorValidacion)}
        className="mb-3  d-flex container"
      >
        <Form.Group controlId="formTarea" className="w-100">
          <Form.Control
            type="text"
            placeholder="Escribe tu nueva tarea"
            {...register("tarea", {
              required: "La tarea es obligatoria",
              minLength: {
                value: 3,
                message: "La tarea debe tener 3 caracteres como minimo",
              },
              maxLength: {
                value: 25,
                message: "La tarea debe tener 25 caracteres como maximo",
              },
            })}
          />
          <FormText className="text-danger">{errors.tarea?.message}</FormText>
        </Form.Group>
        <Button variant="primary" type="submit">
          <PlusCircle></PlusCircle>
        </Button>
      </Form>
      <ListaDeTareas listaTareas={listaTareas}></ListaDeTareas>
    </>
  );
};

export default FormularioTarea;
