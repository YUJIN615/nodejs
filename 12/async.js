const fs = require('fs');

// readFile 은 비동기 함수여서 실행 순서를 예측할 수 없다.
fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('1번', data.toString());
})
fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('2번', data.toString());
})
fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('3번', data.toString());
})
fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('4번', data.toString());
})
