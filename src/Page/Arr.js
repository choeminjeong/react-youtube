import React, { useState, useEffect } from "react";
import CombinationChart from "../Chart/CombinationChart";
import styled from "styled-components";
import VideoIDModal from "./VideoIDModal";
import YouTube from "react-youtube";
import iii from "../img/henry-be-IicyiaPYGGI-unsplash.jpg";

const Content = styled.div`
  z-index: 2;
  background-color: #f8f9fa;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Con = styled.div`
  margin-top: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 92%;
`;

const Div = styled.div`
  height: 300px;
  background-image: url(${iii});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #4f210a;
  margin-top: 40px;
  margin-left: 44%;
`;

const Div1 = styled.div`
  margin-left: 17%;
  display: flex;
  margin-top: 30px;
`;

const H1 = styled.h1`
  font-size: 40px;
  color: #4f210a;
  margin-top: 4px;
`;

const Inputwrap = styled.div`
  position: relative;
  display: table;
  background-color: #ffffff;
  padding: 15px 20px;
  border: 1px solid #000000;
  border-radius: 10px 10px;
  width: 50%;
  height: 20px;
  margin: 10px;
  &:hover {
    box-shadow: 0 0 5px #899fff;
  }
`;

const Input = styled.input`
  font-size: 20px;
  border: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none; //검은색 테두리 없애기
  }
`;

const Button = styled.button`
  font-family: var(--font-NeoDunggeunmoPro-Regular);
  font-size: 20px;
  margin-right: 10px;
  height: 55px;
  padding: 5px 15px;
  border: 1px solid #000000;
  background-color: #c8e0fe;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #809fff;
  }
`;

const Box = styled.div`
  margin-left: 10%;
  background-color: #ffffff;
  margin-top: 50px;
  margin-bottom: 70px;
  border: 0.5rem solid #c8e0fe;
  height: 580px;
  width: 80%;
  transition: height 0.3s ease;
  overflow: hidden;
  background-color: #fffff0;
`;

const RemoveButton = styled.button`
  border: none;
  font-size: 30px;
  background-color: #ffffff;
  cursor: pointer;
  margin-left: 95%;
  margin-top: 1%;
`;

const Div2 = styled.div`
  display: flex;
  margin-left: 50px;
  margin-bottom: 30px;
  gap: 3%;
`;

const VideoBox = styled.div`
  margin-top: 20px;
  width: 560px;
  height: 450px;
`;

const Container = styled.div`
  width: 800px;
  height: 500px;
  overflow-x: scroll; //좌우 스크롤
  direction: rtl; //오른쪽부터
  background-color: #fffff0;
  border: 5px solid #fffff0;
  border-radius: 10px 10px 0 0;
`;

const Container2 = styled.div`
  width: 800px;
  height: 500px;
  overflow-x: scroll; //좌우 스크롤
  direction: rtl; //오른쪽부터
  background-color: #ffffff;
  border: 5px solid #fffff0;
  border-radius: 10px 10px 0 0;
`;

const ChartContainer = styled.div`
  height: 450px;
  width: 1000px;
`;

function MyPage() {
  const [videoID, setVideoID] = useState("");
  const [boxes, setBoxes] = useState([]);


  const handleOnInput = (e) => {
    setVideoID(e.target.value);
  };
  
  const handleOnButton = (e) => {
    e.preventDefault();
    if (videoID) {
      //상자 객체: videoID, data, pastview, predictview
      setBoxes((prevBoxes) => [
        ...prevBoxes,
        {
          videoID: videoID,
          boxData: { date: [], pastview: [], predictview: [] },
          chartType: "daily",
        },
      ]);
      //입력창 초기화
      setVideoID("");
    } else {
      console.log("비디오 아이디를 입력하세요.");
    }
  };

  const fetchDataForAllBoxes = async () => {
    try {
      const response = await fetch("/mypage", { method: "GET" });
      const data = await response.json();
      setBoxes((prevBoxes) => {
        const updatedBoxes = [...prevBoxes];
        for (let i = 0; i < updatedBoxes.length; i++) {
          const updatedBoxData = {
            date: data.date,
            pastview: data.pastdata,
            predictview: [...new Array(data.pastdata.length).fill(null)].concat(
              data.prediction[0]
            ),
          };
          updatedBoxes[i].boxData = updatedBoxData;
        }
        return updatedBoxes;
      });
      console.log("Prediction:", data.prediction[0]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchDataForAllBoxes();
    }, 3600000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  

  const deleteBox = (index) => {
    const check = window.confirm("정말 삭제하시겠습니까?");
    if (check) {
      //해당 상자 삭제
      setBoxes((prevBoxes) => {
        const updatedBoxes = [...prevBoxes];
        updatedBoxes.splice(index, 1);
        return updatedBoxes;
      });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };


  const chartChange = (index) => {
    setBoxes((prevBoxes) => {
      const updatedBoxes = [...prevBoxes];
      const currentChartType = updatedBoxes[index].chartType;
      updatedBoxes[index].chartType = currentChartType === "hourly" ? "daily" : "hourly";
      return updatedBoxes;
    });
  };

  return (
    <Content>
      <Con>
        <Div>
          <Title>MyPage</Title>
          <Div1>
            <H1>VideoID: </H1>
            <Inputwrap>
              <Input
                type="text"
                id="VideoInput"
                placeholder="Search for VideoId"
                value={videoID}
                onChange={handleOnInput}
              />
            </Inputwrap>
            <Button onClick={handleOnButton}>추가</Button>
            <Button onClick={onClickButton}>설명서</Button>
            {isOpen && (
              <VideoIDModal
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            )}
          </Div1>
        </Div>
        {[...boxes].reverse().map((box, index) => (
          <Box key={index}>
            <Button onClick={() => chartChange(index)}>
              {box.chartType === "hourly" ? "일별차트" : "시간별차트"}
            </Button>
            <RemoveButton onClick={() => deleteBox(index)}>✖</RemoveButton>
            <Div2>
              <VideoBox>
                <YouTube
                  videoId={box.videoID}
                  opts={{
                    width: "560",
                    height: "450",
                    playerVars: {
                      autoplay: 1,
                      rel: 0,
                      modestbranding: 1,
                    },
                  }}
                  onEnd={(e) => {
                    e.target.stopVideo(0);
                  }}
                />
              </VideoBox>
              {box.chartType === "hourly" && (
                <Container>
                  <ChartContainer>
                    <CombinationChart
                      title={box.videoID}
                      view={box.boxData.pastview}
                      lastview={box.boxData.predictview}
                      date={box.boxData.date}
                    />
                  </ChartContainer>
                </Container>
              )}
              {box.chartType === "daily" && (
                <Container2>
                  <ChartContainer>
                    <CombinationChart
                      title={box.videoID}
                      view={box.boxData.pastview}
                      lastview={box.boxData.predictview}
                      date={box.boxData.date}
                    />
                  </ChartContainer>
                </Container2>
              )}
            </Div2>
          </Box>
        ))}
      </Con>
    </Content>
  );
}

export default MyPage;
