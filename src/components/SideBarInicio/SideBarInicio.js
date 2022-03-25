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
          Bienvenidx a Tienda Botánica. Aquí encontrarás
          recomendaciones de jardinería, información sobre plantas, e ideas
          creativas para ambientar tus espacios.
        </p>
        <a
          className="btn-general"
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
