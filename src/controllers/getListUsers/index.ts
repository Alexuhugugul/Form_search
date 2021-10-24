import Api from "../../utils/api";
import { useEffect, useState } from "react";
import useDebounce from "../../utils/debounce";
import { TAlbum, TListDropDown, TUser } from "./types";

export const useGetListUsers = (
  searchString: string,
  setLoadingStatus: () => void
) => {
  const [showList, setShowList] = useState(false);
  const [listUsers, setListUsers] = useState<Array<TListDropDown>>([]);

  const debouncedValue = useDebounce<string>(searchString, 1000);

  useEffect(() => {
    Api<Array<TUser>>(`${process.env.REACT_APP_URL_USER}`)
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
            return fetch(`${process.env.REACT_APP_URL_PHOTOS}/${item.id}`)
              .then((data) => data.json())
              .then((data: TAlbum) => {
                return {
                  ...item,
                  url: data.url,
                };
              });
          })
        ).then((data) => {
          setLoadingStatus();
          setListUsers(data);
        });
      });
  }, [debouncedValue]);

  return { showList, listUsers };
};
