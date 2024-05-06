const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
})
writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다. \n');
writeStream.end(); // end가 되면 finish 가 실행된다.
