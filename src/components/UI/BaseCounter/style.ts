import styled from "styled-components";
import colors from "../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.function_sucess_default};
  align-items: center;
  padding-inline: 20px;
  gap: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`
export const RoundButton  = styled.button`
  position: relative;
  height: 24px;
  border-radius: 50%;
  color: white;
  border: 1px solid white;
  width: 24px;
  background-color: transparent;
  
  &:hover, &:active {
    background-color: ${colors.function_sucess_dark};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.2;
  }
`
export const Quantity = styled.b`
  display: block;
  color: white;
`
