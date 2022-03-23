import "./RecienteItemDetail.css";
import { Link } from "react-router-dom";

const RecienteItemDetail = ({ recienteFilteded }) => {
  return (
    <>
      <h3 className="titulo-detail">{recienteFilteded.titulo}</h3>
      <div className="container-img-reciente-detail">
        <img
          className="img-reciente-detail"
          src={recienteFilteded.urlImagen}
          alt={recienteFilteded.detalle}
        />
      </div>
      <div className="container-txt-reciente-detail">
        <p className="primer-tecto">{recienteFilteded.descripcion}</p>
      </div>
      <Link to="/" className="btn-general">
        Volver al inicio
      </Link>
    </>
  );
};

export { RecienteItemDetail };
