import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    //#d4fae5;
    background-color: #f8f9fa;
    color: black;
    font-family: var(--font-KCCImkwontaek);
    line-height: 1.5;
    font-size: 20px;
    overflow-x: hidden; //가로 스크롤 없앰
  }
`;

export default GlobalStyle;
