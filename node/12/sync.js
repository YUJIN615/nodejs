const fs = require('fs');

// readFileSync 를 사용하면 동기 함수가 된다. 그럼 콜백을 안 써도 된다.
let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());
