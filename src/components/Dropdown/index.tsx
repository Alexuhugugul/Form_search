import React, { useEffect, useState } from "react";
import { StyledDropdown, StyledImg, StyledItem } from "./styled";

type TDropdown = {
  searchString: string;
};

type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type TListDropDown = {
  id: number;
  name: string;
  nickname: string;
};

export const Dropdown: React.FC<TDropdown> = ({ searchString }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [listUsers, setListUsers] = useState<Array<TListDropDown>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((data: Array<TUser>) => {
        setIsLoading(false);
        const list: Array<TListDropDown> = [];
        if (!searchString.length) {
          setListUsers([]);
          return;
        }

        data.forEach((user) => {
          if (
            user.name.toUpperCase().indexOf(searchString.toUpperCase()) !== -1
          ) {
            list.push({
              id: user.id,
              name: user.name,
              nickname: user.username,
            });
          }
        });
        setListUsers(list);
      });
  }, [searchString]);

  return (
    <StyledDropdown isLoading={isLoading}>
      {listUsers.map((item) => {
        return (
          <StyledItem key={item.id}>
            <StyledImg
              src="https://via.placeholder.com/600/24f355"
              alt={item.name}
            />
          </StyledItem>
        );
      })}
    </StyledDropdown>
  );
};
