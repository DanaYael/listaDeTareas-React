import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import ComponenteFormularioTarea from "./componentes/ComponenteFormularioTarea";
import ListaDeTareas from "./componentes/ListadeTareas";
import Tarea from "./componentes/Tarea";
import { ListGroupItem } from "react-bootstrap";

function App() {
  return (
    <>
      <main className="container  m-5 p-4 ">
        <h1 className="mb-5">Lista de tareas</h1>
        <ComponenteFormularioTarea />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
