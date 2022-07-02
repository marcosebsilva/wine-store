import styled from "styled-components";
import devices from "../../styles/devices";

export const MainWrapper = styled.main`
  width: 100vw;
  height: 100%;
  padding-inline: 20px;

  @media ${devices.desktopSmall} {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 0.3fr 1fr;
    padding-inline: 80px;
  }

  @media ${devices.desktopMedium} {
    padding-inline: 15vw;
  }
`