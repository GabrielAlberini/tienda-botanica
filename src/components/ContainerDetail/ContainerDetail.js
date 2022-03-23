import "./ContainerDetail.css";
import { useEffect, useState } from "react";
import { Layout } from "../Layout/Layout";
import { recomendacion } from "../../functions/recomendaciones/filteredRecomendaciones";
import { useParams } from "react-router-dom";
import { RecomendacionItemDetail } from "../RecomendacionItemDetail/RecomendacionItemDetail";
import { RecienteItemDetail } from "../../RecienteItemDetail/RecienteItemDetail";
import { reciente } from "../../functions/reciente/filteredReciente";

const ContainerDetail = () => {
  const [recoFiltered, setRecoFiltered] = useState([]);
  const [recienteFilteded, setRecienteFilteded] = useState([]);
  const { sku } = useParams();

  useEffect(() => {
    recomendacion(sku).then((reco) => {
      setRecoFiltered(reco);
      console.log(reco);
    });
    reciente(sku).then((reciente) => {
      setRecienteFilteded(reciente);
      console.log(reciente);
    });
  }, [sku]);

  return (
    <Layout>
      <section className="main-detail">
        {recoFiltered && (
          <RecomendacionItemDetail recoFiltered={recoFiltered} />
        )}
        {recienteFilteded && (
          <RecienteItemDetail recienteFilteded={recienteFilteded} />
        )}
      </section>
    </Layout>
  );
};

export { ContainerDetail };
