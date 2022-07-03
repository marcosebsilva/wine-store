import styled from "styled-components";
import colors from "../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.875rem;
  /* 14px */
  margin-bottom: 16px;
`
export const FlagContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 16px;
  height: 16px;
`
export const CountryText = styled.p`
    /* 14px */
`

export const Text= styled.p`
  color: ${colors.gray_lighter};

`
