import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addProduct } from "../../functions/addNewProduct";

const EditarModal = ({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
}) => {
  const [productoEstado, setProductoEstado] = useState({});

  function editarProductoModal() {
    const titulo = document.getElementById("titulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const sku = document.getElementById("sku").value;
    const infoProducto = { titulo, precio, cantidad, sku };
    console.log(titulo);
    addProduct(infoProducto);
    setProductoEditar(null);
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  useEffect(() => {
    setProductoEstado({ ...productoEditar });
  }, [productoEditar]);

  return (
    <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              id="titulo"
              placeholder="Titulo"
              type="text"
              className="mb-2"
              value={productoEstado?.titulo}
              onChange={(e) => {
                setProductoEstado({
                  ...productoEstado,
                  titulo: e.target.value,
                });
              }}
            />
            <Form.Label>Precio</Form.Label>
            <Form.Control
              id="precio"
              placeholder="precio"
              type="number"
              className="mb-2"
              value={productoEstado?.precio}
              onChange={(e) => {
                setProductoEstado({
                  ...productoEstado,
                  precio: e.target.value,
                });
              }}
            />
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              id="cantidad"
              placeholder="cantidad"
              type="number"
              className="mb-2"
              value={productoEstado?.cantidad}
              onChange={(e) => {
                setProductoEstado({
                  ...productoEstado,
                  cantidad: e.target.value,
                });
              }}
            />
            <Form.Label>SKU - Solo lectura</Form.Label>
            <Form.Control
              disabled
              id="sku"
              placeholder="Sku"
              type="text"
              className="mb-2"
              value={productoEstado?.sku}
              onChange={(e) => {
                setProductoEstado({
                  ...productoEstado,
                  cantidad: e.target.value,
                });
              }}
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setProductoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { EditarModal };
