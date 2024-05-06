const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16});
const zlibStream = zlib.createGzip(); // 압축해주기
const writeStream = fs.createWriteStream('./writeme.txt');
const writeStream2 = fs.createWriteStream('./writeme2.txt.gz');

// readme 파일에 있는 내용을 writeme 파일에 복사하기
readStream.pipe(writeStream);
readStream.pipe(zlibStream).pipe(writeStream2);
