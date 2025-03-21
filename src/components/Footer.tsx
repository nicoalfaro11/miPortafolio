const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-2 mt-auto teko-uniquifier">
      <p>Este sitio esta creado con React</p>
      <img className="m-1" src="src\assets\react.svg" alt="react" />
      <p>
        &copy; {new Date().getFullYear()} Nicolás Alfaro - Desarrollador Web Jr.
      </p>
    </footer>
  );
};

export default Footer;
