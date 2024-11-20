import styled from "styled-components";

export const MainContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 30px;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    > h3 {
      font-family: "Protest Guerrilla", sans-serif;
      font-weight: 400;
      font-style: normal;
      color: #929292;
      font-size: 34px;
    }

    > p {
      color: #7ed957;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-start; /* Alinha os itens ao topo para que os labels fiquem em cima */
  gap: 20px;
  width: 100%;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column; /* Alinha o label e o input verticalmente */
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #00ac4f;
  border-radius: 5px;
  width: 250px;
`;

export const SubmitButton = styled.button`
  margin-top: 50px;
  padding: 10px 20px;
  background-color: ${(props) =>
    props.cor === "verde"
      ? "green"
      : props.cor === "preto"
      ? "black"
      : "white"};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #008a3e;
  }
`;

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`;
