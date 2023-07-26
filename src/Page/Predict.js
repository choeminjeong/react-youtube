import React, { useState } from "react";
import CombinationChart from "../Chart/CombinationChart";
//import TagList from "../Chart/TagList";
import styled from "styled-components";
//import { Fade } from "react-awesome-reveal";
import ExplainModal from "./ExplainModal";
//display: 요소 표시 방법
//justify-content: 수평축 기준 정렬
//align-items: 수직축 기준 정렬

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  margin-top: 100px;
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*border: 0.5rem solid #c8e0fe;
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
  }*/
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const StyleContent = styled.div`
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
/*
const StyledFade = styled(Fade)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
*/
const StyledDiv1 = styled.div`
  display: flex;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Inputwrap = styled.div`
  position: relative;
  display: table;
  background-color: #ffffff;
  padding: 10px 20px;
  border: 1px solid #dadada;
  border-radius: 0 0 6px 6px;
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

const StyledButton = styled.button`
  font-family: var(--font-NeoDunggeunmoPro-Regular);
  font-size: 20px;
  margin-right: 10px;
  height: 55px;
  padding: 5px 10px;
  border: 2px solid #000000;
  background-color: #c8e0fe;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 7px;
  &:hover {
    background-color: #809fff;
  }
`;

const StyledDiv2 = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    width: 30%;
  }
`;

/*
const StyledTagList = styled(TagList)`
  flex: 1; //부모 요소 크기에 맞게 크기 설정
`;*/

const ContainerChart = styled.div`
  //%로 그리면 화면 작았을 때 그리고 키웠을 때 차트가 너무 작음
  width: 800px;
  margin-left: 12%;
  overflow-x: scroll; //좌우 스크롤
  direction: rtl; //오른쪽부터
  background-color: #fffff0;
  border: 2px solid #000000;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 30%;
    height: 50%;
  }
`;

const ChartContainer = styled.div`
  width: 900px;
  height: 450px;
`;

//Predict Page
function Predict() {
  const [file, setFile] = useState(); //csv
  //const [view, setView] = useState([]); //view
  const [date, setDate] = useState([]); //date
  const [lastview, setLastView] = useState([]); //view
  const [pastview, setPastView] = useState([]);
  //const [tag, setTag] = useState([]); //tag
  const [playlistID, setPlayListID] = useState("");

  //input에서 파일이 선택되면 file에 저장
  function handleOnInput(e) {
    //setFile(e.target.files[0]);
    setPlayListID(e.target.value);
  }

  //파일 읽어올 객체
  const fileReader = new FileReader();

  //그리기 버튼
  function handleOnButton(e) {
    e.preventDefault();

    if (playlistID) {
      //fileReader객체로 파일 읽어온다.
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvToArray(text);
      };

      fileReader.readAsText(file);
    }
  }

  //csv파일 배열로 변환
  function csvToArray(csvfile) {
    const name = csvfile.slice(0, csvfile.indexOf("\n")).split(","); //첫 행(타이틀)
    const content = csvfile.slice(csvfile.indexOf("\n") + 1).split("\n"); //다음 ~ 끝

    //이전 데이터는 row.split(",", 8)
    const array = content.map((row) => row.split(",", 10)); //각 데이터 하나하나 배열에 저장
    const newArray = array[0].map(
      (
        _,
        colIndex //행과 열을 바꿈
      ) => array.map((row) => row[colIndex])
    );

    const viewIndex = name.indexOf("views");
    const viewData = newArray[viewIndex];
    //setView(viewData);

    const dateIndex = name.indexOf("date");
    const dateData = newArray[dateIndex];
    setDate(dateData);

    //진짜 마지막 데이터는 항상 undefined라서 1을 뺀 데이터가 마지막 데이터라고 생각해줘야 한다. ex)viewData[viewData.length-2] 데이터가 마지막데이터
    //마지막 1개 데이터 제외한 데이터
    const past = viewData.slice(0, -2);
    setPastView(past);

    //마지막 2개 데이터 포함하는 데이터
    const nulls = new Array(past.length - 1).fill(null); //이전 데이터만큼의 크기를 맞춰주기 위함, 안 그러면 계속 첫 번째 date부터 그려진다.
    const last = viewData.slice(-3, -1); //마지막 2개 데이터, slice(-3)의 결과도 같지만, undefined를 위에서 뺏기 때문에 여기서도 빼준다.
    setLastView(nulls.concat(last)); //앞에 null데이터를 추가해 결과가 뒷부분에 그려지도록 한다.
    //빼면 date와 상관없이 앞부분부터 그려짐
    /*
    const tagArr = content.map(
      //태그 데이터 나누기
      (row) =>
        row
          .split("[") //[기준으로 문자열 나눔
          .slice(1) //첫 번째 문자열 제외(태그 이전 데이터들)
          .map((el) => el.split("]").join("")) // ]제거
          .join(",") //,로 문자열 합침(태그 행들)
          .split(",") //,로 문자열 나눔(태그 각각 한 단어씩 나눔)
          .map((el) => el.replace(/['"]+/g, "")) //', '' 제거
    );

    //tagArr 태그들 하나의 배열로 만듦
    const flattenedTagArr = tagArr.reduce((acc, cur) => acc.concat(cur), []);
    //태그 개수
    const countByData = {};
    //태그마다 개수 세기
    flattenedTagArr.forEach((data) => {
      if (data !== "") {
        //태그 데이터를 발견했을 때,
        if (!countByData[data]) {
          //태그가 처음 발견되는 거면 1로 설정
          countByData[data] = 1;
        } else {
          //태그가 발견된 적이 있으면 +1
          countByData[data]++;
        }
      }
    });

    //태그 개수 기준, 내림차순 정렬
    const sortedTags = Object.entries(countByData).sort((a, b) => b[1] - a[1]);

    setTag(sortedTags);
  */
  }

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <StyledContainer>
      <Container>
        <Title>Predict</Title>
        <StyleContent>
          <StyledDiv1>
            <StyledH1>PlayListId:</StyledH1>
            <Inputwrap>
              <Input
                type="text"
                id="PlayListInput"
                value={playlistID}
                onChange={handleOnInput}
              />
            </Inputwrap>
            <StyledButton onClick={handleOnButton}>예측하기</StyledButton>
            <StyledButton onClick={onClickButton}>설명서</StyledButton>
            {isOpen && (
              <ExplainModal
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            )}
          </StyledDiv1>
          {/*<StyledDiv1>
              <StyledInput
                type="file"
                id="fileInput"
                accept=".csv"
                onChange={handleOnInput}
              />
              <StyledButton onClick={handleOnButton}>그리기</StyledButton>
              </StyledDiv1>*/}
          <StyledDiv2>
            {/*<StyledTagList tags={tag} />*/}
            <ContainerChart>
              <ChartContainer>
                <CombinationChart
                  title="Combination Chart"
                  view={pastview}
                  lastview={lastview}
                  date={date}
                />
              </ChartContainer>
            </ContainerChart>
          </StyledDiv2>
        </StyleContent>
      </Container>
    </StyledContainer>
  );
}

export default Predict;
