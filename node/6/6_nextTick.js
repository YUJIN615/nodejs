setImmediate(() => {
  console.log('immediate')
});

process.nextTick(() => {
  console.log('nextTick')
});

setTimeout(() => {
  console.log('timeout')
}, 0);

Promise.resolve().then(() => console.log('promise'));

// 실행순서: nextTick > promise > timeout > immediate
// timeout 0 과 immediate 는 환경에 따라 실행순서가 다르다. timeout 0은 사용하지 말기
