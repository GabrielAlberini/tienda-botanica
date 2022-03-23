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
            <Form.Label>ID</Form.Label>
            <Form.Control
              id="sku"
              placeholder="Define tu ID"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL de imagen</Form.Label>
            <Form.Control
              id="urlImagen"
              placeholder="Ingresa URL de imagen"
              type="text"
              className="mb-2"
            />
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              id="categoria"
              placeholder="Ingresa la categoria"
              type="text"
              className="mb-2"
            />
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              id="titulo"
              placeholder="Ingresa un titulo"
              type="text"
              className="mb-2"
            />
            <Form.Label>Contenido</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="contenido"
              placeholder="Ingresa el contenido"
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
