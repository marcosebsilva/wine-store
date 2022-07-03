import styled from "styled-components";
import colors from "../../../styles/colors";
import devices from "../../../styles/devices";

export const Wrapper = styled.span<{dashed: boolean}>`
  position: relative;
  display: inline;
  font-size: 0.625rem;
  color: ${colors.gray_lighter};
  &:after {
    content: '';
    display: ${(props) => props.dashed ? 'block' : 'none'};
    width: 100%;
    bottom: 35%;
    position: absolute;
    background-color: ${colors.gray_lighter};
    height: 1px;
  }
`
