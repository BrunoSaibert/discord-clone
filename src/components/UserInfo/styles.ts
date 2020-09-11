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
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const MicrophoneIcons = styled(FaMicrophone)``;

export const HeadphonesIcons = styled(FaHeadphones)``;

export const SettingsIcons = styled(BsFillGearFill)``;
