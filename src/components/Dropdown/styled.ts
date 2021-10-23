import styled, { css, keyframes } from "styled-components";
import loadImg from "../../assets/image/rectangle.png";

const rotate = keyframes`
  from {
    transform: rotate(5deg);
    }

  to {
    transform: rotate(360deg);
    }
`;

const showDropDown = keyframes`
  0% {
    height: 0;
    opacity:0;
    }

  40%{
      opacity: 0;
    }

  100% {
    opacity:1;
    height: 100%;
    }
`;

export const StyledDropdown = styled.div<{ showList: boolean }>`
  background: ${({ theme }) => theme.white};
  position: relative;
  border-radius: 0px 0px 8px 8px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background: transparent;
  }
  opacity: 0;

  animation: ${showDropDown} 4s;
  ${({ showList }) =>
    showList &&
    css`
      max-height: 213px;
      width: 100%;
      opacity: 1;
      /* &::before {
        content: "";
        width: 76px;
        height: 76px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-image: url(${loadImg});
        animation: ${rotate} 1.5s infinite;
      } */
    `}
`;

export const StyledItem = styled.div`
  /* height: 40px; */
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;

  &:first-child {
    padding-top: 16px;
  }

  &:last-child {
    padding-bottom: 16px;
  }
`;

export const StyledImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const StyledInfo = styled.div``;

export const StyledUser = styled.p`
  font-size: 14px;
`;

export const StyledNickName = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
`;
