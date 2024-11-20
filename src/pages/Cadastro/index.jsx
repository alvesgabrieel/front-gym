import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate

import Sidebar from "../../components/sidebar";

import { HomeContainer, Content } from "../../styles";
import Header from "../../components/Header";
import Metricas from "../../components/Metricas";
import * as S from "./style";

const Cadastro = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleCancel = () => {
    navigate("/home"); // Redireciona para a rota "home"
  };

  return (
    <HomeContainer>
      <Sidebar />
      <Content>
        <Header />
        <Metricas />
        <S.MainContent>
          <div>
            <h3>CADASTRO DE ALUNOS</h3>
            <p>Informe os dados necessários</p>
          </div>
          <S.FormContainer>
            <S.InputGroup>
              <S.Label htmlFor="nome">NOME COMPLETO</S.Label>
              <S.Input type="text" id="nome" placeholder="Jane Cooper ahmed" />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="datapag">DATA DE PAG</S.Label>
              <S.Input type="text" id="datapag" placeholder="30/01/2024" />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="phone">TELEFONE</S.Label>
              <S.Input
                type="phone"
                id="phone"
                placeholder="(55) 84 9.91924-2342"
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label htmlFor="email">EMAIL</S.Label>
              <S.Input
                type="email"
                id="email"
                placeholder="jane@microsoft.com"
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label htmlFor="cidade">CIDADE</S.Label>
              <S.Input type="text" id="cidade" placeholder="João Câmara" />
            </S.InputGroup>
          </S.FormContainer>
          <S.BtnsContainer>
            <S.SubmitButton cor="verde" type="submit">
              Salvar
            </S.SubmitButton>
            <S.SubmitButton cor="preto" type="button" onClick={handleCancel}>
              Cancelar
            </S.SubmitButton>
          </S.BtnsContainer>
        </S.MainContent>
      </Content>
    </HomeContainer>
  );
};

export default Cadastro;
