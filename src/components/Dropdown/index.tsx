import React, { useEffect, useState } from "react";
import { useGetListUsers } from "../../controllers/getListUsers";
import { Item } from "../Item";
import { StyledDropdown } from "./styled";

export type TDropdown = {
  searchString: string;
  refDropDown: React.RefObject<HTMLDivElement>;
  refInput: React.RefObject<HTMLInputElement>;
  setFullString: (str: string) => void;
};

export const Dropdown: React.FC<TDropdown> = ({
  searchString,
  refDropDown,
  refInput,
  setFullString,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setLoadingStatus = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [searchString]);

  const { showList, listUsers } = useGetListUsers(
    searchString,
    setLoadingStatus,
    refDropDown
  );

  return (
    <StyledDropdown showList={showList} isLoading={isLoading} ref={refDropDown}>
      {showList &&
        listUsers.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              refInput={refInput}
              setFullString={setFullString}
            />
          );
        })}
    </StyledDropdown>
  );
};
