import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="container-footer">
        <div className="container-txt-footer">
          <p>
            Todo el contenido (textos, letras dibujadas, fotos, ilustraciones)
            lo he hecho yo con mucho amor, y lo comparto bajo licencia CC
            (by-nc-nd). Puedes compartir lo que encuentras aquí, pero por favor
            incluye siempre los créditos y un enlace a la publicación original o
            a esta web.
          </p>
          <p>Robar es feo, compartir es lindo ♡</p>
        </div>
        <div className="container-img-footer-layout">
          <img
            className="img-footer-layout"
            src="https://i.ibb.co/Z1ZYsNH/TB-vector-pajaro-de-fuego.png"
            alt="logo de tienda botánica versión chica"
          />
        </div>
      </footer>
    </>
  );
};

export { Footer };
