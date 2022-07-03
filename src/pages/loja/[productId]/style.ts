import styled from "styled-components";
import devices from "../../../styles/devices";
import colors from "../../../styles/colors";
import {Wrapper as BaseCartButtonWrapper} from "../../../components/UI/BaseCartButton/style";
import {Wrapper as BaseCounterWrapper} from "../../../components/UI/BaseCounter/style";
import {Wrapper as ProductInfoWrapper} from "../../../components/ProductPage/ProductInfo/style";
import {Wrapper as RegionDescriptionWrapper} from "../../../components/ProductPage/RegionDescription/style";
import {Wrapper as PriceContainerDesktopWrapper } from "../../../components/ProductPage/PriceContainerDesktop/style";
import {Wrapper as NonMemberPriceWrapper} from "../../../components/UI/NonMemberPrice/style";
import {Wrapper as ProductDescriptionWrapper} from "../../../components/ProductPage/ProductDescription/style";
import Link from "next/link";


export const ProductTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 12px;
`

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  height: 333px;
  width: 218px;
`

export const DesktopButtonsContainer = styled.div`
  display: flex;
  height: 60px;
  ${BaseCartButtonWrapper} {
    border: none;
    border-radius: 0 2px 2px 0;
    transition: 100ms;
    &:active {
      transform: scale(0.99);
    }
  }

  ${BaseCounterWrapper}{
    border-radius: 2px 0 0 2px;
  }
`

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 20px;
  @media ${devices.desktopSmall} {
    display: grid;
    padding-inline: 15vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(7, fit-content);
    grid-template-areas:
      "link link"
      "image region"
      "image title"
      "image info"
      "image price"
      "image description"
      "image buttons";

    ${ImageContainer} {
      grid-area: image;
      margin: auto;
      width: 381px;
      height: 579px;
    }
    ${ProductTitle}{
      grid-area: title;
      text-align: left;
      color: ${colors.gray_darker};
      font-size: 1.75rem;
      margin-bottom: 0;
    }

    ${ProductDescriptionWrapper} {
      grid-area: description;
    }

    ${ProductInfoWrapper } {
      justify-content: left;
      grid-area: info;
      margin-bottom: 0;
    }

    ${RegionDescriptionWrapper} {
      font-weight: bold;
      font-size: 0.875rem;
      justify-content: left;
      grid-area: region;
    }

    ${PriceContainerDesktopWrapper} {
      grid-area: price;
      font-size: 1.5rem;
    }

    ${DesktopButtonsContainer}{
      grid-area: buttons;
      max-width: 300px;
    }

    ${NonMemberPriceWrapper} {
      font-size: 1rem;
      font-weight: bold;
    }
  }
`

export const GoBack = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Arrow = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-top: 1px solid ${colors.gray_lighter};
  border-left: 1px solid ${colors.gray_lighter};
  transform: rotate(-45deg);
`