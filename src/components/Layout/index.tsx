import React from "react";

import * as S from "./styles";

import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";

const Layout: React.FC = () => {
  return (
    <S.Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
    </S.Grid>
  );
};

export default Layout;
