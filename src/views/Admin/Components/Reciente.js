import { useEffect, useState } from "react";
import { Container, Stack, Button, Table, Spinner } from "react-bootstrap";
import { getAllRecientes } from "../../../functions/reciente/getAllReciente";
import { deleteReciente } from "../../../functions/reciente/deleteReciente";
import { AñadirModal } from "../Components/Modal/ModalReciente/AñadirModal/AñadirModal";
import { EditarModal } from "../Components/Modal/ModalReciente/EditarModal/EditarModal";

const Reciente = () => {
  const [recientes, setRecientes] = useState([]);
  const [isModalAñadir, setIsModalAñadir] = useState(false);
  const [isModalEditar, setIsModalEditar] = useState(false);
  const [recienteEditar, setRecienteEditar] = useState({});

  function actualizarEstadoReciente() {
    getAllRecientes().then((listadoDeRecientes) => {
      setRecientes(listadoDeRecientes);
    });
  }

  function añadirProductoHome() {
    setIsModalAñadir(true);
  }

  useEffect(() => {
    actualizarEstadoReciente();
  }, []);

  return (
    <Container>
      <AñadirModal
        isModalAñadir={isModalAñadir}
        setIsModalAñadir={setIsModalAñadir}
        actualizarEstadoReciente={actualizarEstadoReciente}
      />
      {recienteEditar && (
        <EditarModal
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoReciente={actualizarEstadoReciente}
          recienteEditar={recienteEditar}
          setRecienteEditar={setRecienteEditar}
        />
      )}

      <Stack direction="horizontal" className="justify-content-between">
        <h2>Recientes</h2>
        <Button onClick={añadirProductoHome}> Añadir Reciente</Button>
      </Stack>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Fecha</th>
            <th>URL Imagen</th>
            <th>Categoria</th>
            <th>Titulo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recientes &&
            recientes.map((reciente, index) => (
              <tr key={reciente.sku}>
                <td>{index + 1}</td>
                <td>{reciente.sku}</td>
                <td>{reciente.fecha}</td>
                <td>{reciente.urlImagen}</td>
                <td>{reciente.categoria}</td>
                <td>{reciente.titulo}</td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setRecienteEditar({ ...reciente });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteReciente(reciente).then((confirmacion) => {
                        actualizarEstadoReciente();
                      })
                    }
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {!recientes.length && (
        <Stack>
          <Spinner className="mx-auto" animation="border" role="status" />
        </Stack>
      )}
    </Container>
  );
};

export { Reciente };
