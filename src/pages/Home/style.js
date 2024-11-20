import styled from "styled-components";
import { FaPen } from "react-icons/fa"; // Ícone de edição

export const MainContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 30px;

  div:first-child {
    display: flex;
    justify-content: space-between;

    > div {
      flex-direction: column;

      > h3 {
        font-family: "Protest Guerrilla", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #929292;
        font-size: 34px;
      }

      > P {
        color: #16c098;
      }
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  text-align: left;
  border-collapse: separate;
  border-spacing: 10px 15px;
`;

export const TableHeader = styled.th`
  color: #b5b7c0;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 1px solid #efefef;
`;

export const TableData = styled.td`
  padding: 12px 15px;
  font-size: 16px;
  position: relative;

  &:hover .edit-icon {
    opacity: 1; /* Ícone visível ao passar o mouse */
  }

  &:last-child {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      background-color: none;
      background-color: ${(props) =>
        props.vencimento === "VENCEU"
          ? "#FFC5C5"
          : props.vencimento === "EM DIAS"
          ? "#6afbd9"
          : "blue"};
      border-radius: 6px;
      border: ${(props) =>
        props.vencimento === "VENCEU"
          ? "3px solid #DF0404"
          : props.vencimento === "EM DIAS"
          ? "3px solid #008767"
          : "blue"};
      color: ${(props) =>
        props.vencimento === "VENCEU"
          ? "#DF0404"
          : props.vencimento === "EM DIAS"
          ? "#008767"
          : "blue"};
      padding: 10px;
    }
  }
`;

export const EditIcon = styled(FaPen)`
  position: absolute;
  top: -5px; /* Posiciona o ícone levemente acima da div */
  right: 14px; /* Posiciona o ícone à direita */
  cursor: pointer;
  background-color: #cccccc; /* Fundo cinza */
  padding: 5px; /* Espaçamento ao redor do ícone */
  border-radius: 50%; /* Borda arredondada */
  font-size: 40px; /* Tamanho do ícone aumentado */
  z-index: 1; /* Garante que o ícone fique sobre a div */
  opacity: 0; /* O ícone fica invisível até o hover */
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1; /* Mostra o ícone ao passar o mouse */
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#5932ea" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5932ea;
    color: #fff;
  }
`;
