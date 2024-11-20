import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importa o hook useNavigate
import axios from "axios";

import Sidebar from "../../components/sidebar";

import { HomeContainer, Content } from "../../styles";
import Header from "../../components/Header";
import Metricas from "../../components/Metricas";
import * as S from "./style";

const Editar = () => {
  const navigate = useNavigate(); // Hook para navegação
  const { state } = useLocation();
  const { cliente } = state || {};

  const [nome, setNome] = useState(cliente?.nome || "");
  const [dataPag, setDataPag] = useState(cliente?.data || "");
  const [telefone, setTelefone] = useState(cliente?.telefone || "");
  const [email, setEmail] = useState(cliente?.email || "");
  const [cidade, setCidade] = useState(cliente?.cidade || "");

  const handleCancel = () => {
    navigate("/home"); // Redireciona para a rota "home"
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const updateCliente = {
      nome,
      data: dataPag,
      telefone,
      email,
      cidade,
    };

    try {
      await axios.put(
        `http://seu-backend.com/clientes/${cliente.id}`,
        updateCliente
      );
    } catch (err) {
      console.error("Erro ao atualizar o cliente", err);
    }
  };

  return (
    <HomeContainer>
      <Sidebar />
      <Content>
        <Header />
        <Metricas />
        <S.MainContent>
          <div>
            <h3>EDITAR ALUNO</h3>
            <p>Informe os dados necessários</p>
          </div>
          <S.FormContainer onSubmit={handleSave}>
            <S.InputGroup>
              <S.Label htmlFor="nome">NOME COMPLETO</S.Label>
              <S.Input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome Completo"
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="datapag">DATA DE PAG</S.Label>
              <S.Input
                type="text"
                id="datapag"
                value={dataPag}
                onChange={(e) => setDataPag(e.target.value)}
                placeholder="Data de pagamento"
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="phone">TELEFONE</S.Label>
              <S.Input
                type="phone"
                id="phone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone"
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="email">EMAIL</S.Label>
              <S.Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="cidade">CIDADE</S.Label>
              <S.Input
                type="text"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Cidade"
              />
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

export default Editar;
