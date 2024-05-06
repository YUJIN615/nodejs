const https = require('https');
const fs = require('fs');

// https 를 사용하면 인수가 하나 더 추가된다.
// cert, key, ca를 넣어줘야 한다.
// 암호화 해서 보내는데 인증서를 인증기관에서 받아와야 한다. > letsencrypt
// 서버가 시작되기 전에 인증서를 넣어줘야 한다.
// ca를 안넣고 https 를 돌리면 인증서에 문제가 있다고 뜸
https.createServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });
