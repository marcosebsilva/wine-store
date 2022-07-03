import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useMemo } from "react";
import { useCart } from "../../../context/CartContext";
import { useSearch } from "../../../context/SearchContext";
import * as Styled from './style';

const TheHeader: NextPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const { route } = useRouter();
  const navMenuLinks: string[] = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos'];

  const { updateSearch } = useSearch();
  const { items } = useCart();
  const cartCount = useMemo(() => items.reduce((acc, current) => acc + current.quantity, 0), [items]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch({ query: e.target.value });
  }

  return (
    <Styled.Wrapper>
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
        <Styled.NavMenuList>
        {navMenuLinks.map((link, idx) => (
          <li key={`link${idx}`}>
            <Styled.NavMenuLink
              selected={route.includes(link.toLowerCase())}
            >
              {link}
            </Styled.NavMenuLink>
          </li>
        ))}
        </Styled.NavMenuList>
      </Styled.NavMenuContainer>
      <Styled.OptionsSection>
        <Styled.SearchInputContainer>
          <Styled.SearchInput
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
          <Styled.CartCount>{ cartCount }</Styled.CartCount>
        </Styled.CartLogoContainer>
      </Styled.OptionsSection>
    </Styled.Wrapper>
  );
}

export default TheHeader;