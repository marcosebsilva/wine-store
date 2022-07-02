import { NextPage } from "next";
import { PropsWithChildren } from "react";
import TheHeader from "./TheHeader";
import * as Styled from './style';

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return(
    <Styled.Wrapper>
      <TheHeader />
      {children}
    </Styled.Wrapper>
  );
}