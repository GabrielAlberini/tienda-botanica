import "./Bio.css";

const Bio = () => {
  return (
    <>
      <section className="main-tienda-botanica">
        <div className="container-bio">
          <p>
            Soy Eugenia, disfruto mucho de estar cerca de la naturaleza, los
            ambientes relajados y las plantas. Por eso, me zambullí a emprender
            en este ámbito que me sorprende día a día con colores y raíces. Te
            invito a que descubras tu fuerza natural.
          </p>
          <div className="container-img-tienda">
            <img
              className="img-tienda"
              src="https://i.ibb.co/F7VfhTM/euge.jpg"
              alt="foto de euge"
            />
          </div>
        </div>
        <div className="container-bio">
          <div className="container-img-tienda">
            <img
              className="img-tienda"
              src="https://i.ibb.co/ftG7fwT/fausto.jpg"
              alt="foto de fausto"
            />
          </div>
          <p>
            Soy Fausto, licenciado en marketing. Donde más vivo me siento, es en
            contacto con la naturaleza y su fuerza. Me encantan las plantas,
            trabajar con ellas es un aprendizaje continuo de crecimiento.
          </p>
        </div>
        {/* <div className="container-descripcion">
          <p>
            En este blog recopilamos experimentos y reflexiones sobre ecología,
            derechos de los animales, feminismo, consumo responsable,
            creatividad, educación, medio ambiente, salud mental, colaboración,
            activismo y cualquier tema que sienta que me ayuda a entender mejor
            mi relación con la Tierra y con todos los otros seres que la
            conforman. Podría decir que este blog es algo así como mi cuaderno
            de observación de la vida en la Tierra.
          </p>
          <p>
            Todo lo que compartimos aquí se nutre y es posible gracias a un
            grupo de personas que se han animado a aprender junto a nosotros, y
            que hacen posible nuestro trabajo a través de mi comunidad de
            Patreon ♡
          </p>
        </div> */}
      </section>
      <section className="container-txt-lema">
        <p>
          Juntos hacemos Tienda Botánica, un emprendimiento litoraleño.
          Trabajamos y promovemos el vínculo con la fuerza natural de las
          plantas, para eso creamos una red comercial local, de las cual nos
          proveemos, mayormente, de emprendedorxs de la ciudad de Santa Fe.
          Nuestra Tienda se encuentra en B Candioti, en la capital santafesina.
          Donde ofrecemos nuestros productos y servicios en jardinería, siempre
          brindando cuidado a la naturaleza. Te invitamos a que seas parte!
        </p>
      </section>
      <section className="container-contacto-bio">
        <p>Si deseas saber más sobre Tienda Botánica visítanos en Instagram</p>
        <a
          className="btn-general"
          href="https://www.instagram.com/tiendabotanica.sf/"
          rel="noreferrer"
          target="_blank"
        >
          Visitar Instagram
        </a>
      </section>
    </>
  );
};

export { Bio };
