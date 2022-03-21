import { Layout } from "../components/Layout/Layout";
import { RecienteInicio } from "../components/RecienteInicio/RecienteInicio";
import { RecomendacionesInicio } from "../components/RecomendacionesInicio/RecomendacionesInicio";
import { SideBarInicio } from "../components/SideBarInicio/SideBarInicio";

const Inicio = () => {
  return (
    <Layout>
      <SideBarInicio />
      <RecomendacionesInicio />
      <RecienteInicio />
    </Layout>
  );
};

export { Inicio };
