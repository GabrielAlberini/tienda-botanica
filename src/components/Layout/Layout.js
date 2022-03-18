import { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  const [getMenu, setGetMenu] = useState(false);

  function handleMenu() {
    setGetMenu(!getMenu);
    console.log(getMenu);
  }

  return (
    <>
      <div onClick={handleMenu} className="container-menu-icon">
        <svg
          className="menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
      </div>
      <nav className={getMenu && 'showMenu'}>
        <ul className="showMenu-ul">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/tienda-botanica">
            <li>Tienda Botánica</li>
          </Link>
          <Link to="/contacto">
            <li>Contacto</li>
          </Link>
        </ul>
      </nav>
      <header className="container-header">
        <div className="container-img-banner-layout">
          <img
            className="img-banner-layout"
            src="https://i.ibb.co/J5bvQrN/Tienda-botanica-vector-Pajaro-de-Fuego.png"
            alt="logo de tienda botánica vercion logo"
          />
        </div>
        <nav>
          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <Link to="/tienda-botanica">
              <li>Tienda Botánica</li>
            </Link>
            <Link to="/contacto">
              <li>Contacto</li>
            </Link>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
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

export { Layout };