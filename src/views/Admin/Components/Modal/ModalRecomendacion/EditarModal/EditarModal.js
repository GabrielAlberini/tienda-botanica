import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addProduct } from "../../../../../../functions/recomendaciones/addNewProduct";

const EditarModal = ({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
}) => {
  const [productoEstado, setProductoEstado] = useState({});

  function editarProductoModal() {
    const urlImagen = document.getElementById("urlImagen").value;
    const categoria = document.getElementById("categoria").value;
    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;
    const sku = document.getElementById("sku").value;
    const infoProducto = { urlImagen, categoria, titulo, contenido, sku };
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
        <Modal.Title>Editar recomendación</Modal.Title>
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
            <Form.Label>URL imagen</Form.Label>
            <Form.Control
              id="urlImagen"
              placeholder="URL Imagen"
              type="text"
              className="mb-2"
              value={productoEstado?.urlImagen}
              onChange={(e) => {
                setProductoEstado({
                  ...productoEstado,
                  urlImagen: e.target.value,
                });
              }}
            />
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              id="categoria"
              placeholder="Categoria"
              type="text"
              className="mb-2"
              value={productoEstado?.categoria}
              onChange={(e) => {
                setProductoEstado({
                  ...productoEstado,
                  categoria: e.target.value,
                });
              }}
            />
            <Form.Label>Contenido</Form.Label>
            <Form.Control
              as="textarea"
              id="contenido"
              placeholder="Contenido"
              type="text"
              className="mb-2"
              value={productoEstado?.contenido}
              onChange={(e) => {
                setProductoEstado({
                  ...productoEstado,
                  contenido: e.target.value,
                });
              }}
            />
            <Form.Label>ID - Solo lectura</Form.Label>
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
