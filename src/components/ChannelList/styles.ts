import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 0px 9.5px 24px 16px;

  background-color: var(--secondary);

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 1;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 24px 0 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(FaPlus)`
  width: 14px;
  height: 14px;

  color: var(--symbol);
  cursor: pointer;
`;
