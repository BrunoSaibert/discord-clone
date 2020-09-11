import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    display: ${(props) => (props.hasNotifications ? "inline" : "none")};

    width: 9px;
    height: 9px;
    border-radius: 50%;

    position: absolute;
    top: calc(50% - 4.5px);
    left: -17px;

    background-color: var(--white);
  }

  &::after {
    content: "${(props) => props.mentions}";
    display: ${(props) => (props.mentions ? "inline" : "none")};

    width: auto;
    height: 16px;
    padding: 0 4px;
    border-radius: 12px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    background-color: var(--notification);
    border: 4px solid var(--tertiary);

    text-align: right;
    font-size: 13px;
    flex-wrap: bold;
    color: var(--white);
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
