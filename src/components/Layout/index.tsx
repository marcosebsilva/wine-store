import { PropsWithChildren } from "react";
import TheHeader from "./TheHeader";
import * as Styled from './style';
import Cart from "../Cart";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return(
    <Styled.Wrapper>
      <TheHeader />
      <Cart />
      {children}
    </Styled.Wrapper>
  );
}