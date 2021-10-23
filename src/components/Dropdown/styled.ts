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

export const StyledDropdown = styled.div<{ isLoading: boolean }>`
  max-height: 222px;
  background: ${({ theme }) => theme.white};
  position: relative;
  border-radius: 0px 0px 8px 8px;
  overflow-y: auto;
  /* opacity: 0; */

  animation: ${showDropDown} 4s;
  ${({ isLoading }) =>
    isLoading &&
    css`
      width: 100%;
      height: 222px;
      opacity: 1;
      &::before {
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
      }
    `}
`;

export const StyledItem = styled.div`
  /* height: 40px; */
  padding: 16px;
`;

export const StyledImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;
