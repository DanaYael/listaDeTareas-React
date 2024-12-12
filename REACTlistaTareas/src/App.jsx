import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Footer from "./componentes/Footer";
import FormularioTarea from "./componentes/FormularioTarea";

function App() {
  return (
    <>
      <main>
        <h1 className="mb-5 text-center">Lista de tareas</h1>
        <FormularioTarea />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
