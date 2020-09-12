import styled from "styled-components";
import { SiMailDotRu } from "react-icons/si";

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: var(--primary);

  padding-right: 4px;
  padding-top: 4px;
`;

export const Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 50px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
    border-radius: 4px;
  }
`;

export const InputWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 68px;
`;

export const InputBackground = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--chat-input);

  border-radius: 7px;

  padding: 10px;
  margin: 0 10px;

  /* height: 50px; */
  /* width: 100%;

  padding: 0 16px; */
`;

export const Input = styled.input`
  flex: 1;

  color: var(--white);
  background-color: var(--chat-input);

  margin-left: 10px;

  /* width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);

  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 17px;
    transition: 180ms ease-in-out;
  } */
`;

export const InputIcon = styled(SiMailDotRu)`
  flex: 0 0 30px;

  width: 20px;
  height: 20px;
  color: var(--gray);
`;
