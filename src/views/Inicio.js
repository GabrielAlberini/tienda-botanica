import { Layout } from "../components/Layout/Layout";
import { RecienteInicio } from "../components/RecienteInicio/RecienteInicio";
import { RecomendacionesInicio } from "../components/RecomendacionesInicio/RecomendacionesInicio";
import { SideBarInicio } from "../components/SideBarInicio/SideBarInicio";
import { MensajePatrocinador } from '../components/MensajePatrocinador/MensajePatrocinador'

const Inicio = () => {
  return (
    <Layout>
      <SideBarInicio />
      <RecomendacionesInicio />
      <RecienteInicio />
      <MensajePatrocinador />
    </Layout>
  );
};

export { Inicio };
