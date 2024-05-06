const fs = require('fs');

// 메모리 사용량 체크
console.log('before:', process.memoryUsage().rss); // 27525120

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer:', process.memoryUsage().rss); // 1008648192 > 메모리 사용량이 크게 증가
