const timeout = setTimeout(() => {
  console.log('1.5초 후 실행')
}, 1500);

const interval = setInterval(() => {
  console.log('1초마다 실행')
}, 1000)

const timeout2 = setTimeout(() => {
  console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
})

const immediate2 = setImmediate(() => {
  console.log('실행되지 않습니다.');
})

clearImmediate(immediate2);

// 콘솔 출력: 즉시 실행 > 1초마다 실행 > 1.5초 후 실행 > 1초마다 실행
// 실행 순서 : immediate > immediate2 > interval > timeout > interval > timeout2 x > interval x
