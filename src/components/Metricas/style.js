import styled from "styled-components";

export const MetricasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 150px;
  background-color: #fff;
  margin-bottom: 33px;
  border-radius: 30px;
  padding: 20px;

  > div {
    height: 100px;
    display: flex;
    align-items: center;

    > div:first-child {
      margin-right: 24px;
    }
  }
`;

export const Metricas = styled.div`
  > p:first-child {
    color: #acacac;
  }
  > p:nth-child(2) {
    font-size: 40px;
    font-weight: bold;
  }

  > div {
    > span {
      color: ${(props) =>
        props.cor === "verde"
          ? "green"
          : props.cor === "verm"
          ? "red"
          : "white"};
    }
  }
`;
