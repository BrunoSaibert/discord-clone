import React from "react";

import ChannelButton from "../ChannelButton";

import * as S from "./styles";

const ChannelList: React.FC = () => {
  return (
    <S.Container>
      <S.Category>
        <span>Canais de texto</span>
        <S.AddCategoryIcon />
      </S.Category>

      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="fall-guys" />
      <ChannelButton channelName="música" />

      <S.Category>
        <span>Canais de texto</span>
        <S.AddCategoryIcon />
      </S.Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="fall-guys" />
      <ChannelButton channelName="música" />
    </S.Container>
  );
};

export default ChannelList;
