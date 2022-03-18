import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuLogin } from "../views/Admin/MenuLogin";
import { Inicio } from '../views/Inicio'
import { TiendaBotanica } from '../views/TiendaBotanica'
import { Contacto } from '../views/Contacto'
import { NotFound } from '../views/NotFound'

const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda-botanica" element={<TiendaBotanica />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin" element={<MenuLogin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export { Router };
