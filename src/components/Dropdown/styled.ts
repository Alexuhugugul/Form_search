import styled, { css, keyframes } from "styled-components";
import { TStyledDropdown } from ".";
import loadImg from "../../assets/image/rectangle.png";

const rotate = keyframes`
  from {
    transform: rotate(5deg);
    }

  to {
    transform: rotate(360deg);
    }
`;

export const StyledDropdown = styled.div<TStyledDropdown>`
  background: ${({ theme }) => theme.white};
  position: relative;
  border-radius: 0px 0px 8px 8px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background: transparent;
  }
  opacity: 0;

  ${({ isLoading }) =>
    isLoading &&
    css`
      height: 213px;
      width: 100%;
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

  ${({ showList }) =>
    showList &&
    css`
      max-height: 213px;
      width: 100%;
      opacity: 1;
    `}
`;
