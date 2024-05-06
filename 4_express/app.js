const express = require('express');
const path = require('path');
const app = express();

// 서버에 port 속성을 설정한다. 전역 변수같은 역할
// SET PORT=80 과 같이 터미널에 입력해서 설정할 수 있지만 그러면 기본값이 바뀌기 때문에 사용을 지양한다.
app.set('port', process.env.PORT || 3000);

// use 미들웨어.
// 주소를 안쓰면 모든 요청에 실행되고, 주소를 쓰면 그 주소에서만 실행된다.
// 요청을 연달아서 실행할 수 있다.
app.use((req, res, next) => {
  console.log('모든 요청에 실행해요');
  // throw new Error('에러가 났어요')

  try {
    console.log(abc);
  } catch (error) {
    console.log('error');
    // try~catch문에서 에러 발생하면 next로 에러를 넘긴다.
    // next의 인수가 없으면 넘어가고 인수가 있으면 에러로 처리되어서 에러처리 미들웨어로 넘어간다.
    next(error)
  }
  // next를 실행해야 일치하는 다음 요청으로 넘어간다.
  next();
}, (req, res, next) => {
  console.log('이어서 실행해요');
  next();
})
app.use('/about', (req, res, next) => {
  console.log('about 요청에 실행해요');
  next();
})

// http 메서드와 url
// 메서드별로 나눠서 코드를 실행할 수 있다.
app.get('/', (req, res) => {
  // res.writeHead() 와 res.end() 가 합쳐진 것이 express의 res.send() 이다.

  // 하나의 라우터에서 res.send, res.sendFile, res.json 등을 여러개 사용하면 에러가 난다.
  // 요청 하나에는 응답 하나만 보내야 한다.
  res.sendFile(path.join(__dirname, 'index.html'));

  // 응답을 보낸 후 writeHead() 를 써도 에러가 난다.
})

app.post('/', (req, res) => {
  res.send('hello express');
})

app.get('/about', (req, res) => {
  res.send('about');
})

// 위에서 부터 실행되기 때문에 겹치는 라우트가 있으면 첫 번째 명령이 실행됨
app.get('/category/javascript', (req, res) => {
  res.send(`category javascript!!`);
})

// 와일드카드: /category 경로 하위의 경로가 여기서 걸림
app.get('/category/:name', (req, res) => {
  // 이렇게 넣으면 라우터 매개변수 name 으로 넣은 변수가 그대로 들어감
  res.send(`category ${req.params.name}`);
})

// * 는 모든 경로가 다 걸린다.
// 와일드카드 같이 범위가 넓은 라우터는 아래에 넣어줘야 함
// app.get('*', (req, res) => {
//   res.send('hello everybody');
// })

// 404 처리용 미들웨어
// * 처리가 없어야 적용됨
app.use((req, res, next) => {
  res.status(404).send('404 에러났지롱')
})

// 에러처리도 미들웨어가 해준다.
// 4개의 매개변수를 반드시 모두 사용해야 한다.
app.use((err, req, res, next) => {
  console.error(err);
  // 에러가 났어도 status 를 설정해서 다른 상태값을 내려줄 수 있함
  // 기본값은 200
  res.status(500).send('에러가 났어요.')
})

app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
});

// node app 명령어로 실행
