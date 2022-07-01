import { NextPage } from "next";
import { PropsWithChildren } from "react";
import TheHeader from "./TheHeader";

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return(
    <>
      <TheHeader />
      {children}
    </>
  );
}