// dotenv는 최대한 위에서 불러오는 것이 좋다. 그래야 프로그램이 제대로 동작함
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
// multer 설정
const upload = multer({
  storage: multer.diskStorage({
    // 어디에 저장할지
    destination(req, file, done) {
      // done(에러 났을 때 처리하는 미들웨어, 성공했을 때 값)
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 어떤 이름으로 올릴지
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 설정한 multer를 라우터에 장착
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});
// 한 라우터에서만 미들웨어 적용
// 한번에 하나만 업로드하면 single, 여러개 업로드 하면 array, 하나씩 여러개 받을때는 fields 객체, 이미지 업로드 안하면 none
// 파일과 정보를 같이 받을 수 있음. 정보는 req.body로 받는다.
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('ok');
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
