import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import Middle from "./Section/Middle";
import Side from "./Section/Side";
import Menu from "./Section/Menu";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import MyPage from "./Page/MyPage";

const StyledMenu = styled(Menu)`
  position: fixed;
  top: 0;
  z-index: 1;
`;

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/mypage" element={<MyPage />}/>
      </Routes>

      <GlobalStyle />
      <StyledMenu />
      {/*<Side />*/}
      <Middle />
    </>
  );
}

export default App;
