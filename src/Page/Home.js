import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import background from "../img/computer-5364329_1920.jpg";
import phone from "../img/computer-5364329_1920.jpg";

const AllSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin: 0;
    padding: 5%;
  }
`;

const StyledDiv1 = styled.div`
  margin-top: 400px;
  margin-right: 20px;
  font-family: var(--font-KCCImkwontaek.ttf);
  font-weight: 700;
  color: #000000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
  h1 {
    padding: 0.5rem;-webkit-text-stroke: 2px #ffffff;
    text-shadow: 100px 100px 100px rgba(0, 0, 0, 0.5);
    font-size: 10rem;
    line-height: 0.5;
    letter-spacing: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;


const StyleDiv2 = styled.div`
  margin-top: 1rem;
  margin-right: 8rem;
  text-align: center;
  font-size: 20px;
  margin-bottom: 6rem;
  color: #ffffff;
`;

const SideLink = styled(Link)`
  font-family: var(--font-CROOKED);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 500px;
  margin-right: 80px;
  margin-bottom: 10rem;
  color: #ffffff;
  border: none;
  font-size: 30px;
  text-align: center;
  font-border: red;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.5s ease;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    font-size: 18px;
  }
}`;

function Home() {
  const [mode, setMode] = useState("");
  const navigate = useNavigate();

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const predictClick = (e) => {
    e.preventDefault();
    fetch("/authcheck")
      .then((res) => res.json())
      .then((json) => {
        if (json.isLogin === "True") {
          navigate("/mypage");
        } else {
          navigate("/login");
        }
      });
  };

  return (
    <AllSection>
      <Fade cascade>
        <StyledDiv1>
          <h1>SEARCH</h1>
          <h1>your</h1>
          <h1>views</h1>
        </StyledDiv1>
        <StyleDiv2>유튜브 조회수 예측 사이트</StyleDiv2>
        <SideLink onClick={predictClick}>예측하러 가기</SideLink>
      </Fade>
    </AllSection>
  );
}

export default Home;
