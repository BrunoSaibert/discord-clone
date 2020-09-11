import styled from "styled-components";

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  flex-direction: column;

  padding: 3px 6px 0 16px;

  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Roler = styled.div``;
export const User = styled.div``;
export const Avatar = styled.div``;
