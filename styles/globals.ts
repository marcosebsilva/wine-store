import { createGlobalStyle } from "styled-components";

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
    overflow: hidden;
  }

  body {
    height: 100vh;
    background-color: #F5F5F5;
  }
  * {
    text-decoration: none;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Lato', sans-serif;
    padding: 0;
  }
`