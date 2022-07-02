import styled from "styled-components";
import colors from "../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 20px;
  gap: 20px;
`

export const Button = styled.button`
  width: 100%;
  max-width: 300px;
  color: ${colors.wine_purple};
  border-radius: 4px;
  font-weight: bold;
  padding: 12px 24px;
  font-size: 0.875rem;
  /* 14px */
  border: 2px solid ${colors.wine_purple};
`

export const ResultCount = styled.h3`
  font-weight: normal;
  color: ${colors.gray_lighter};
  b {
    color: ${colors.gray_darker};
  }
`