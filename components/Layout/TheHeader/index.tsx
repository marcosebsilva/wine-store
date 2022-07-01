import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useSearch } from "../../../context/SearchContext";
import * as Styled from './style';

const TheHeader: NextPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const itemsInCart = 5;
  const { route } = useRouter();
  const navMenuLinks: string[] = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos'];

  const { updateSearch } = useSearch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch({ query: e.target.value });
  }

  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.ToggleMenuButton
          onClick={() => setShowNav((prev) => !prev)}
        />
        <Styled.WineLogoContainer>
          <Image 
            alt="Logotipo principal Wine"
            src="/icons/wine-logo.svg"
            objectFit="contain"
            layout="fill"
          />
        </Styled.WineLogoContainer>
        <Styled.NavMenuContainer show={showNav}>
          <ul>
          {navMenuLinks.map((link, idx) => (
            <li key={`link${idx}`}>
              <Styled.NavMenuLink
                selected={route === `/${link.toLowerCase()}`}
              >
                {link}
              </Styled.NavMenuLink>
            </li>
          ))}
          </ul>
        </Styled.NavMenuContainer>
        <Styled.OptionsSection>
          <Styled.SearchInputContainer>
            <input
              placeholder="null"
              onChange={handleInputChange}
            />
          </Styled.SearchInputContainer>
          <Styled.AccountIconContainer>
            <Image
              src="/icons/account.svg"
              alt="Wine icon"
              objectFit="contain"
              layout="fill"
            />
          </Styled.AccountIconContainer>
          <Styled.CartLogoContainer>
            <Image
              src="/icons/wine-cart.svg"
              alt="Wine icon"
              objectFit="contain"
              layout="fill"
            />
            <div>{ itemsInCart }</div>
          </Styled.CartLogoContainer>
        </Styled.OptionsSection>
      </Styled.HeaderWrapper>
    </>
  );
}

export default TheHeader;