import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 70%;
  width: 500px;
  overflow-x: scroll; //좌우 스크롤
  background-color: white;
  color: black;
  font-size: 30px;
  border-style: solid;
  border-color: #8c85cf;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 250px;
    height: 50%;
  }
`;

const StyledTag = styled.div`
  height: 500px;
  width: 100%; 
  max-width: 500px; 
`;

const StyledLi = styled.li`
  font-size: 20px;
`;

//개수별 태그 출력
function TagList({ tags }) {
  //개수가 같은 태그들을 묶어 배열 생성
  const groupedTags = tags.reduce((acc, now) => {
    const last = acc[acc.length - 1];
    //직전 배열의 첫 번째 태그 개수와 현재 태그 개수가 같으면, 태그를 그룹에 추가
    if (last && last[0][1] === now[1]) {
      last.push(now);
    } else {
      acc.push([now]); //새로운 그룹 생성
    }
    return acc;
  }, []);

  return (
    <Container>
      <h3>태그 순위</h3>
      <StyledTag>
        <ol>
          {groupedTags.map((group, index) => (
            <StyledLi key={index}>
              {group.map(([name, count], i) => (
                <span key={name}>
                  {i > 0 && ", "} {/* 첫 번째 태그 이후에는 쉼표 출력 */}
                  {name} {/* 태그 이름 출력 */}
                </span>
              ))}
              : {group[0][1]} {/* 태그 이름에 해당하는 개수 출력 */}
            </StyledLi>
          ))}
        </ol>
      </StyledTag>
    </Container>
  );
}

export default TagList;
