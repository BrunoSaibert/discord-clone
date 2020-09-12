import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import * as S from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  });

  return (
    <S.Container>
      <S.Messages ref={messagesRef}>
        <ChannelMessage
          author="Diego Fernandes"
          date="12/09/2020"
          content={
            <>
              <Mention>@Bruno Saibert</Mention>, parabens
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Bruno Saibert"
          date="12/09/2020"
          content={
            <>
              <Mention>@Diego Fernandes</Mention>, parabens
            </>
          }
        />
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Bruno Saibert"
            date="12/09/2020"
            content="Feliz dia do DEV"
          />
        ))}
        <ChannelMessage
          author="Diego Fernandes"
          date="12/09/2020"
          content={
            <>
              <Mention>@Bruno Saibert</Mention>, parabens
            </>
          }
          hasMention
          isBot
        />
      </S.Messages>

      <S.InputWarpper>
        <S.InputBackground>
          <S.InputIcon />

          <S.Input type="text" placeholder="Conversar em #chat-livre" />
        </S.InputBackground>
      </S.InputWarpper>
    </S.Container>
  );
};

export default ChannelData;
