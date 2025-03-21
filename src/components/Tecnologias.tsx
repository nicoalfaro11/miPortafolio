import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";

import "/src/App.css";

const Tecnologias = () => {
  return (
    <div id="tec" className="container mt-5 mb-5">
      <h2 className="text-center mb-5 text-light teko-uniquifier">
        Mis Conocimientos
      </h2>
      <div className="row text-center">
        {/* Primera fila */}
        <div className="col-md-3 col-sm-6 mb-4 teko-uniquifier anima">
          <a
            href="https://developer.mozilla.org/es/docs/Glossary/HTML5"
            target="_blank"
          >
            <FaHtml5 size={60} color="#E34F26" />
            <p className="teko-uniquifier text-light">HTML</p>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4 teko-uniquifier anima">
          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            target="_blank"
          >
            <FaCss3Alt size={60} color="#1572B6" />
            <p className="teko-uniquifier text-light">CSS</p>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4 teko-uniquifier anima">
          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaJs size={60} color="#F7DF1E" />
            <p className="teko-uniquifier text-light">JavaScript</p>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4 teko-uniquifier anima">
          <a
            href="https://es.react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact size={60} color="#61DAFB" />
            <p className="teko-uniquifier text-light">React</p>
          </a>
        </div>
      </div>
      {/* Segunda fila */}
      <div className="row text-center">
        <div className="col-md-4 col-sm-6 mb-4 teko-uniquifier anima">
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBootstrap size={60} color="#7952B3" />
            <p className="teko-uniquifier text-light">Bootstrap</p>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 mb-4 teko-uniquifier anima">
          <a
            href="https://laravel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaravel size={60} color="#FF2D20" />
            <p className="teko-uniquifier text-light">Laravel</p>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 mb-4 teko-uniquifier anima">
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDatabase size={60} color="#00758F" />
            <p className="teko-uniquifier text-light">MySQL</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
