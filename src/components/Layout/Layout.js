import "./Layout.css";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

const Layout = ({ children, headerShow = true }) => {
  return (
    <>
      <MenuMobile />
      {headerShow && <Header />}
      <main>
        <div className="main-section">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export { Layout };
