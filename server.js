const tf = require("@tensorflow/tfjs");
const port = 3001;
const url = `http://localhost:${port}/tfjsmodel/model.json`; //제대로 뜸O

async function loadModel() {
  const model = await tf.loadLayersModel(url);
  return model;
}

const express = require("express");
const app = express();
const cors = require("cors");

// CORS 설정
app.use(cors());

const fs = require("fs");

//model 내 파일 제공
app.use("/tfjsmodel", express.static("tfjsmodel"));

//'/model'경로로 model 내 파일 목록 확인
app.get("/model", (req, res) => {
  //제대로 뜸O
  const directoryPath = __dirname + "/tfjsmodel";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    res.send(files);
  });
});

//라우팅 설정
// 라우팅 설정
app.post("/mypage", async (req, res) => {
  try {
    /*
    1. 비디오 아이디: UBURTj20HXI
    2. 비디오 아이디: 81JOj5-xNGc
    3. 비디오 아이디: 95YLHDzsg8A
    */
    date = [
      -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];
    past = [
      [
        6888700.0, 6895138.0, 6899054.0, 6908857.0, 6914717.0, 6923013.0,
        6926567.0, 6935759.0, 6941258.0, 6953879.0,
      ],
      [
        1785460.0, 1785503.0, 1785519.0, 1785539.0, 1785594.0, 1785648.0,
        1785687.0, 1785759.0, 1785856.0, 1785906.0,
      ],
      [
        37211.0, 37230.0, 37236.0, 37249.0, 37320.0, 37391.0, 37416.0, 37465.0,
        37518.0, 37544.0,
      ],
    ];
    predic = [
      [
        6964043.0, 6971837.0, 6984405.0, 6998971.0, 7013229.0, 7022574.0,
        7033685.0, 7038954.0, 7046807.0, 7049807.0, 7055164.0, 7056072.0,
        7063219.0, 7073535.0, 7081463.53125, 7089444.2236328125,
        7097601.337890625, 7105997.2001953125, 7114558.9287109375,
        7123164.45703125,
      ],
      [
        1785978.190170288, 1786035.8525161743, 1786100.0039138794,
        1786165.2883148193, 1786234.2984771729, 1786297.3645858765,
        1786358.0383148193, 1786419.6512451172, 1786482.4566955566,
        1786550.6306228638, 1786612.5104904175, 1786681.5398864746,
        1786740.9402923584, 1786803.64163208, 1786861.6047401428,
        1786921.0244789124, 1786977.39163208, 1787036.3119735718,
        1787095.9706726074, 1787155.758026123,
      ],
      [
        37597.39309692383, 37629.20905685425, 37667.56357192993,
        37701.461921691895, 37738.23879241943, 37776.684829711914,
        37819.09037399292, 37864.70146560669, 37913.64143753052,
        37970.808208465576, 38023.66998672485, 38086.55614089966,
        38133.64389419556, 38179.21537399292, 38215.300243377686,
        38247.81618118286, 38277.15631866455, 38309.41456604004,
        38343.10090255737, 38378.866397857666,
      ],
    ];

    ddate = [
      -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
    ];
    ppast = [
      [64846098.0, 65412726.0, 66110391.0, 66687298.0, 67180227.0],
      [1775934.0, 1777881.0, 1780099.0, 1784603.0, 1786828.0],
      [37211.0, 37230.0, 37236.0, 37249.0, 37320.0],
    ];
    ppredic = [
      [
        67619980.25, 68042084.0, 68328122.3125, 68512093.53125, 68583835.71875,
        68408611.84375, 68135551.34375, 67763229.84375, 67100863.34375,
        65944762.09375, 64668780.96875, 63316618.59375, 61708974.96875,
        59502372.71875, 56219912.96875, 52514213.46875, 48913525.46875,
        45403275.71875, 41417417.71875, 36421475.21875, 29877203.21875,
        21385011.21875, 12842214.21875, 4416461.21875, -3855094.28125,
      ],
      [
        1788556.5447998047, 1790418.687133789, 1792400.2586669922,
        1794271.923828125, 1796065.3823242188, 1797840.5412597656,
        1799565.881225586, 1801248.9201660156, 1802967.5112304688,
        1804720.7122802734, 1806436.201538086, 1808093.892944336,
        1809733.0750732422, 1811366.3823242188, 1813022.9246826172,
        1814678.1629638672, 1816313.810180664, 1817929.9503173828,
        1819539.6801757812, 1821144.9567871094, 1822740.7241210938,
        1824325.3865966797, 1825929.4986572266, 1827549.622680664,
        1829157.325805664,
      ],
      [
        37391.0, 37416.0, 37465.0, 37518.0, 37544.0, 37597.39309692383,
        37629.20905685425, 37667.56357192993, 37701.461921691895,
        37738.23879241943, 37776.684829711914, 37819.09037399292,
        37864.70146560669, 37913.64143753052, 37970.808208465576,
        38023.66998672485, 38086.55614089966, 38133.64389419556,
        38179.21537399292, 38215.300243377686, 38247.81618118286,
        38277.15631866455, 38309.41456604004, 38343.10090255737,
        38378.866397857666,
      ],
    ];
    dateData = res.json({
      timedate: date,
      timepast: past,
      timepredic: predic,
      dailydate: ddate,
      dailypast: ppast,
      dailypredic: ppredic,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const session = require("express-session"); //express-session: 세션 모듈
const MySQLStore = require("express-mysql-session")(session); //세션 데이터 저장소
const path = require("path"); //path: 경로 모듈
const bodyParser = require("body-parser"); //request 처리
const bcrypt = require("bcrypt"); //비번 암호화에 이용할 모듈
const db = require("./lib/db"); //mysql

//undifined 문제 해결(데이터가 전달되지 않음)
//body를 파싱하여 클라이언트가 POST 요청한 데이터가 서버에게 제대로 전달되도록 함
app.use(express.static(path.join(__dirname, "/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//세션
var options = {
  //DB 연결 정보
  host: "127.0.0.1",
  user: "root",
  password: "20195268",
  database: "login", //데이터베이스 지정
  port: 3306,

  clearExpired: true, // 만료된 세션 자동 확인 및 지우기 여부
  checkExpirationInterval: 10000, // 만료된 세션이 지워지는 빈도 (milliseconds)
  expiration: 1000 * 60 * 60 * 2, // 유효한 세션의 최대 기간 2시간으로 설정 (milliseconds)
};
var sessionStore = new MySQLStore(options); //세션이랑 DB 연결
app.use(
  session({
    //세션 설정
    key: "session_cookie_name",
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

//req: 클라이언트가 서버에게 요청
//res: 서버가 클라이언트에게 응답

app.get("/", (req, res) => {
  //'/'경로에 get요청이 들어오면,
  req.sendFile(path.join(__dirname, "/youtube/build/index.html")); //index.html 파일을 클라이언트에게 전송
});

app.get("/authcheck", (req, res) => {
  //'/authcheck'경로에 get요청이 들어오면,
  const sendData = { isLogin: "" };
  if (req.session.is_logined) {
    //로그인이 되어 있음
    sendData.isLogin = "True";
  } else {
    //로그인이 안 되어 있음
    sendData.isLogin = "False";
  }
  res.send(sendData); //로그인 여부를 보내준다.
});

//로그아웃
app.get("/logout", function (req, res) {
  //'/logout'경로에 get요청이 들어오면,
  req.session.destroy(function (err) {
    //세션 삭제
    res.redirect("/");
  });
});

//로그인
app.post("/login", (req, res) => {
  //'/login'경로에 POST요청이 들어오면,
  //클라이언트로부터 입력받은 아이디와 비밀번호
  const username = req.body.userId;
  const password = req.body.userPassword;
  const sendData = { isLogin: "" }; //로그인 성공 여부

  if (username && password) {
    //아이디와 비밀번호가 입력되었는지 확인
    db.query(
      "SELECT * FROM signTable WHERE username = ?",
      [username],
      function (error, results, fields) {
        //입력받은 아이디와 일치하는 데이터를 MySQL DB userTable에서 모두 조회
        if (error) {
          throw error;
        }
        if (results.length > 0) {
          //일치하는 아이디가 있는 경우
          bcrypt.compare(password, results[0].hashpassword, (err, result) => {
            //입력된 비밀번호가 저장된 해시값과 같은 값인지 비교
            if (result === true) {
              // 비밀번호가 일치하는 경우
              req.session.is_logined = true; //로그인 O
              req.session.nickname = username;
              req.session.save(function () {
                //현재 세션 상태 저장
                sendData.isLogin = "True"; //클라이언트에게 로그인 성공했다고 알려줌
                res.send(sendData);
              });
            } else {
              //비밀번호가 다른 경우
              sendData.isLogin = "로그인 정보가 일치하지 않습니다.";
              res.send(sendData);
            }
          });
        } else {
          //아이디가 없는 경우
          sendData.isLogin = "아이디 정보가 일치하지 않습니다.";
          res.send(sendData);
        }
      }
    );
  } else {
    // 아이디, 비밀번호 중 입력되지 않은 값이 있는 경우
    sendData.isLogin = "아이디와 비밀번호를 입력하세요!";
    res.send(sendData);
  }
});

//회원가입
app.post("/signin", (req, res) => {
  //'/signin'경로에 POST요청이 들어오면,
  //클라이언트에서 가입하기 위해 입력한 아이디, 비밀번호
  const username = req.body.userId;
  const password = req.body.userPassword;
  const password2 = req.body.userPassword2;
  const api = req.body.userAPI;

  const sendData = { isSuccess: "" }; //가입 성공 여부

  if (username && password && password2 && api) {
    //모두 입력된 경우
    db.query(
      "SELECT * FROM signTable WHERE username = ?",
      [username],
      function (error, results, fields) {
        // DB에 같은 이름의 회원아이디가 있는지 확인
        if (error) {
          throw error;
        }
        if (results.length <= 0 && password == password2) {
          //일치하는 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우
          const hasedPassword = bcrypt.hashSync(password, 10); //입력된 비밀번호를 해시한 값
          db.query(
            "INSERT INTO signTable (username, hashpassword, APIkey) VALUES(?,?, ?)",
            [username, hasedPassword, api],
            function (error, data) {
              if (error) {
                throw error;
              }
              req.session.save(function () {
                //현재 세션 저장
                sendData.isSuccess = "True";
                res.send(sendData); //성공했다고 보내줌
              });
            }
          );
        } else if (password != password2) {
          //비밀번호가 다른 경우
          sendData.isSuccess = "입력된 비밀번호가 서로 다릅니다.";
          res.send(sendData); //실패
        } else {
          //같은 이름의 회원아이디가 존재하는 경우
          sendData.isSuccess = "이미 존재하는 아이디 입니다!";
          res.send(sendData); //실패
        }
      }
    );
  } else {
    //아이디 및 비밀번호가 입력되지 않은 경우
    sendData.isSuccess = "아이디와 비밀번호를 입력하세요!";
    res.send(sendData); //실패
  }
});

app.listen(port, () => {
  //3001번 포트번호로 서버 구동
  console.log(`Example app listening at http://localhost:${port}`);
});