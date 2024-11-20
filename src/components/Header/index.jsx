import React from "react";

import * as S from "./style";

import { Input } from "../../styles";

const Header = () => {
  return (
    <S.Header>
      <div>Hello amigo</div>
      <div>
        <Input type="text" placeholder="Pesquisar..." bgColor="#fff" />
      </div>
    </S.Header>
  );
};

export default Header;
