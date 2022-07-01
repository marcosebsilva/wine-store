import styled from 'styled-components';
import devices from '../../../styles/devices';
import colors from '../../../styles/colors.json';


interface NavMenuProps {
  show: boolean
}

interface NavMenuLinkProps {
  selected: boolean,
}

export const NavMenuContainer = styled.nav<NavMenuProps>`
  opacity: ${(props) => props.show ? '1' : '0'};
  visibility: ${(props) => props.show ? 'visible' : 'hidden'};
  position: absolute;
  z-index: 10;
  background-color: white;
  transition: 200ms;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  @media ${devices.desktopSmall} {
    opacity: 1;
    visibility: visible;
    position: relative;
    width: fit-content;
    margin-right: auto;
  }
`

export const NavMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  gap: 20px;

  @media ${devices.desktopSmall} {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media ${devices.desktopMedium} {
    gap: 40px;
  }
`

export const NavMenuLink = styled.a<NavMenuLinkProps>`
  font-size: 2rem;
  font-family: 'NeoSansStd';
  position: relative;
  color: ${(props) => props.selected ? `${colors['light/tanat']}` : 'black'};
  opacity: 0.8;
  &::after {
    content: '';
    display: ${(props) => props.selected ? 'block' : 'none'};
    text-align: center;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${colors['light/tanat']};
  }

  @media ${devices.desktopSmall} {
    font-size: 1.1rem;
    height: 100%;

    &::after {
      display: block;
      width: ${(props) => props.selected ? '100%' : '0'};
      content: '';
      height: 3px;
      transition: 200ms;
      bottom: -190%;
    }

    &:hover{
      &::after {
        width: 100%;
      }
    }
  }
`

export const ToggleMenuButton = styled.button`
  border: none;
  position: relative;
  z-index: 1000;

  &, &::before, &::after {
    background-color: black;
    height: 5px;
    min-width: 30px;
    border-radius: 2px;

  }
  &::before, &::after {
    left: 0;
    content: '';
    position: absolute;
    display: block;
  }

  &::before {
    top: 9px;
  }

  &::after {
    bottom: 9px;
  }
  @media ${devices.desktopSmall} {
    display: none;
  }
`

export const Wrapper = styled.header`
  display: flex;
  width: 100vw;
  align-items: center;
  background-color: white;
  padding: 5px 20px;
  gap: 15px;
  margin-bottom: 35px;
  
  @media ${devices.desktopSmall} {
    padding: 20px 80px;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.31); 
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.31);
  }
  @media ${devices.desktopMedium} {
    padding: 20px 152px;
  }
`

export const CartLogoContainer = styled.div`
  position: relative;
  min-width: 70px;
  height: 60px;
`

export const CartCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 1.1rem;
  bottom: 0;
  right: 0;
  padding: 5px;
  background-color: white;
  width: 25px;
  color: green;
  font-weight: bold;
  height: 25px;
  border-radius: 50%;
  -webkit-box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.61); 
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.61);
`

export const WineLogoContainer = styled.div`
  position: relative;
  min-width: 80px;
  height: 50px;
  margin-right: auto;
  @media ${devices.desktopSmall} { 
    min-width: 110px;
    height: 100;
  }

`

export const SearchInputContainer = styled.div`
  text-align: right;
  width: 100%;
`

export const SearchInput = styled.input`
  border: none;
  border-radius: 50%;
  padding-right: 15px;
  padding-left: 5px;
  width: 50px;
  height: 50px;
  background-image: url('/icons/glass.svg');
  background-repeat: no-repeat;
  background-position: 95% 50%;
  background-size: 35px;
  transition: 300ms;
  color: rgba(0, 0, 0, 0.8);

  &::placeholder {
    opacity: 0;
  }
  
  &:focus, &:not(:placeholder-shown) {
    border-radius: 10px;
    outline: none;
    width: 100%;
    background-color: #f5f5f5;
    background-image: none;
  }

  @media ${devices.desktopSmall} {
    border: 2px solid black;
    background-position: center ;
    &:focus, &:not(:placeholder-shown) {
      background-image: url('/icons/glass.svg');
      border: none;
      background-position: 95% center;
      background-size: 15px;
    }
  }
`

export const AccountIconContainer = styled.div`
  position: relative;
  display: none;
  @media ${devices.desktopSmall} {
    min-width: 70px;
    height: 60px;
    display: block;
  }
`

export const OptionsSection = styled.section`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 20px;
  @media ${devices.desktopSmall} {
    width: 40%;
  }
`