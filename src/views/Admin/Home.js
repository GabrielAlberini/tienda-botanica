import { Recomendaciones } from "./Components/Recomendaciones";
import { Stack, Button } from "react-bootstrap";
import { cerrarSesion } from "../../functions/login/signOut";
// import { Reciente } from "./Components/Reciente";

const Home = () => {

  return (
    <>
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Hola, Fausto y Euge!</h1>
        <Button onClick={cerrarSesion}>Cerrar sesion</Button>
      </Stack>

      <hr />
      <Recomendaciones />
      {/* <Reciente /> */}
    </>
  );
};

export { Home };
