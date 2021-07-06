import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";
import variables from "./variables";

const { scroll, headerHeight, footerHeight } = variables;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    padding: 0 calc(${scroll} - (100vw - 100%)) 0 0;
    min-height: 100%;
    background: #0e0d0d;
    font-family: 'Roboto', sans-serif;
    color: white;

    main {
      min-height: calc(100vh - ${headerHeight} - ${footerHeight} - ${scroll}); // 25rem -  header height
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

  ::-webkit-scrollbar {
    background: transparent;
    width: ${scroll};
    height: ${scroll};
  }
  ::-webkit-scrollbar-thumb {
    background-color: #525252;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
}

`;

export default GlobalStyle;
