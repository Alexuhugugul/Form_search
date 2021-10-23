import React, { useEffect, useState } from "react";
import Api from "../../utils/api";
import useDebounce from "../../utils/debounce";
import debounce from "../../utils/debounce";
import {
  StyledDropdown,
  StyledImg,
  StyledInfo,
  StyledItem,
  StyledNickName,
  StyledUser,
} from "./styled";

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

type TAlbum = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type TListDropDown = {
  id: number;
  name: string;
  nickname: string;
  url?: string;
};

export const Dropdown: React.FC<TDropdown> = ({ searchString }) => {
  const [showList, setShowList] = useState(false);
  const debouncedValue = useDebounce<string>(searchString, 1000);
  const [listUsers, setListUsers] = useState<Array<TListDropDown>>([]);

  useEffect(() => {
    const fun = () => {
      console.log("deb");
      Api<Array<TUser>>("https://jsonplaceholder.typicode.com/users")
        .then((data: Array<TUser>) => {
          const list: Array<TListDropDown> = [];
          if (!searchString.length) {
            return;
          }
          data.forEach((user) => {
            if (
              user.name.toUpperCase().indexOf(searchString.toUpperCase()) !== -1
            ) {
              setShowList(true);
              list.push({
                id: user.id,
                name: user.name,
                nickname: user.username,
              });
            }
          });
          return list;
        })
        .then((list = []) => {
          return Promise.all(
            list!.map((item) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/photos/${item.id}`
              )
                .then((data) => data.json())
                .then((data: TAlbum) => {
                  return {
                    ...item,
                    url: data.url,
                  };
                });
            })
          ).then((data) => {
            setListUsers(data);
          });
        });
    };
    fun();
  }, [debouncedValue]);

  return (
    <StyledDropdown showList={showList}>
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
