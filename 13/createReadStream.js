const fs = require('fs');
// 스트림 방식으로 파일을 읽어온다.
// 한번에 64kb 를 읽어와서 더 작게 쪼개려면 highWaterMark 를 사용한다.
const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 });

// 조각난 파일을 합쳐서 불러와야 한다.
const dataArr = []
readStream.on('data', (chunk) => {
  dataArr.push(chunk)
  console.log('data', chunk, chunk.length);
})
readStream.on('end', (data) => {
  console.log('end', dataArr.concat(data).toString('utf8'))
})
readStream.on('error', (err) => {
  console.log('error', err)
})
