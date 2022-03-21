import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addProduct } from "../../../../../../functions/recomendaciones/addNewProduct";

const AñadirModal = ({
  isModalAñadir,
  setIsModalAñadir,
  actualizarEstadoProductos,
}) => {
  function añadirProductoModal() {
    const urlImagen = document.getElementById("urlImagen").value;
    const categoria = document.getElementById("categoria").value;
    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;
    const sku = document.getElementById("sku").value;
    const infoProducto = { urlImagen, categoria, titulo, contenido, sku };
    console.log(infoProducto);
    addProduct(infoProducto);
    actualizarEstadoProductos();
    setIsModalAñadir(false);
  }

  return (
    <Modal show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>
      <Modal.Header>
        <Modal.Title>Añadir recomendacion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="sku"
              placeholder="ID"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="urlImagen"
              placeholder="URL imagen"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="categoria"
              placeholder="Categoria"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="titulo"
              placeholder="Titulo"
              type="text"
              className="mb-2"
            />
            <Form.Control
              as="textarea"
              rows={3}
              id="contenido"
              placeholder="Contenido"
              type="text"
              className="mb-2"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAñadir(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirProductoModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { AñadirModal };
