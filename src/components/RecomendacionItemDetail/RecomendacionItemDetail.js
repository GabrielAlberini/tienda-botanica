import { Link } from "react-router-dom";
import "./RecomendacionItemDetail.css";

const RecomendacionItemDetail = ({ recoFiltered }) => {
  console.log(recoFiltered);
  return (
    <>
      <h3 className="titulo-detail">{recoFiltered.titulo}</h3>
      <div className="container-img-reco-detail">
        <img className="img-reco-detail" src={recoFiltered.urlImagen} alt={recoFiltered.detalle} />
      </div>
      <div className="container-txt-reco-detail">
        <p className="primer-tecto">{recoFiltered.contenido}</p>
      </div>
      <Link to="/" className="btn-general">
        Volver al inicio
      </Link>
    </>
  );
};

export { RecomendacionItemDetail };
