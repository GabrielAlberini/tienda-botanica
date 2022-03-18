import { Link } from "react-router-dom";
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="container-img-banner-layout">
          <img className="img-banner-layout" src="https://i.ibb.co/J5bvQrN/Tienda-botanica-vector-Pajaro-de-Fuego.png" alt="logo de tienda botánica vercion logo" />
        </div>
        <nav>
          <ul>
            <Link to='/'>
              <li>Inicio</li>
            </Link>
            <Link to='/tienda-botanica'>
              <li>Tienda Botánica</li>
            </Link>
            <Link to='/contacto'>
              <li>Contacto</li>
            </Link>
          </ul>
        </nav>
      </header>
      <section>{children}</section>
      <footer>
        <p>
          Todo el contenido (textos, letras dibujadas, fotos, ilustraciones) lo
          he hecho yo con mucho amor, y lo comparto bajo licencia CC (by-nc-nd).
          Puedes compartir lo que encuentras aquí, pero por favor incluye
          siempre los créditos y un enlace a la publicación original o a esta
          web.
        </p>
        <p>Robar es feo, compartir es lindo ♡</p>
        <div>
          <img src="https://i.ibb.co/Z1ZYsNH/TB-vector-pajaro-de-fuego.png" alt="logo de tienda botánica versión chica" />
        </div>
      </footer>
    </>
  );
};

export { Layout };
