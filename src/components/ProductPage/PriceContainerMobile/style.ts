import styled from "styled-components";
import {Wrapper as BasePriceWrapper} from "../../UI/BasePrice/style";
import {Wrapper as DiscountTagWrapper} from "../../UI/DiscountTag/style";
import {Decimals as BaseMemberPriceDecimals, Integer as BaseMemberPriceInteger} from "../../UI/BaseMemberPrice/style";
import {Wrapper as BaseCartButtonWrapper} from "../../UI/BaseCartButton/style";
import colors from "../../../styles/colors";
import devices from "../../../styles/devices";

export const Wrapper = styled.div`
  position: fixed;
  padding: 15px 18px;
  justify-content: space-between;
  display: flex;
  bottom: 0;
  height: 80px;
  background-color: white;
  width: 100%;
  ${DiscountTagWrapper}{
    position: absolute;
    top: -10px;
    left: 14px;
    background-color: ${colors.branding_chenin_default};
  }
  ${BaseCartButtonWrapper} {
    max-width: 50%;
  }
`
export const PriceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${BasePriceWrapper} {
    color: ${colors.gray_darker};
    font-weight: bold;
    font-size: 0.65rem;
    max-width: fit-content;
  }

  ${BaseMemberPriceDecimals}, ${BaseMemberPriceInteger} {
    font-size: 1.25rem;
  }
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
export const NonMemberPriceContainer = styled.div`
  ${BasePriceWrapper} {
    color: ${colors.blacker};
    font-weight: normal;
  }
`