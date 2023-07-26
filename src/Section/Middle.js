import React from "react";
import styled from "styled-components";
import HomePage from "../Page/Home";
import AboutPage from "../Page/About";
import PredictPage from "../Page/Predict";
import ContactPage from "../Page/Contact";
import background from "../img/frame-1662287_1920.png";

const MiddleDiv = styled.div`
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 768px) {
    scroll-behavior: auto;
  }
`;

const StyledMain = styled.main`
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 768px) {
    scroll-behavior: auto;
  }
`;

const StyledSection = styled.section`
  display: flex;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    scroll-behavior: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

function Middle() {
  return (
    <MiddleDiv>
      <StyledMain>
        <StyledSection id="Home">
          <HomePage />
        </StyledSection>
        <StyledSection id="About">
          <AboutPage />
        </StyledSection>
        {/*<StyledSection id="Predict">
          <PredictPage />
  </StyledSection>*/}
        <StyledSection id="Contact">
          <ContactPage />
        </StyledSection>
      </StyledMain>
    </MiddleDiv>
  );
}

export default Middle;
