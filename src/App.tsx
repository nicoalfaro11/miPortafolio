import BarraNavegacion from "./components/BarraNavegacion";
import { HashRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Gracias from "./components/Gracias";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <BarraNavegacion />
          <h4 className="text-danger text-center mt-5">
            ¡¡¡¡¡Este sitio está siendo construido!!!!!
          </h4>
          <Gracias />
          <Tecnologias />
          <Proyectos />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
