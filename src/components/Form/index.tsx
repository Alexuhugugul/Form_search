import React, { FormEvent, useState } from "react";
import { Dropdown } from "../Dropdown";
import {
  StyledContainer,
  StyledContainerInput,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledLabel,
} from "./styled";

export const Form: React.FC = () => {
  const [searchString, setSearchString] = useState<string>("");

  const search = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchString(e.currentTarget.value.toString());
  };

  return (
    <StyledForm>
      <StyledLabel htmlFor="searchInput">Search user</StyledLabel>

      <StyledContainer>
        <StyledContainerInput>
          <StyledImg htmlFor="searchInput" />
          <StyledInput id="searchInput" placeholder="Search" onInput={search} />
        </StyledContainerInput>

        <Dropdown searchString={searchString} />
      </StyledContainer>
    </StyledForm>
  );
};
