import React from "react";

import * as S from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <S.User>
      <S.Avatar className={isBot ? "bot" : ""} />
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

      <S.Roler>Bot - 1</S.Roler>
      <UserRow nickname="Diego Fernandes" isBot />

      <S.Roler>Offline - 10</S.Roler>
      <UserRow nickname="Pessoa com um nome extremamente grande" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
    </S.Container>
  );
};

export default UserList;
