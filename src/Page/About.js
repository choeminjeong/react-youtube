import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StyledDiv = styled.div`
  margin-top: 100px;
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  /*border: 0.5rem solid #c8e0fe;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #ffffff @media (max-width: 768px) {
    width: 90%;
    margin-top: 100px;
    padding: 20px;
  }*/
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

//About Page
function About() {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledH1>About</StyledH1>
        <StyledContent>
          <br />
          <Fade cascade>
            <p>
              Search는 유튜브 크리에이터들이 제공할 동영상의 조회수를 예측하는
              데 유용한 도구입니다.
            </p>
            <p>
              이 사이트는 인공지능 알고리즘을 사용하여 재생목록의 과거 데이터를
              수집하고 분석하여 입력한 영상의 예상 조회수를 계산합니다.
            </p>
            <p>Search의 사용법은 매우 간단합니다.</p>
            <p>
              유튜브 크리에이터들은 자신의 PlaylistId와 동영상을 입력하면,
              Search는 해당 Playlist에 있는 과거 동영상들의 조회수, 좋아요수,
              업로드 날짜 등을 분석하여 입력한 동영상의 조회수를 계산하여
              제공합니다.
            </p>
            <p>
              이를 통해 크리에이터들은 동영상 성과를 예측하여 해당 동영상이
              만족스러운 결과를 가져오는지 생각해볼 수 있습니다.
            </p>
            <p>
              이 사이트를 이용하여 동영상의 예상 조회수를 예측함으로써,
              크리에이터들은 동영상 컨텐츠를 개선하거나 마케팅 전략을 조정하는
              등 여러 조치를 취할 수 있습니다.
            </p>
          </Fade>
        </StyledContent>
      </StyledDiv>
    </StyledContainer>
  );
}

export default About;
