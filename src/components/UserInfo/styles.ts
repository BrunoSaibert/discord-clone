import styled from "styled-components";
import { FaMicrophone, FaHeadphones } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  background-color: var(--quaternary);

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-left: 8px;

  > strong {
    color: var(--white);
    font-size: 13px;
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 2px;
  }
`;

export const MicrophoneIcons = styled(FaMicrophone)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 4px;

  padding: 6px;

  color: var(--white);
  opacity: 0.7;

  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    background-color: var(--quinary);
    opacity: 1;
  }
`;

export const HeadphonesIcons = styled(FaHeadphones)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 4px;

  padding: 6px;

  color: var(--white);

  opacity: 0.7;

  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    background-color: var(--quinary);
    opacity: 1;
  }
`;

export const SettingsIcons = styled(BsFillGearFill)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 4px;

  padding: 6px;

  color: var(--white);
  opacity: 0.7;

  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    background-color: var(--quinary);
    opacity: 1;
  }
`;
