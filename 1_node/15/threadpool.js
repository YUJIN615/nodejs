const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

// 4개씩 끊어서 나온다.
// UV_THREADPOOL_SIZE={n} 명령어로 한번에 실행한 스레드를 조정할 수 있다. 컴퓨터 코어에 맞게 조절하면 된다.
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('1', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('2', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('3', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('4', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('5', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('6', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('7', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('8', Date.now() - start);
})
