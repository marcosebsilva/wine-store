import styled from "styled-components";
import colors from "../../../styles/colors";

export const Wrapper = styled.div`
  background-color: ${colors.branding_tavel_default};
  max-width: 75px;
  padding: 3px 5px;
  margin-left: 5px;
  border-radius: 2px;
  display: flex;
  align-items: center;
`

export const Text = styled.b`
  font-size: 0.75rem;
  display: inline-block;
  color: white;
`