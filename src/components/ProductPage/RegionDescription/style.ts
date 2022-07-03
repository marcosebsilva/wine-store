import styled from "styled-components";
import colors from "../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 0.75rem;
  /* 12px */
`

export const Text = styled.span`
  position: relative;
  color: ${colors.wine_purple };
`

export const Arrow = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  border-top: 1px solid ${colors.gray_lighter};
  border-left: 1px solid ${colors.gray_lighter};
  transform: rotate(135deg);
`

export const RegionText = styled.span`
  color: ${colors.gray_lighter}
`