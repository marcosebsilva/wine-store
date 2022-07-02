import styled from "styled-components";
import colors from "../../../styles/colors";

export const PageButton = styled.button<{selected: boolean}>`
  transition: 200ms;
  padding: 5px;
  border: 1px solid ${colors.wine_purple};
  background-color: ${(props) => props.selected ? `${colors.wine_purple}` : 'transparent'};
  color: ${(props) => props.selected ? 'white' : colors.wine_purple};
  height: 38px;
  width: ${(props) => props.selected ? '38px' : '70px'};
  border-radius: 3px;
  &:hover {
    color: white;
    background-color: ${colors.wine_purple};
  }
`
export const Dots = styled.button`
  color: ${colors.wine_purple};
  background-color: transparent;
  letter-spacing: 8px;
  font-size: 1.3rem;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`
export const Button = styled.button`
  color: ${colors.wine_purple};
`