const fs = require('fs');

// 콜백을 사용해서 비동기를 실행하면 순서대로 된다.
// 동기 함수를 사용하면 실행한 모든 함수가 순서대로 실행됨
// 비동기 함수를 콜백으로 순차적으로 사용하면 실행한 함수가 백그라운드에 쌓이게 된다.
// 문법상 보기 안좋기 때문에 promise 를 사용하는 것이 좋다.
fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('1번', data.toString());
  const fs = require('fs');

  fs.readFile('./readme.txt', (err, data) => {
    if(err) {
      throw err;
    }
    console.log('2번', data.toString());
    fs.readFile('./readme.txt', (err, data) => {
      if(err) {
        throw err;
      }
      console.log('3번', data.toString());
      fs.readFile('./readme.txt', (err, data) => {
        if(err) {
          throw err;
        }
        console.log('4번', data.toString());
      })
    })
  })
})
