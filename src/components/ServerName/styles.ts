import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;

  background-color: var(--secondary);

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;

export const ExpandIcon = styled(FaChevronDown)`
  width: 14px;
  height: 14px;

  color: var(--white);

  cursor: pointer;
`;
