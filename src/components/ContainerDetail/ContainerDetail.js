import "./ContainerDetail.css";
import { useEffect, useState } from "react";
import { Layout } from "../Layout/Layout";
import { recomendacion } from "../../functions/recomendaciones/filteredRecomendaciones";
import { Link, useParams } from "react-router-dom";
import { RecomendacionItemDetail } from "../RecomendacionItemDetail/RecomendacionItemDetail";
import { RecienteItemDetail } from "../RecienteItemDetail/RecienteItemDetail";
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
    <>
      <Layout headerShow={false}>
        <Link to={"/"}>
          <svg className="backIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
          </svg>
        </Link>
        <section className="main-detail">
          {recoFiltered && (
            <RecomendacionItemDetail recoFiltered={recoFiltered} />
          )}
          {recienteFilteded && (
            <RecienteItemDetail recienteFilteded={recienteFilteded} />
          )}
        </section>
      </Layout>
    </>
  );
};

export { ContainerDetail };
