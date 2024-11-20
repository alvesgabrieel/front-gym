import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/sidebar";
import * as S from "./style"; // Importe o estilo

import Header from "../../components/Header";
import Metricas from "../../components/Metricas";

import { HomeContainer, Content, Input } from "../../styles";

const Home = () => {
  // Dados simulados
  const dados = [
    {
      nome: "Floyd Miles",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "floyd@yahoo.com",
      cidade: "Kiribati",
      vencimento: "EM DIAS",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Ronald Richards",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "ronald@adobe.com",
      cidade: "Israel",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "EM DIAS",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "EM DIAS",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "EM DIAS",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
    {
      nome: "Jane Cooper",
      data: "30/10/2024",
      telefone: "(225) 555-0118",
      email: "jane@microsoft.com",
      cidade: "João Câmara",
      vencimento: "VENCEU",
    },
  ];

  // Estado para a página atual e número de itens por página
  const [paginaAtual, setPaginaAtual] = useState(1);
  // const [dados, setDados] = useState([]);
  const registrosPorPagina = 5;

  // >> API - listar usuarios
  // useEffect(() => {
  //   const fetchDados = async () => {
  //     try {
  //       const response = await axios.get("URL_API");
  //       setDados(response.data);
  //     } catch (err) {
  //       console.error("Erro ao buscar os dados", err);
  //     }
  //   };

  //   fetchDados();
  // }, []);

  // Calcula o índice dos registros atuais
  const indiceUltimoRegistro = paginaAtual * registrosPorPagina;
  const indicePrimeiroRegistro = indiceUltimoRegistro - registrosPorPagina;
  const registrosAtuais = dados.slice(
    indicePrimeiroRegistro,
    indiceUltimoRegistro
  );

  // Calcula o número total de páginas
  const totalPaginas = Math.ceil(dados.length / registrosPorPagina);

  // Função para mudar de página
  const mudarPagina = (novaPagina) => {
    setPaginaAtual(novaPagina);
  };

  return (
    <HomeContainer>
      <Sidebar />
      <Content>
        <Header />
        <Metricas />
        <S.MainContent>
          <div>
            <div>
              <h3>TODOS OS ALUNOS</h3>
              <p>Cadastro e status</p>
            </div>
            <div>
              <Input type="text" placeholder="Pesquisar..." bgColor="#f5fbff" />
            </div>
          </div>
          <div>
            <S.TableContainer>
              <S.Table>
                <thead>
                  <tr>
                    <S.TableHeader>NOME COMPLETO</S.TableHeader>
                    <S.TableHeader>DATA DE PAG</S.TableHeader>
                    <S.TableHeader>TELEFONE</S.TableHeader>
                    <S.TableHeader>EMAIL</S.TableHeader>
                    <S.TableHeader>CIDADE</S.TableHeader>
                    <S.TableHeader>VENCIMENTO</S.TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {registrosAtuais.map((cliente, index) => (
                    <tr key={index}>
                      <S.TableData>{cliente.nome}</S.TableData>
                      <S.TableData>{cliente.data}</S.TableData>
                      <S.TableData>{cliente.telefone}</S.TableData>
                      <S.TableData>{cliente.email}</S.TableData>
                      <S.TableData>{cliente.cidade}</S.TableData>
                      <S.TableData vencimento={cliente.vencimento}>
                        <div>{cliente.vencimento}</div>
                        <Link
                          to={{
                            pathname: "/editar",
                          }}
                          state={{ cliente }}
                        >
                          <S.EditIcon className="edit-icon" />{" "}
                          {/* Ícone aqui */}
                        </Link>
                      </S.TableData>
                    </tr>
                  ))}
                </tbody>
              </S.Table>
            </S.TableContainer>
            {/* Controles de Paginação */}
            <S.Pagination>
              {[...Array(totalPaginas)].map((_, index) => (
                <S.PaginationButton
                  key={index}
                  onClick={() => mudarPagina(index + 1)}
                  active={paginaAtual === index + 1}
                >
                  {index + 1}
                </S.PaginationButton>
              ))}
            </S.Pagination>
          </div>
        </S.MainContent>
      </Content>
    </HomeContainer>
  );
};

export default Home;
