import React from "react";
// import { useNavigate } from "react-router-dom"; // Importando useNavigate
import { FaHome } from "react-icons/fa";
import { AiFillFund } from "react-icons/ai";

import * as S from "./style";

const Sidebar = () => {
  //   const navigate = useNavigate() // Hook para navegação

  //   const handleLogout = () => {
  //     localStorage.removeItem('token') // Remove o token do localStorage
  //     navigate('/login')
  //  }

  return (
    <div>
      <S.SidebarContainer>
        <S.Version>
          <div>
            <S.TextVersion>
              2KFIT APP<span>V01</span>
            </S.TextVersion>
          </div>
        </S.Version>

        <S.MenuItem to="/home">
          <FaHome size={24} style={{ marginRight: "10px" }} /> Home
        </S.MenuItem>
        <S.MenuItem to="/cadastro">
          <AiFillFund size={24} style={{ marginRight: "10px" }} /> Cadastrar
          Alunos
        </S.MenuItem>

        <S.LogoutContainer>
          <S.LogoutButton>Sair</S.LogoutButton>
        </S.LogoutContainer>
      </S.SidebarContainer>
    </div>
  );
};

export default Sidebar;
