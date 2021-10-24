import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
  border: 0;

  &:first-child {
    padding-top: 16px;
  }

  &:last-child {
    padding-bottom: 16px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 0px 0px 8px 8px;
  }
`;

export const StyledImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 8px;
  user-select: none;
`;

export const StyledInfo = styled.div``;

export const StyledUser = styled.p`
  font-size: 14px;
`;

export const StyledNickName = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
`;
