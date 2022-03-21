import { useEffect, useState } from "react";
import { Container, Stack, Button, Table, Spinner } from "react-bootstrap";
import { getAllProducts } from "../../../functions/recomendaciones/getAllProducts";
import { deleteProduct } from "../../../functions/recomendaciones/deleteProduct";
import { AñadirModal } from "../Components/Modal/ModalRecomendacion/AñadirModal/AñadirModal";
import { EditarModal } from "../Components/Modal/ModalRecomendacion/EditarModal/EditarModal";

const Recomendaciones = ({ usuario }) => {
    const [productos, setProductos] = useState([]);
    const [isModalAñadir, setIsModalAñadir] = useState(false);
    const [isModalEditar, setIsModalEditar] = useState(false);
    const [productoEDitar, setProductoEditar] = useState({});
  
    function actualizarEstadoProductos() {
      getAllProducts().then((listadoDeProductos) => {
        setProductos(listadoDeProductos);
      });
    }
  
    function añadirProductoHome() {
      setIsModalAñadir(true);
    }
  
    useEffect(() => {
      actualizarEstadoProductos();
    }, []);
  
    return (
      <Container>
        <AñadirModal
          isModalAñadir={isModalAñadir}
          setIsModalAñadir={setIsModalAñadir}
          actualizarEstadoProductos={actualizarEstadoProductos}
        />
        {productoEDitar && (
          <EditarModal
            isModalEditar={isModalEditar}
            setIsModalEditar={setIsModalEditar}
            actualizarEstadoProductos={actualizarEstadoProductos}
            productoEditar={productoEDitar}
            setProductoEditar={setProductoEditar}
          />
        )}
  
        <Stack direction="horizontal" className="justify-content-between">
          <h2>Recomendaciones</h2>
          <Button onClick={añadirProductoHome}> Añadir Recomendación</Button>
        </Stack>
  
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>URL Imagen</th>
              <th>Categoria</th>
              <th>Titulo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos &&
              productos.map((prod, index) => (
                <tr key={prod.sku}>
                  <td>{index + 1}</td>
                  <td>{prod.sku}</td>
                  <td>{prod.urlImagen}</td>
                  <td>{prod.categoria}</td>
                  <td>{prod.titulo}</td>
                  <td>
                    <Button
                      className="m-1"
                      variant="dark"
                      onClick={() => {
                        setProductoEditar({ ...prod });
                        setIsModalEditar(true);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() =>
                        deleteProduct(prod).then((confirmacion) => {
                          actualizarEstadoProductos();
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
        {!productos.length && (
          <Stack>
            <Spinner className="mx-auto" animation="border" role="status" />
          </Stack>
        )}
      </Container>
    );
  };

export { Recomendaciones };