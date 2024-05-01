const fs = require('fs').promises; // promises 를 붙이면 프로미스 처리를 할 수 있게 된다.

// promises 안붙이면 아래와 같이 씀
fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // binary data 로 나옴 (2진법을 16진법으로 바꾼 것)
  console.log(data.toString()); // toString() 을 해줘야 변환해서 나옴게
})

// promises 붙이면 아래와 같이 씀
fs.readFile('./readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
})
