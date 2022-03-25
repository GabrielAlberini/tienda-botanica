import "./ContainerContacto.css";

const ContainerContacto = () => {
  return (
    <section className="main-contacto">
      <h3>¿Quieres dejarme un mensaje?</h3>
      <p>Lo puedes hacer por medio de nuestras redes sociales</p>
      <div className="container-icons-contacto">
        <a
          href="https://www.instagram.com/tiendabotanica.sf/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="icons/instagram.svg" alt="" />
        </a>
        <a href="https://wa.me/+5493425848928" target="_blank" rel="noreferrer">
          <img src="icons/whatsapp.svg" alt="" />
        </a>
      </div>
    </section>
  );
};

export { ContainerContacto };
