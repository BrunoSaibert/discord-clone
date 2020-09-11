import React from "react";

import * as S from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <S.User>
      <S.Avatar />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </S.User>
  );
};

const UserList: React.FC = () => {
  return (
    <S.Container>
      <S.Roler>Disponível - 1</S.Roler>
      <UserRow nickname="Bruno Saibert" />

      <S.Roler>Offline - 1</S.Roler>
      <UserRow nickname="Diego Fernandes" isBot />
    </S.Container>
  );
};

export default UserList;
