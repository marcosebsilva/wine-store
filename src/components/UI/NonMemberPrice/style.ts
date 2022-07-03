import styled from "styled-components";
import {Wrapper as BasePriceWrapper} from "../BasePrice/style";
import colors from "../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${colors.gray_lighter};
  ${BasePriceWrapper} {
    font-size: 1em;
  }

`

export const Label = styled.label`
  display: inline-block;
  text-transform: uppercase;
  margin-right: 5px;
`