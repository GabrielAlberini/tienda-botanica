import "./SideBarInicio.css";

const SideBarInicio = () => {
  return (
    <section className="section-sidebar">
      <div className="container-img">
        <img src="https://i.ibb.co/z5rkrkj/IMG-4652.jpg" alt="foto de inicio" />
      </div>
      <div className="container-txt">
        <h3>¡Hola!</h3>
        <p>
          Nos llamamos Euge y Fausto y nos dedico a aprender, experimentar y compartir
          herramientas para cuidar la Tierra: el planeta que somos. A través de
          mi trabajo quiero hacerle el camino más fácil a quienes también
          quieren observar, cuestionar y regenerar su relación con la Tierra ♡
        </p>
        <a className="btn-general"
          href="https://www.instagram.com/tiendabotanica.sf/"
          rel="noreferrer"
          target="_blank"
        >
          Visitar Instagram
        </a>
      </div>
    </section>
  );
};
export { SideBarInicio };
