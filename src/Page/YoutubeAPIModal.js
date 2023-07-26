import React from "react";
import styled from "styled-components";
import one from "../img/YoutubeAPI(1).png";
import two from "../img/YoutubeAPI(2).png";
import three from "../img/YoutubeAPI(3).png";
import four from "../img/YoutubeAPI(4).png";
import five from "../img/YoutubeAPI(5).png";
import six from "../img/YoutubeAPI(6).png";
import seven from "../img/YoutubeAPI(7).png";
import eight from "../img/YoutubeAPI(8).png";
import nine from "../img/YoutubeAPI(9).png";
import ten from "../img/YoutubeAPI(10).png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function YoutubeAPIModal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}>✖</CloseButton>
        <Contents>
          <h1>YoutubeAPI 찾는 방법</h1>
          <h4>사진 위에서 마우스 휠을 굴리면 사진이 확대/축소됩니다.</h4>

          {"\n"}
          {"\n"}
          <h2>
            STEP 1.{" "}
            <a
              href="https://console.cloud.google.com/welcome"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#000000" }}
            >
              google cloud platform으로 이동
            </a>
            {"\n"}
            <a
              href="https://console.cloud.google.com/welcome"
              target="_blank"
              rel="noreferrer"
            >
              [클릭] google cloud platform
            </a>
            {"\n"}
            {"\n"}
            {"\n"}
            STEP 2. 프로젝트 생성 후 선택{" "}
            <p>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={one} alt="step2" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={two} alt="step5" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
            </p>
            {"\n"}
            {"\n"}STEP 3. API 및 서비스로 이동
            <p>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={three} alt="step3" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
            </p>
            {"\n"}
            {"\n"}STEP 4. 사용자 인증 정보에서 API키 만들고 선택
            <p>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={four} alt="step4" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={five} alt="step5" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
            </p>{" "}
            {"\n"}
            {"\n"} STEP 5. API키 수정 - youtube api v3 다운
            <p>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={six} alt="step5" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={seven} alt="step5" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
            </p>{" "}
            {"\n"}
            {"\n"}STEP 6. API키 수정 - API키 제한: YouTUbe Data API v3
            <p>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={eight} alt="step6" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
            </p>{" "}
            {"\n"}
            {"\n"}STEP 7. Youtube API키 발급 완료
            {"\n"}
            <h4>발급된 YoutubeAPI키를 회원가입 창에 입력하세요.</h4>
            <p>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={nine} alt="end" />
                  </figure>
                </TransformComponent>{" "}
              </TransformWrapper>
              <TransformWrapper
                options={{ limitToBounds: false, minScale: 0, maxScale: 0 }}
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
              >
                <TransformComponent>
                  <figure>
                    <img src={ten} alt="step5" />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
            </p>
          </h2>
          <button onClick={handleClose}>Close</button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  white-space: pre-wrap;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 70%;
  height: 80%;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  font-size: 30px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

//img와 그 부모 요소인 p크기 조율 중요
const Contents = styled.div`
  text-align: center;
  margin: 30px;
  h1{
    margin-left: 50px;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
  }
  h4{ 
    font-size: 20px;
    text-align: center;
  }
  h2 {
    text-align: center;
    margin-left: 5%;
    padding: 30px;
    font-size: 30px;
    font-weight: 600;
    a {
        text-decoration: none;
        font-size: 30px;
        font-weight: 600;
        color: #666666;
    }
  }
  
  p{
    display: flex;
    justify-content: center;
    width: 1000px;
    img {
        margin-bottom: 30px;
        margin-left: 200px;
        width: 700px;
        /*trainsition: all 0.2s linear;
        :hover{
            transform: scale(1.4)
        }*/
    }
  }
  button{    
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    background-color: #c8e0fe;
    border-radius: 10px;
    color: white;
    font-style: italic;
    font-weight: 200;
    cursor: pointer;
    &:hover {
      background-color: #809FFF;
    }
`;

export default YoutubeAPIModal;
