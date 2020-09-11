import styled from "styled-components";
import { FaHashtag, FaUserPlus } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

export const Container = styled.div`
  grid-area: CB;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  margin-bottom: 2px;

  background-color: transparent;
  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;

    > span {
      font-size: 15px;
      margin-left: 5px;
      color: var(--senary);
    }

    &.actions {
      display: none;
    }
  }

  &.active,
  &:hover {
    background-color: var(--quinary);
    > div {
      &.actions {
        display: flex;
      }

      > span {
        color: var(--white);
      }
    }
  }
`;

export const HashIcon = styled(FaHashtag)`
  width: 18px;
  height: 18px;

  color: var(--symbol);
`;

export const InviteIcon = styled(FaUserPlus)`
  width: 16px;
  height: 16px;

  color: var(--symbol);

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  cursor: pointer;
`;

export const SettingsIcon = styled(BsFillGearFill)`
  width: 16px;
  height: 16px;

  margin-left: 5px;

  color: var(--symbol);

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  cursor: pointer;
`;
