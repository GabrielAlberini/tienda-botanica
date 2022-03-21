import { Layout } from "../components/Layout/Layout";
import { RecomendacionesInicio } from "../components/RecomendacionesInicio/RecomendacionesInicio";
import { SideBarInicio } from "../components/SideBarInicio/SideBarInicio";

const Inicio = () => {
  return (
    <Layout>
      <SideBarInicio />
      <RecomendacionesInicio />
    </Layout>
  );
};

export { Inicio };
