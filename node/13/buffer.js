const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from()', buffer); // 버퍼 데이터 형식은 16진법
console.log('length', buffer.length);
console.log('toString():', buffer.toString());

// 조각난 파일을 모아서 버퍼로 모아주기
const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기 '),];
const buffer2 = Buffer.concat(array);
console.log('concat()', buffer2.toString());

// 빈 버퍼를 만들어줄 때
const buffer3 = Buffer.alloc(5);
console.log('alloc()', buffer3);
