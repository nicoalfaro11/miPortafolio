import BarraNavegacion from "./components/BarraNavegacion";
import Footer from "./components/Footer";
import Gracias from "./components/Gracias";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <BarraNavegacion />
        <h4 className="text-danger text-center mt-5">
          ¡¡¡¡¡Este sitio esta siendo construido!!!!!
        </h4>
        <Gracias />
        <Tecnologias />
        <Proyectos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
