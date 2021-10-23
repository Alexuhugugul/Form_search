import { DefaultTheme, CSSProp } from "styled-components";

type Styled = CSSProp | { [key: string]: string };

declare module "react" {
  export interface HTMLAttributes<T> {
    styled?: Styled;
  }
}
declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    background: string;
    white: string;
    colorInput: string;
    borderColor: string;
    gray: string;
  }
}

export const lightTheme: DefaultTheme = {
  primary: "#36343D",
  background: "#E5E5E5",
  white: "#fff",
  colorInput: "#F9F9F9",
  borderColor: "#262626",
  gray: "#98999A",
};
