const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8084');
    const name = url.searchParams.get('name');
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    // 302는 아래 주소로 리다이렉션 하라는 의미
    // Expires 는 만료시간. 이걸 안쓰면 세션쿠키가 된다.
    // 세션쿠키는 브라우저를 끄는 순간 쿠키가 사라진다.
    // 만료된 쿠키는 브라우저에서 서버로 안보내준다.
    // HttpOnly > 자바스크립트로 접근하지 못하게 한다. js로 접근하면 보안상 위험할 수 있음. 로그인을 위해서 사용하는 쿠키는 HttpOnly가 필수
    // Path=/ > / 아래의 주소에서는 쿠키가 유효하다는 의미
    // 쿠키에는 안정장치들이 마련되어 있기 때문에 로그인 할 때는 쿠키를 사용하는 것이 안전하다.
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
    // name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });
