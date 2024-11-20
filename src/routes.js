import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Editar from "./pages/Editar";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/editar" element={<Editar />} />
  </Routes>
);

export default Rotas;
