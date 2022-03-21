import "./Bio.css";

const Bio = () => {
  return (
    <>
      <section className="main-tienda-botanica">
        <div className="container-bio">
          <p>
            Me llamo Eugenia y me dedico a aprender, experimentar y compartir
            herramientas para cuidar el planeta que somos. A través de mi
            trabajo quiero hacerle el camino más fácil a quienes también quieren
            observar, cuestionar y regenerar su relación con la Tierra ♡
          </p>
          <p>
            Mi nombre es Fausto y me encanta aprender cosas nuevas.
            Constantemente estoy redeado de gente muy linda y de las cuales
            aprendo a cada paso. Mi gran pasión son las plantas y los animales.
            Creo que estamos juntos en este mundo con la misión de poder
            convivir y aprender a través del amor.
          </p>
        </div>
        <div className="container-imagenes-tienda">
          <div className="container-img-tienda">
            <img
              className="img-tienda"
              src="https://i.ibb.co/F7VfhTM/euge.jpg"
              alt="foto de euge"
            />
          </div>
          <div className="container-img-tienda">
            <img
              className="img-tienda"
              src="https://i.ibb.co/ftG7fwT/fausto.jpg"
              alt="foto de fausto"
            />
          </div>
        </div>
        <div className="container-descripcion">
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
        </div>
      </section>
      <section className="container-txt-lema">
        <p>
          Si te parece que es una afirmación muy radical… ¡me alegra! Radical
          significa “perteneciente o relativo a la raíz”, así que estando en el
          contexto que estamos, pocas cosas me parecen más apropiadas que
          volvernos radicales, ir a la raíz de los asuntos y tratar de
          entenderlos a fondo, para poder empezar a cambiarlos desde ahí, y no
          quedarnos solamente distraídas mirando la superficie.
        </p>
      </section>
      <section className="container-contacto-bio">
        <p>
          Si quieres saber más sobre otras facetas sobre nuestro trabajo puedes visitar:
        </p>
        <a className="btn-general"
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
