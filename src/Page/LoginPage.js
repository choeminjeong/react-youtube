import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import YoutubeAPIModal from "./YoutubeAPIModal";

const Content = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #ffffff;
  margin: 0px 0px 20px;
`;

const Div = styled.div`
  padding: 40px 48px;
  background-color: #000000;
  border: 1px solid #999999;
  border-radius: 0 0 6px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 2px #999999;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Inputwrap = styled.div`
  position: relative;
  display: table;
  background-color: #ffffff;
  padding: 14px 17px 13px;
  border: 1px solid #dadada;
  border-radius: 0 0 6px 6px;
  width: 100%;
  &:hover {
    box-shadow: 0 0 2px #899fff;
  }
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none; //검은색 테두리 없애기
  }
`;

const StyledButton = styled.button`
  font-family: var(--font-NeoDunggeunmoPro-Regular);
  font-size: 20px;
  margin-right: 10px;
  width: 20%;
  padding: 5px 10px;
  border: 2px solid #000000;
  background-color: #d3d3d3;
  transition: background-color 0.5s ease;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 7px;
  &:hover {
    background-color: #a9a9a9;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%
  font-family: var(--font-NeoDunggeunmoPro-Regular);
  padding: 20px 200px;
  margin-top: 50px;
  background-color: #d3d3d3;
  transition: background-color 0.5s ease;
  border-radius: 6px;
  color: #000000;
  font-size: 20px;
  border: 1px solid rgba(0,0,0,.15);
  transition: background-color 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #a9a9a9;
  }

  @media (max-width: 768px) {
    padding: 20px; 100px;
  }
`;

const Move = styled.div`
  display: block;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  margin: 5px;
  color: black;
  text-align: center;
  text-decoration: none;
  background-color: white;
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

//로그인 페이지
function Login(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Content>
      <Div>
        <Title>로그인</Title>
        <Inputwrap>
          <Input
            type="text"
            name="username"
            placeholder="아이디"
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </Inputwrap>
        <Inputwrap>
          <Input
            type="password"
            name="pwd"
            placeholder="비밀번호"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Inputwrap>

        <Button
          type="submit"
          value="로그인"
          onClick={() => {
            const userData = {
              userId: id,
              userPassword: password,
            };
            fetch("/login", {
              //login 주소에서 받을 예정
              method: "post", //method: 통신방법
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData), //userData라는 객체를 보냄
            })
              .then((res) => res.json())
              .then((json) => {
                if (json.isLogin === "True") {
                  props.setMode("WELCOME");
                } else {
                  alert(json.isLogin);
                }
              });
          }}
        >
          로그인
        </Button>
      </Div>

      <Move
        onClick={() => {
          props.setMode("SIGNIN");
        }}
      >
        회원가입
      </Move>
    </Content>
  );
}

//회원가입 페이지
function Signin(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [api, setAPI] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <Content>
      <Div>
        <Title>회원가입</Title>
        <StyledButton onClick={onClickButton}>설명서</StyledButton>
        {isOpen && (
          <YoutubeAPIModal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
        <Inputwrap>
          <Input
            type="text"
            placeholder="아이디"
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </Inputwrap>
        <Inputwrap>
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Inputwrap>
        <Inputwrap>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            onChange={(event) => {
              setPassword2(event.target.value);
            }}
          />
        </Inputwrap>
        <Inputwrap>
          <Input
            type="text"
            placeholder="유튜브 api키"
            onChange={(event) => {
              setAPI(event.target.value);
            }}
          />
        </Inputwrap>
        <Button
          type="submit"
          value="회원가입"
          onClick={() => {
            if (
              id === "" ||
              password === "" ||
              password2 === "" ||
              api === ""
            ) {
              alert("모든 필수 입력항목을 채워주세요.");
              return;
            }
            const userData = {
              userId: id,
              userPassword: password,
              userPassword2: password2,
              userAPI: api,
            };
            fetch("/signin", {
              //signin 주소에서 받을 예정
              method: "post", // method :통신방법
              headers: {
                // headers: API 응답에 대한 정보를 담음
                "content-type": "application/json",
              },
              body: JSON.stringify(userData), //userData라는 객체를 보냄
            })
              .then((res) => res.json())
              .then((json) => {
                if (json.isSuccess === "True") {
                  alert("회원가입이 완료되었습니다!");
                  props.setMode("LOGIN");
                } else {
                  alert(json.isSuccess);
                }
              });
          }}
        >
          회원가입
        </Button>
      </Div>

      <Move
        onClick={() => {
          props.setMode("LOGIN");
        }}
      >
        로그인
      </Move>
    </Content>
  );
}

//로그인 여부에 따른 페이지
function LoginPage() {
  const [mode, setMode] = useState("");
  const navigate = useNavigate();

  //로그인 여부 확인
  useEffect(() => {
    fetch("/authcheck")
      .then((res) => res.json())
      .then((json) => {
        if (json.isLogin === "True") {
          setMode("WELCOME");
        } else {
          setMode("LOGIN");
        }
      });
  }, []);

  let content = null;

  //모드 확인 후 해당 화면 띄움
  if (mode === "LOGIN") {
    content = <Login setMode={setMode}></Login>;
  } else if (mode === "SIGNIN") {
    content = <Signin setMode={setMode}></Signin>;
  } else if (mode === "WELCOME") {
    navigate("/");
    window.location.reload();
    //navigate("/");
  }

  return (
    <>
      <div className="background">{content}</div>
    </>
  );
}

export default LoginPage;