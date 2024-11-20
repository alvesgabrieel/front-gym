import React from "react";
import { PiUser, PiUsers } from "react-icons/pi";

import * as S from "./style";

const Metricas = () => {
  return (
    <S.MetricasContainer>
      <div>
        <div>
          <PiUser size={90} color="#00AC4F" />
        </div>
        <S.Metricas cor="verde">
          <p>Total de alunos</p>
          <p>17</p>
          <div>
            <span cor="verde">17%</span> Neste mês
          </div>
        </S.Metricas>
      </div>
      <div></div>
      <div>
        <div>
          <PiUsers size={90} color="#00AC4F" />
        </div>
        <S.Metricas cor="verm">
          <p>Alunos</p>
          <p>110</p>
          <div>
            <span cor="verm">1%</span> Neste mês
          </div>
        </S.Metricas>
      </div>
    </S.MetricasContainer>
  );
};

export default Metricas;
