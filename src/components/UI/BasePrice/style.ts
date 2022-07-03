import styled from "styled-components";
import devices from "../../../styles/devices";
import colors from "../../../styles/colors";

export const Wrapper = styled.span<{dashed: boolean}>`
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
