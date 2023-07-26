import React, { useState } from "react";
import CombinationChart from "../Chart/CombinationChart";
import styled from "styled-components";
import VideoIDModal from "./VideoIDModal";
import YouTube from "react-youtube";
import search from "../img/app-2456477_1920.jpg";

const Content = styled.div`
  z-index: 2;
  background-color: #f8f9fa;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Menu = styled.div`
  height: 70px;
  width: 100vw;
  background-color: white;
  z-index: 3;
`;

const Con = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 93vh;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
`;

const Div = styled.div`
  height: 300px;
`;

const Title = styled.h1`
  font-family: var(--font-KCCImkwontaek);
  font-size: 4rem;
  color: #ffffff;
  -webkit-text-stroke: 0.01px #ffffff;;
  margin-top: 40px;
  margin-left: 44%;
`;

const Div1 = styled.div`
  font-family: var(--font-KCCImkwontaek);
  margin-left: 17%;
  display: flex;
  margin-top: 30px;
`;

const H1 = styled.h1`
color: #ffffff;
-webkit-text-stroke: 0.01px #ffffff;
  font-size: 40px;
  margin-top: 8px;
`;

const Inputwrap = styled.div`
  position: relative;
  display: table;
  background-color: #ffffff;
  padding: 13px 30px;
  border: 1px solid #000000;
  border-radius: 10px 10px;
  width: 50%;
  height: 18px;
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
  padding: 5px 20px;
  border: 1px solid #ffffff;
  background-color: #000000;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  color: #ffffff;
`;

const Box = styled.div`
  margin-left: 10%;
  background-color: #ffffff;
  margin-top: 50px;
  margin-bottom: 70px;
  height: 580px;
  width: 80%;
  transition: height 0.3s ease;
  overflow: hidden;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
`;

const DivButton = styled.button`
  display: flex;
  margin-left: 85%;
  margin-top: 1%;
  background-color: #ffffff;
  border: none;
  gap: 30px;
`;

const ChangeButton = styled.button`
  font-size: 20px;
  background-color: #ffffff;
  cursor: pointer;
  margin-top: 10px;
  background-color: #c8e0fe;
`;

const RemoveButton = styled.button`
  border: none;
  font-size: 30px;
  background-color: #ffffff;
  cursor: pointer;
`;

const Div2 = styled.div`
  display: flex;
  margin-left: 90px;
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
  //overflow-x: scroll; //좌우 스크롤
  direction: rtl; //오른쪽부터
  background-color: white;
  border: 5px solid #000000;
  borderDash: [5, 5],
  border-radius: 10px 10px 0 0;
`;

const Container2 = styled.div`
  width: 800px;
  height: 500px;
  //overflow-x: scroll; //좌우 스크롤
  direction: rtl; //오른쪽부터
  background-color: white; //#173549;
  border: 5px solid #000000;
  border-radius: 10px 10px 0 0;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

const CheckboxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196F3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

function MyPage() {
  //const [date, setDate] = useState([]);
  //const [predictview, setPredictView] = useState([]);
  //const [pastview, setPastView] = useState([]);
  //const [boxCount, setBoxCount] = useState(0);
  const [videoID, setVideoID] = useState("");
  //const [videoIDList, setVideoIDList] = useState([]);
  const [title, setTitle] = useState([]);
  const [boxes, setBoxes] = useState([]);

  function handleOnInput(e) {
    setVideoID(e.target.value);
  }

  const handleOnButton = (e) => {
    e.preventDefault();
    if (videoID) {
      try {
        //setBoxCount((prevCount) => prevCount + 1);
        setTitle(videoID);
        setVideoID("");
        console.log(videoID);

        fetch("/mypage", {
          method: "POST",
        })
          .then((response) => response.json())
          .then((data) => {
            const currentIndex = boxes.length;
            //            예측 데이터 점선으로 그리려면 앞에 원래 데이터 잘라야 함
            //            const predictdata = data.prediction.slice(11, 30);
            //            setPredictView(nulls.concat(predictdata));
            //            console.log("Prediction:", predictdata);
            /* setDate(data.date);
            setPastView(data.pastdata);
            const nulls = new Array(data.pastdata.length-1).fill(null);
            const predict = nulls.concat(data.pastdata[data.pastdata.length-1])
            setPredictView(predict.concat(data.prediction[0]));
            console.log("Prediction:", data.prediction[0]);*/
            const nulls = new Array(data.timepast[currentIndex].length - 1).fill(null);
            const last1 = nulls.concat(data.timepast[currentIndex][data.timepast[currentIndex].length - 1]);
            const predict = last1.concat(data.timepredic[currentIndex]);
            
            const nulls2 = new Array(data.dailypast[currentIndex].length - 1).fill(null);
            const last2 = nulls2.concat(data.dailypast[currentIndex][data.dailypast[currentIndex].length - 1]);
            const predict2 = last2.concat(data.dailypredic[currentIndex]);
            
            const addBox = {
              videoID: videoID,
              date: data.timedate,
              past: data.timepast[currentIndex],
              predic: predict,
              ddate: data.dailydate,
              ppast: data.dailypast[currentIndex],
              ppredic: predict2,
              chartType: "hourly",
            };
            setBoxes((prevboxes) => [addBox, ...prevboxes]);
            console.log([addBox, ...boxes]);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("비디오 아이디를 입력하세요.");
    }
  };
  /*
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
  */
  function deleteBox(index) {
    const check = window.confirm("정말 삭제하시겠습니까?");
    if (check) {
      //setBoxCount((prevCount) => prevCount - 1);
      setBoxes((prevboxes) => {
        const updateboxes = [...prevboxes];
        updateboxes.splice(index, 1);
        return updateboxes;
      });
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  const [chartTypeList, setChartTypeList] = useState(["daily"]);

  function chartChange(index) {
    setBoxes((prevboxes) => {
      const updatedboxes = [...prevboxes];
      updatedboxes[index].chartType =
        updatedboxes[index].chartType === "hourly" ? "daily" : "hourly";
      return updatedboxes;
    });
  }

  return (
    <Content>
      <Menu></Menu>
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

        {boxes.map((box, index) => (
          <Box key={index}>
            <DivButton>
              <ToggleSwitch>
              <CheckboxInput
                type="checkbox"
                checked={box.chartType === "daily"}
                onChange={() => chartChange(index)}
              />
              <Slider></Slider>
            </ToggleSwitch>
              <RemoveButton onClick={() => deleteBox(index)}>✖</RemoveButton>
            </DivButton>
            <Div2>
              <VideoBox>
                {/*http: Failed to execute 'postMessage' on 'DOMWindow'해결*/}
                <YouTube
                  videoId={box.videoID}
                  opts={{
                    width: "560",
                    height: "450",
                    playerVars: {
                      autoplay: 0,
                      rel: 0,
                      modestbranding: 1,
                    },
                  }}
                  onReady={(e) => {
                    e.target.pauseVideo();
                  }}
                />
              </VideoBox>
              {box.chartType === "hourly" && (
                <Container>
                    <CombinationChart
                      title="시간별 차트"
                      view={box.past}
                      lastview={box.predic}
                      date={box.date}
                    />
                </Container>
              )}
              {box.chartType === "daily" && (
                <Container2>
                    <CombinationChart
                      title="일별 차트"
                      view={box.ppast}
                      lastview={box.ppredic}
                      date={box.ddate}
                    />
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
