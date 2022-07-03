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
  @media ${devices.tablet} {
    width: 100%;
  }
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