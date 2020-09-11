import React from "react";

import * as S from "./styles";

const UserInfo: React.FC = () => {
  return (
    <S.Container>
      <S.Profile>
        <S.Avatar />

        <S.UserData>
          <strong>Bruno Saibert</strong>
          <span>#4788</span>
        </S.UserData>
      </S.Profile>

      <S.Icons>
        <S.MicrophoneIcons />
        <S.HeadphonesIcons />
        <S.SettingsIcons />
      </S.Icons>
    </S.Container>
  );
};

export default UserInfo;
