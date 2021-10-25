import React, { useRef, useState } from "react";
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
  const refInput = useRef<HTMLInputElement>(null);
  const refDropDown = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);

  const search = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchString(e.currentTarget.value.toString());
  };

  const switchToDropDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "ArrowDown") {
      const child = refDropDown.current?.children[0] as HTMLDivElement;
      child.focus();
    }
  };

  const setFullString = (str: string) => {
    setSearchString(str);
    refInput.current?.focus();
  };

  const handlerOnFocus = () => {
    if (searchString.length) {
      setFullString(searchString);
    }
  };

  return (
    <StyledForm>
      <StyledLabel htmlFor="searchInput">Search user</StyledLabel>

      <StyledContainer ref={refContainer}>
        <StyledContainerInput>
          <StyledImg htmlFor="searchInput" />
          <StyledInput
            id="searchInput"
            placeholder="Search"
            onInput={search}
            autoComplete="off"
            tabIndex={0}
            onKeyDown={switchToDropDown}
            ref={refInput}
            value={searchString}
            // onFocus={handlerOnFocus}
          />
        </StyledContainerInput>

        <Dropdown
          searchString={searchString}
          refDropDown={refDropDown}
          refInput={refInput}
          setFullString={setFullString}
          refContainer={refContainer}
        />
      </StyledContainer>
    </StyledForm>
  );
};
