import React from "react";

import * as S from "./styles";

interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <S.Container className={selected ? "active" : ""}>
      <div>
        <S.HashIcon />

        <span>{channelName}</span>
      </div>

      <div className="actions">
        <S.InviteIcon />

        <S.SettingsIcon />
      </div>
    </S.Container>
  );
};

export default ChannelButton;
