import { useRef } from "react";
import { TListDropDown } from "../../controllers/getListUsers/types";
import {
  StyledImg,
  StyledInfo,
  StyledItem,
  StyledNickName,
  StyledUser,
} from "./styled";

export type TItem = {
  item: TListDropDown;
  refInput: React.RefObject<HTMLInputElement>;
  setFullString: (str: string) => void;
};

export const Item: React.FC<TItem> = ({ item, refInput, setFullString }) => {
  const refItem = useRef<HTMLDivElement>(null);

  const handlerOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "ArrowDown") {
      const nextElement = refItem.current?.nextSibling as HTMLDivElement;
      if (nextElement) {
        nextElement.focus();
      } else {
        refInput.current?.focus();
      }
    }

    if (event.code === "ArrowUp") {
      const prevElement = refItem.current?.previousSibling as HTMLDivElement;
      if (prevElement) {
        prevElement.focus();
      } else {
        refInput.current?.focus();
      }
    }

    if (event.code === "Enter") {
      setFullString(item.name);
    }
  };

  const handlerOnClick = () => {
    setFullString(item.name);
  };

  return (
    <StyledItem
      tabIndex={0}
      ref={refItem}
      onKeyDown={handlerOnKeyDown}
      onClick={handlerOnClick}
    >
      <StyledImg src={item?.url} alt={item.name} />

      <StyledInfo>
        <StyledUser>{item.name}</StyledUser>
        <StyledNickName>{`@${item.nickname}`}</StyledNickName>
      </StyledInfo>
    </StyledItem>
  );
};
