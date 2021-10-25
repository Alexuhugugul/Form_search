import Api from "../../utils/api";
import { useEffect, useState } from "react";
import useDebounce from "../../utils/debounce";
import { TAlbum, TListDropDown, TUser } from "./types";
import { useComponentVisible } from "../../utils/useComponentVisible";

export const useGetListUsers = (
  searchString: string,
  setLoadingStatus: () => void,
  refDropDown: React.RefObject<HTMLDivElement>
) => {
  const [showList, setShowList] = useState(false);
  const [listUsers, setListUsers] = useState<Array<TListDropDown>>([]);

  useComponentVisible(() => {
    setShowList(false);
  }, refDropDown);

  const debouncedValue = useDebounce<string>(searchString, 1000);

  useEffect(() => {
    if (!searchString.length) {
      setLoadingStatus();
      setListUsers([]);
    }

    const getData = async () => {
      const list = (await getUsersData(searchString)) as TListDropDown[];

      if (list) {
        setShowList(true);
        const currentList = await getUsersImage(list);

        if (currentList) {
          console.log(currentList);
          setLoadingStatus();
        }
        setListUsers(currentList);
      }
    };

    getData();
  }, [debouncedValue]);

  return { showList, listUsers };
};

export const getUsersData = (
  searchString: string
): Promise<TListDropDown[] | undefined> => {
  return Api<Array<TUser>>(`${process.env.REACT_APP_URL_USER}`).then(
    (data: Array<TUser>) => {
      const list: Array<TListDropDown> = [];

      if (!searchString.length) {
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
      return list;
    }
  );
};

export const getUsersImage = (
  list: TListDropDown[]
): Promise<TListDropDown[]> => {
  return Promise.all(
    list!.map((item) => {
      return Api<TAlbum>(`${process.env.REACT_APP_URL_PHOTOS}/${item.id}`).then(
        (data: TAlbum) => {
          return {
            ...item,
            url: data.url,
          };
        }
      );
    })
  );
};
