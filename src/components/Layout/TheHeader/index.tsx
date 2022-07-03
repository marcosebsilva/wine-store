import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useMemo, useEffect } from "react";
import { useCart } from "../../../context/CartContext";
import { useSearch } from "../../../context/SearchContext";
import * as Styled from './style';
import { KeyboardEvent } from "react";
import Link from "next/link";
import useScreenSize from "../../../hooks/useScreenSize";
import sizes from "../../../styles/sizes";


const TheHeader: NextPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const { items, toggleCart } = useCart();

  const cartCount = useMemo(() => items.reduce((acc, current) => acc + current.quantity, 0), [items]);
  const { route, push, asPath } = useRouter();
  const navMenuLinks: string[] = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos'];
  const { updateSearch } = useSearch();
  const { width } = useScreenSize();

  const isDesktop = useMemo(() => width !== undefined && width > sizes.desktopSmall, [width])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateSearch({query: input});
      push('/loja');
    }
  }

  useEffect(() => {
    if (isDesktop) return;
    setShowNav(false);
  }, [asPath, isDesktop])

  return (
    <Styled.Wrapper>
      {!isDesktop && <Styled.ToggleMenuButton onClick={() => setShowNav((prev) => !prev)} />}
      <Styled.WineLogoContainer>
        <Image 
          alt="Logotipo principal Wine"
          src="/icons/wine-logo.svg"
          objectFit="contain"
          layout="fill"
        />
      </Styled.WineLogoContainer>
      <Styled.NavMenuContainer show={showNav}>
        <Styled.ToggleMenuButton onClick={() => setShowNav((prev) => !prev)} />
        <Styled.NavMenuList>
        {navMenuLinks.map((link, idx) => (
          <li key={`link${idx}`}>
            <Link href={link.toLowerCase() === 'loja' ? '/loja' : '#'}>
              <Styled.NavMenuLink
                selected={route.includes(link.toLowerCase())}
              >
                {link}
              </Styled.NavMenuLink>
            </Link>
          </li>
        ))}
        </Styled.NavMenuList>
      </Styled.NavMenuContainer>
      <Styled.OptionsSection>
        <Styled.SearchInputContainer>
          <Styled.SearchInput
            placeholder="Pressione enter para pesquisar"
            onChange={handleInputChange}
            value={input}
            onKeyDown={handleKeyDown}
          />
        </Styled.SearchInputContainer>
        {isDesktop && (
          <Styled.AccountIconContainer>
            <Image
              src="/icons/account.svg"
              alt="Wine icon"
              objectFit="contain"
              layout="fill"
            />
          </Styled.AccountIconContainer>
        )}
        <Styled.CartLogoContainer
          onClick={toggleCart}
        >
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