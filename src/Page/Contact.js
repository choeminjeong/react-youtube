import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const StyledDiv = styled.div`
  margin-top: 100px;
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
 /* border: 0.5rem solid #c8e0fe;
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);*/
`;

const StyledH1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const StyledContent = styled.div`
  max-width: 90%;
  border-top: 2px solid #333;
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  margin-bottom: 200px;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #666;
  text-align: justify;

  p {
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

//Contact Page
function Contact() {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledH1>Contact</StyledH1>
        <StyledContent>
          <br />
          <Fade cascade>
            <p>안녕하세요, 저희 웹사이트를 방문해 주셔서 감사합니다.</p>
            <p>
              궁금하신 점이나 문의하실 사항이 있으시면 언제든지 아래의 연락처를
              이용해 주세요.
            </p>
            <p>이메일: -------@gmail.com</p>
            <p>전화번호: 010-0000-0000</p>
          </Fade>
        </StyledContent>
      </StyledDiv>
    </StyledContainer>
  );
}

export default Contact;
