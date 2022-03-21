import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addReciente } from "../../../../../../functions/reciente/addNewReciente";

const AñadirModal = ({
  isModalAñadir,
  setIsModalAñadir,
  actualizarEstadoReciente,
}) => {
  function añadirRecienteModal() {
    const urlImagen = document.getElementById("urlImagen").value;
    const categoria = document.getElementById("categoria").value;
    const titulo = document.getElementById("titulo").value;
    const detalle = document.getElementById("detalle").value;
    const descripcion = document.getElementById("descripcion").value;
    const fecha = document.getElementById("fecha").value;
    const sku = document.getElementById("sku").value;
    const infoReciente = {
      urlImagen,
      categoria,
      titulo,
      detalle,
      descripcion,
      fecha,
      sku,
    };
    addReciente(infoReciente);
    actualizarEstadoReciente();
    setIsModalAñadir(false);
  }

  return (
    <Modal show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>
      <Modal.Header>
        <Modal.Title>Nueva entrada Reciente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Label>ID</Form.Label>
            <Form.Control
              id="sku"
              placeholder="ID"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL Imagen</Form.Label>
            <Form.Control
              id="urlImagen"
              placeholder="URL imagen"
              type="text"
              className="mb-2"
            />
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              id="categoria"
              placeholder="Categoria"
              type="text"
              className="mb-2"
            />
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              id="titulo"
              placeholder="Titulo"
              type="text"
              className="mb-2"
            />
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              id="fecha"
              placeholder="Fecha"
              type="text"
              className="mb-2"
            />
            <Form.Label>Detalle (no mas de 200 caractéres)</Form.Label>
            <Form.Control
              maxlength="200"
              as="textarea"
              rows={3}
              id="detalle"
              placeholder="Detalle"
              type="text"
              className="mb-2"
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="descripcion"
              placeholder="Descripción"
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
        <Button variant="primary" onClick={añadirRecienteModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { AñadirModal };
