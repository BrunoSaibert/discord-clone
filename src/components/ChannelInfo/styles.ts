import styled from "styled-components";
import { FaHashtag } from "react-icons/fa";

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;

  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
`;

export const HashTagIcon = styled(FaHashtag)`
  width: 22px;
  height: 22px;

  color: var(--symbol);
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;

  margin-left: 9px;

  color: var(--white);
`;

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;
`;

export const Description = styled.span`
  font-size: 15px;
  font-weight: bold;

  color: var(--gray);
`;
