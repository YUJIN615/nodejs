const fs = require('fs');

// 메모리 체크
console.log('before:', process.memoryUsage().rss); // 27181056

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('steam:', process.memoryUsage().rss); // 91717632 > 메모리를 효율적으로 사용
})
