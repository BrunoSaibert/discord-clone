import React from "react";

import * as S from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <S.Container>
      <S.HashTagIcon />

      <S.Title>chat-livre</S.Title>

      <S.Separator />

      <S.Description>Canal aberto para conversas</S.Description>
    </S.Container>
  );
};

export default ChannelInfo;
