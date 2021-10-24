import React, { useEffect, useState } from "react";
import { useGetListUsers } from "../../controllers/getListUsers";
import {
  StyledDropdown,
  StyledImg,
  StyledInfo,
  StyledItem,
  StyledNickName,
  StyledUser,
} from "./styled";

export type TDropdown = {
  searchString: string;
};

export const Dropdown: React.FC<TDropdown> = ({ searchString }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setLoadingStatus = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [searchString]);

  const { showList, listUsers } = useGetListUsers(
    searchString,
    setLoadingStatus
  );

  return (
    <StyledDropdown showList={showList} isLoading={isLoading}>
      {showList &&
        listUsers.map((item) => {
          return (
            <StyledItem key={item.id}>
              <StyledImg src={item?.url} alt={item.name} />

              <StyledInfo>
                <StyledUser>{item.name}</StyledUser>
                <StyledNickName>{`@${item.nickname}`}</StyledNickName>
              </StyledInfo>
            </StyledItem>
          );
        })}
    </StyledDropdown>
  );
};
