import styled from "styled-components";

export const StyledPage = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
`;
