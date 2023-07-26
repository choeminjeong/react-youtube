import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const handleClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 로그인 여부 확인
  useEffect(() => {
    fetch("http://localhost:3001/authcheck")
      .then((res) => res.json())
      .then((json) => {
        if (json.isLogin === "True") {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Div>
      <StyledNav>
        <StyledLeftNav>
          <SearchLink to="/" onClick={() => handleClick("Home")}>
            Search
          </SearchLink>
        </StyledLeftNav>

        <StyledCenterNav>
          <StyledDiv>
            <NavLink to="/" onClick={() => handleClick("Home")}>
              Home
            </NavLink>
          </StyledDiv>
          <StyledDiv>
            <NavLink to="/" onClick={() => handleClick("About")}>
              About
            </NavLink>
          </StyledDiv>
          {/*<StyledDiv>
            <NavLink to="/" onClick={() => handleClick("Predict")}>
              Predict
            </NavLink>
          </StyledDiv>*/}
          <StyledDiv>
            <NavLink to="/" onClick={() => handleClick("Contact")}>
              Contact
            </NavLink>
          </StyledDiv>
        </StyledCenterNav>

        <StyledRightNav>
          {isLogin ? (
            <>
              <StyledLogout href="/logout">Sign out</StyledLogout>
              <NavLink
                to="/mypage"
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                MyPage
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </NavLink>
          )}
        </StyledRightNav>

        <HamburgerIcon onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>

        {isMobileMenuOpen && (
          <MobileMenu>
            <MobileNavLink to="/" onClick={() => handleClick("Home")}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/" onClick={() => handleClick("About")}>
              About
            </MobileNavLink>
            <MobileNavLink to="/" onClick={() => handleClick("Predict")}>
              Predict
            </MobileNavLink>
            <MobileNavLink to="/" onClick={() => handleClick("Contact")}>
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </StyledNav>
    </Div>
  );
}

const Div = styled.div``;

const StyledNav = styled.div`
  top: 0;
  width: 100vw;
  //background-color: #c8e0fe;
  display: flex;
  padding: 10px;
  margin: 0;
  position: fixed;
  z-index: 2;
`;

const SearchLink = styled(Link)`
  font-family: var(--font-KCCImkwontaek);
  position: relative;
  text-decoration: none;
  color: #000000;
  padding: 0.5rem;
  -webkit-text-stroke: 0.01px #ffffff;
  width: 100%;
  height: 60px;
  font-size: 35px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  //background-color: #c8e0fe;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const NavLink = styled(Link)`
  font-family: var(--font-KCCImkwontaek);
  position: relative;
  text-decoration: none;
  color: black;
  //background-color: #c8e0fe;
  width: 100%;
  height: 60px;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  border-radius: 0.6em;
  transition: background-color 1s ease, border-radius 0.5s ease;
  &:hover {
    //background-color: #809fff;
    border-radius: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledLeftNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledCenterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  margin-left: 25px;
  margin-right: 25px;

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 10px;
  }
`;

const StyledRightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

const StyledLogout = styled.a`
  font-family: var(--font-KCCImkwontaek);
  position: relative;
  text-decoration: none;
  color: black;
  //background-color: #c8e0fe;
  width: 100%;
  height: 60px;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  border-radius: 0.6em;
  transition: background-color 1s ease, border-radius 0.5s ease;
  &:hover {
    //background-color: #809fff;
    border-radius: 0.8rem;
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 25px;
    cursor: pointer;
    z-index: 3;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: #000;
      margin-bottom: 5px;
      border-radius: 3px;
      transition: background-color 0.3s;
    }

    span:last-child {
      margin-bottom: 0;
    }

    &:hover span {
      background-color: #809fff;
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  width: 100%;
  background-color: #c8e0fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  font-family: var(--font-NeoDunggeunmoPro-Regular);
  position: relative;
  text-decoration: none;
  color: black;
  background-color: #c8e0fe;
  width: 100%;
  height: 60px;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  border-radius: 0.6em;
  transition: background-color 1s ease, border-radius 0.5s ease;
  &:hover {
    background-color: #809fff;
    border-radius: 0.8rem;
  }
`;

export default Menu;
