import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="container-header">
        <div className="container-video-header">
          <ReactPlayer
            url="video/video.mp4"
            className="react-player"
            height="auto"
            playing
            loop
            playbackRate={0.6}
          />
        </div>
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
    </>
  );
};

export { Header };
