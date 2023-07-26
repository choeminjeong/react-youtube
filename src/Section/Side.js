import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideDiv = styled.div`
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const SideLink = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: black;
  text-align: center;
  text-decoration: none;
  background-color: white;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #8c85cf;
  }
`;

function Side() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    };

    handleResize(); // 초기 렌더링 시 크기에 따라 상태값 설정
    window.addEventListener("resize", handleResize); // resize 이벤트 리스너 등록

    return () => {
      window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return shouldRender ? (
    <SideDiv>
      <div>
        <SideLink to="/" onClick={() => handleClick("Home")}>
          Home
        </SideLink>
        <SideLink to="/" onClick={() => handleClick("About")}>
          About
        </SideLink>
        <SideLink to="/" onClick={() => handleClick("Predict")}>
          Predict
        </SideLink>
        <SideLink to="/" onClick={() => handleClick("Contact")}>
          Contact
        </SideLink>
      </div>
    </SideDiv>
  ) : null;
}

export default Side;
