import styled from "styled-components";
import searchImg from "../../assets/image/search.png";

export const StyledForm = styled.div`
  max-width: 400px;
  margin-top: 15%;
`;

export const StyledInput = styled.input`
  height: 56px;
  width: 343px;
  border: none;
  background: ${({ theme }) => theme.colorInput};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px 6px 0px 0px;
  padding-left: 56px;
  font-size: 16px;
  outline: none;
`;

export const StyledLabel = styled.label``;

export const StyledContainerInput = styled.div`
  position: relative;
  margin-top: 10px;
`;

export const StyledImg = styled.label`
  &::before {
    content: "";
    width: 17px;
    height: 17px;
    position: absolute;
    top: 19px;
    left: 19px;
    background-image: url(${searchImg});
  }
`;

export const StyledContainer = styled.div``;
