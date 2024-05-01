const http = require('http');

const server1 = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html, charset=utf8'});
  res.write('<h1>Hello Node!</h1>');
  res.write('<h2>Hello server!!</h2>');
  res.end('<h3>Hello Yujin!!!</h3>');
})
  .listen(8080)

// listening 이벤트가 있어서 콜백으로 뺄 수도 있다.
server1.on('listening', () => {
  console.log('8080 포트에서 서버 대기 중입니다.')
})
server1.on('error', (error) => {
  console.log(error);
})


// 한번에 서버 두개를 동시에 실행할 수도 있다.
// 실제로 많이 사용할 일은 없다.
const server2 = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html, charset=utf8'});
  res.write('<h1>Hello Node!</h1>');
  res.write('<h2>Hello server!!</h2>');
  res.end('<h3>Hello Yujin!!!</h3>');
})
  .listen(8081)

server2.on('listening', () => {
  console.log('8081 포트에서 서버 대기 중입니다.')
})
server2.on('error', (error) => {
  console.log(error);
})
