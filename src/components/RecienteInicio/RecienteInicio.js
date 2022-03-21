import { useState, useEffect } from "react";
import { getAllRecientes } from "../../functions/reciente/getAllReciente";
import { Container, Stack, Spinner } from "react-bootstrap";
import "./RecienteInicio.css";

const RecienteInicio = () => {
  const [reciente, setReciente] = useState([]);


  function actualizarEstadoProductos() {
    getAllRecientes().then((listadoDeRecientes) => {
        setReciente(listadoDeRecientes);
    });
  }

  useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <section className="section-reciente">
      <h3 className="titulo-reciente">Lo más reciente del blog</h3>
      {!reciente.length && (
          <Container direction="horizontal" className="justify-content-between">
            <Stack>
              <Spinner className="mx-auto" animation="border" role="status" />
            </Stack>
          </Container>
        )}
      {reciente.map((reciente) => (
        <article className="item-reciente">
          <a className="link-reciente" href="">
            <div className="container-img-reciente">
              <img
                className="img-reciente"
                src={reciente.urlImagen}
                alt={reciente.titulo}
              />
            </div>
          </a>
          <div className="container-txt-reciente">
            <p className="categoria-reciente">{reciente.categoria}</p>
            <h4 className="titulo-item-reciente">{reciente.titulo}</h4>
            <p className="detalle-reciente">
              {reciente.detalle}
            </p>
            <p className="fecha-reciente">{reciente.fecha}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export { RecienteInicio };
