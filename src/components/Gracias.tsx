const Gracias = () => {
  return (
    <div
      id="gracias"
      className="container mt-4 teko-uniquifier text-light position-relative"
    >
      <img
        className="img-fluid mt-5 mb-5 blur-image"
        src="programa.jpg"
        alt="programa"
      />
      <div className="text-overlay">
        <h1 className="text-center teko-uniquifier">
          ¡Gracias por visitar mi portafolio!
        </h1>
        <p className="text-center teko-uniquifier w-50">
          Estoy emocionado de compartir mis proyectos y habilidades contigo. Mi
          pasión por el desarrollo web me impulsa a aprender y crecer
          constantemente. Si tienes alguna pregunta o deseas colaborar en un
          proyecto, no dudes en ponerte en contacto conmigo. Espero que
          disfrutes explorando mi trabajo tanto como yo disfruté creándolo.
          ¡Hasta pronto!
        </p>
      </div>
    </div>
  );
};

export default Gracias;
