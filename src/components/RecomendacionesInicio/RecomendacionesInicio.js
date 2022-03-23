import { useState, useEffect } from "react";
import "./RecomendacionesInicio.css";
import { getAllProducts } from "../../functions/recomendaciones/getAllProducts";
import { Stack, Spinner, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const RecomendacionesInicio = () => {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const { sku } = useParams()

  function actualizarEstadoProductos() {
    getAllProducts().then((listadoDeRecomendaciones) => {
      setRecomendaciones(listadoDeRecomendaciones);
    });
  }

  useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <section className="main-recomendaciones">
      <h3 className="title-recomedaciones">Nuestras recomendaciones</h3>
      {!recomendaciones.length && (
        <Container direction="horizontal" className="justify-content-between">
          <Stack>
            <Spinner className="mx-auto" animation="border" role="status" />
          </Stack>
        </Container>
      )}
      <section className="section-recomendaciones">
        {recomendaciones.map((reco) => (
          <article>
            <Link to={`/blog/${reco.sku}`} className="link-recomendacion" href="">
              <div className="container-img-recomendaciones">
                <img
                  className="container-img-recomendaciones"
                  src={reco.urlImagen}
                  alt={reco.titulo}
                />
              </div>
            </Link>
            <p className="categoria-recomendaciones">{reco.categoria}</p>
            <h4 className="title-item-recomendaciones">{reco.titulo}</h4>
            <p className="descripcion-recomendaciones">{reco.contenido}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export { RecomendacionesInicio };
