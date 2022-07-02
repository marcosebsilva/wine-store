import styled from "styled-components";
import devices from "../../../styles/devices";

export const Wrapper = styled.section`
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(156px, max-content));
  gap: 24px 27px;
  margin-bottom: 20px;

  @media ${devices.mobileSmall} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.desktopSmall} {
    grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
  }
`
export const ResultCount = styled.p`
  margin-bottom: 32px;
  font-size: 1.13rem;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background-color: rgba(213, 213, 213, 1);
  }
  @media ${devices.desktopSmall} {
    &::after{
      display: none;
    }
  }
`