import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import devices from "./devices";

export default createGlobalStyle`
  @font-face {
    font-family: 'NeoSansStd';
    src: url('/fonts/NeoSans/Neo-Sans-Std-Regular.otf') format('opentype');
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd';
    src: url('/fonts/NeoSans/Neo-Sans-Std-Bold.otf') format('opentype');
    font-weight: bold;
    font-display: swap;
  }

  #__next {
    height: 100%;
    max-width: 100vw;
  }

  body {
    background-color: ${colors.background};
    font-size: 16px;
  }
  * {
    text-decoration: none;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    font-family: 'Lato', sans-serif;
    padding: 0;
  }
`