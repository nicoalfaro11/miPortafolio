import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "/src/App.css";

const BarraNavegacion = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand text-light teko-uniquifier anima rounded"
            href="#"
          >
            Nicolas Alfaro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link disabled text-light teko-uniquifier"
                  aria-current="page"
                  href="#"
                >
                  Desarrollador web Jr
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light teko-uniquifier anima rounded"
                  href="#"
                >
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light teko-uniquifier anima rounded"
                  href="#"
                >
                  Mis Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light teko-uniquifier anima rounded"
                  href="#"
                >
                  Contacto
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <a
                      className="dropdown-item text-light teko-uniquifier anima rounded"
                      href="#"
                    >
                      Mi perfil
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-light teko-uniquifier anima rounded"
                      href="#"
                    >
                      Mis aspiraciones
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-light teko-uniquifier anima rounded"
                      href="#"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="text-end">
            <img
              src="/nico.jpg"
              className="rounded-circle img-fluid w-25 anima"
              alt="Descripción de la imagen"
              data-bs-toggle="modal"
              data-bs-target="#imageModal" // Abre el modal al hacer clic
            />
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div
        className="modal fade"
        id="imageModal"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">
                Nicolas Alfaro - Desarrollador web jr.
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src="/nico.jpg"
                className="img-fluid" // Asegúrate de que sea responsivo
                alt="Descripción de la imagen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraNavegacion;
