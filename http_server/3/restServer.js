const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// POST 할 때 데이터 저장용 객체가 존재해야 실행된다.
const users = {}; // 데이터 저장용

http.createServer(async (req, res) => {
  try {
    // req는 요청에 관한 정보를 알 수 있다
    // 주소창에 치는 것은 GET 요청
    if (req.method === 'GET') {
      // 주소 맨 뒤에 / 가 생략되어 있다.
      if (req.url === '/') {
        const data = await fs.readFile(path.join(__dirname, 'restFront.html'));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        // 요청이 성공했다는 것을 알려주는 것
        // 성공하먼 Response Headers에 정보를 넣어준다.
        // 헤더란 데이터에 대한 정보를 의미한다.
        // Request Headers는 요청에 대한 정보이다. 브라우저가 넣어줌
        // Accept에 맞지 않는 데이터 들어오면 브라우저가 거부함
        return res.end(data);
      } else if (req.url === '/about') {
        const data = await fs.readFile(path.join(__dirname, 'about.html'));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/users') {
        // json 형식으로 보낼 때는 JSON.stringify 를 해줘야 한다.
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(users));
      }
      // /도 /about도 /users도 아니면
      try {
        const data = await fs.readFile(path.join(__dirname, req.url));
        return res.end(data);
      } catch (err) {
        // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
      }
    } else if (req.method === 'POST') {
      if (req.url === '/user') {
        let body = '';
        // 요청의 body를 stream 형식으로 받음
        req.on('data', (data) => {
          body += data;
        });
        // 요청의 body를 다 받은 후 실행됨
        return req.on('end', () => {
          console.log('POST 본문(Body):', body);
          const { name } = JSON.parse(body);
          const id = Date.now();
          users[id] = name;
          // 201 코드는 요청이 성공적이고 새로운 리소스가 생성되었다는 의미
          res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('등록 성공');
        });
      }
    } else if (req.method === 'PUT') {
      if (req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log('PUT 본문(Body):', body);
          users[key] = JSON.parse(body).name;
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end(JSON.stringify(users));
        });
      }
    } else if (req.method === 'DELETE') {
      if (req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        delete users[key];
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end(JSON.stringify(users));
      }
    }
    // 아무곳에도 걸리지 않을 때
    res.writeHead(404);
    return res.end('NOT FOUND');
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다');
  });
