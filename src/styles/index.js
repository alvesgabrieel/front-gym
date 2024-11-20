import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
    list-style: none;
}`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row; /* Alinha a sidebar e o conteúdo principal lado a lado */
  height: 100vh; /* Garante que ocupe a altura total da tela */
`;

export const Content = styled.div`
  flex-grow: 1; /* Faz com que o conteúdo principal ocupe o espaço restante */
  padding: 50px 120px;
  background-color: #f5fbff; /* Cor de fundo para diferenciar da sidebar */
  margin-left: 364px; /* Garante que o conteúdo não fique embaixo da sidebar */
  overflow-y: auto;
`;

export const Input = styled.input`
  padding: 14px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  width: 200px; /* Definindo largura */
  outline: none;
  background-color: ${(props) => props.bgColor || "white"};

  &:focus {
    border-color: #5932ea; /* Cor de borda ao focar */
  }
`;

export default EstiloGlobal;
