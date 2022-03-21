import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addReciente } from "../../../../../../functions/reciente/addNewReciente";

const EditarModal = ({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoReciente,
  recienteEditar,
  setRecienteEditar,
}) => {
  const [recienteEstado, setRecienteEstado] = useState({});

  function editarRecienteModal() {
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
    setRecienteEditar(null);
    actualizarEstadoReciente();
    setIsModalEditar(false);
  }

  useEffect(() => {
    setRecienteEstado({ ...recienteEditar });
  }, [recienteEditar]);

  return (
    <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setRecienteEditar(null);
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
              value={recienteEstado?.titulo}
              onChange={(e) => {
                setRecienteEstado({
                  ...recienteEstado,
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
              value={recienteEstado?.urlImagen}
              onChange={(e) => {
                setRecienteEstado({
                  ...recienteEstado,
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
              value={recienteEstado?.categoria}
              onChange={(e) => {
                setRecienteEstado({
                  ...recienteEstado,
                  categoria: e.target.value,
                });
              }}
            />
            <Form.Label>Detalle</Form.Label>
            <Form.Control
              as="textarea"
              id="detalle"
              placeholder="Detalle"
              type="text"
              className="mb-2"
              value={recienteEstado?.detalle}
              onChange={(e) => {
                setRecienteEstado({
                  ...recienteEstado,
                  detalle: e.target.value,
                });
              }}
            />
            <Form.Label>Contenido</Form.Label>
            <Form.Control
              as="textarea"
              id="descripcion"
              placeholder="Contenido"
              type="text"
              className="mb-2"
              value={recienteEstado?.descripcion}
              onChange={(e) => {
                setRecienteEstado({
                  ...recienteEstado,
                  descripcion: e.target.value,
                });
              }}
            />
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              id="fecha"
              placeholder="Fecha"
              type="text"
              className="mb-2"
              value={recienteEstado?.fecha}
              onChange={(e) => {
                setRecienteEstado({
                  ...recienteEstado,
                  fecha: e.target.value,
                });
              }}
            />
            <Form.Label>ID - Solo lectura</Form.Label>
            <Form.Control
              disabled
              id="sku"
              placeholder="ID"
              type="text"
              className="mb-2"
              value={recienteEstado?.sku}
              onChange={(e) => {
                setRecienteEstado({
                  ...recienteEstado,
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
            setRecienteEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarRecienteModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { EditarModal };
