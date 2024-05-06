const http = require('http');
const fs = require('fs').promises;

const server1 = http.createServer(async (req, res) => {
  try {
    res.writeHead(200, {'Content-Type': 'text/html, charset=utf8'});
    // html 파일 가져와서 읽기
    const data = await fs.readFile('./server.html');
    res.end(data);
  } catch (error) {
    console.error(error);
    // 에러 처리는 일반 문자열로 한다. (plain)
    res.writeHead(200, {'Content-Type': 'text/plain, charset=utf8'});
    res.end(err.message);
  }
})
  .listen(8080)

server1.on('listening', () => {
  console.log('8080 포트에서 서버 대기 중입니다.')
})
server1.on('error', (error) => {
  console.log(error);
})
