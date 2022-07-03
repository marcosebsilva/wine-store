import styled from "styled-components";
import colors from "../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Title = styled.h1`
  font-size: 1.25rem;
`

export const Description = styled.p`
  color: ${colors.gray_lighter};
  line-height: 1.5rem;
`