import styled from "styled-components";
import colors from "../../../styles/colors";
import devices from "../../../styles/devices";


export const Wrapper = styled.button`
  width: 100%;
  padding-inline: 47px;
  background-color: ${colors.function_sucess_default};
  color: white;
  padding-top: 12px;
  padding-bottom: 12px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: 200ms;

  @media ${devices.desktopSmall}{
    &:hover {
      transform: scale(1.03);
    }
    &:active {
      transform: scale(1);
    }
  }
`