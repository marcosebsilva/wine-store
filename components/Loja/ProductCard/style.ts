import styled from 'styled-components';
import devices from '../../../styles/devices';
import colors from '../../../styles/colors'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 8px;
  height: 348px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-width: 156px;
  max-width: 256px;
`
export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  height: 181px;
  text-align: center;
  width: 123px;
  margin: auto;
`
export const DetailsWrapper = styled.section`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const ProductName = styled.h1`
  text-align: center;
  font-weight: bold;
  color: ${colors.gray_darker};
  font-size: 0.875rem;
  /* 14px */
  @media ${devices.desktopSmall} {
    font-size: 1rem;
  }
`
export const Price = styled.s<{dashed: boolean}>`
  position: relative;
  display: inline;
  font-size: 0.625rem;
  /* 10px */
  color: ${colors.blacker};
  &:after {
    content: '';
    display: ${(props) => props.dashed ? 'block' : 'none'};
    width: 100%;
    bottom: 35%;
    position: absolute;
    background-color: ${colors.blacker};
    height: 1px;
  }
  @media ${devices.desktopSmall} {
    font-size: 0.75rem;
    /* 12px */
  }
`
export const DiscountTag = styled.span`
  background-color: ${colors.branding_tavel_default};
  font-size: 0.75rem;
  /* 12px */
  color: white;
  padding: 3px 5px;
  margin-left: 5px;
  border-radius: 2px;
  text-align: center;
  display: inline-block;
`
export const MemberPriceLabel = styled.label`
  font-weight: 300;
  font-size: 0.625rem;
  /* 10px */
  margin-right: 5px;
  color: ${colors.blacker};
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  max-width: 40%;
  white-space: pre-line;

  @media ${devices.desktopSmall} {
    max-width: 100%;
    font-weight: 700;
    color: ${colors.bold_blacker};
    font-size: 0.75rem;
    /* 12px */
  }
`
export const GenericContainer = styled.div`
  display: flex;
  align-items: center;
`
export const NonMemberPriceLabel = styled.label`
  font-size: 0.625rem;
  /* 10px */
  text-transform: uppercase;
  margin-right: 5px;
  color: ${colors.blacker};

  @media ${devices.desktopSmall} {
    font-size: 0.75rem;
    /* 12px */
  }
`
export const CartButton = styled.button`
  width: 100%;
  padding-inline: 47px;
  background-color: ${colors.function_sucess_default};
  color: white;
  padding-top: 12px;
  padding-bottom: 12px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`
export const FlagContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 31px;
  height: 31px;
  @media ${devices.desktopSmall} {
    right: 0;
  }
`