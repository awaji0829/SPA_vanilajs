import path from 'path';
import express from 'express';

// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve('frontend', 'index.html'));
// });

// app.listen(process.env.PORT || 5060, () => console.log('server'));
// 공홈의 예제

//express로드 , 이를 통해 express모듈을 제어한다.
//express()가 application함수를 로드한다. 그것을 app변수에 선언하여 어플리케이션을 만든다.
const app = express();
//포트 지정
const port = 4000;
const __dirname = path.resolve();
//middleware이다.
//client가 "/"경로에 get 요청을 보내면
//req는 요청객체, res는 응답객체 이다.
app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);
app.get('/*', (req, res) => {
  //응답 콜백 함수

  // res.send('Hello World!');
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

//middleware
//port에 접속 성공하면 콜백 함수를 실행시킨다.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
