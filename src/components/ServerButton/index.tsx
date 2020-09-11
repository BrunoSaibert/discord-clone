import React from "react";
import { FaRocket } from "react-icons/fa";

import * as S from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <S.Button
      selected={selected}
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
    >
      {isHome && <FaRocket size={24} color="#fff" />}
    </S.Button>
  );
};

export default ServerButton;
