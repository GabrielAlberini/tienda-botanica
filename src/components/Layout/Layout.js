import { MenuMobile } from "../MenuMobile/MenuMobile";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <MenuMobile />
      <Header />
      <main>
        <div className="main-section">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export { Layout };
