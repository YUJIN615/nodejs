const http = require('http');

http.createServer((req, res) => {
  // 응답이 오면 작업 수행 > 스트림 작업

  // 사파리는 문자열인지 태그인지 한글인지 구분을 못해서 알려줘야 함
  res.writeHead(200, {'Content-Type': 'text/html, charset=utf8'});
  res.write('<h1>Hello Node!</h1>');
  res.write('<h2>Hello server!!</h2>');
  res.end('<h3>Hello Yujin!!!</h3>');
})
.listen(8080, () => {
  // 8080 포트의 프로세스에 올리겠다는 의미
  // 서버를 올리면 터미널 하나가 켜지고 동작 대기
  // 포트 하나는 하나의 프로그램
  // 코드를 수정하면 서버를 껐다가 켜야함
  // 배포할때는 80 으로 배포하면 포트번호 없이 도메인으로 접속하면 됨
  console.log('8080 포트에서 서버 대기 중입니다.')
});
