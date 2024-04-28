const crypto = require('crypto');

// 사용 가능한 알고리즘 목록은 crypto.getCiphers() 로 확인 가능
const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

// 암호화 알고리즘과 키, 초기화벡터를 넣어준다.
const cipher = crypto.createCipheriv(algorithm, key, iv);
// 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣어준다.
// 보통 문자열은 utf8 인코딩을, 암호는 base64를 많이 사용한다.
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
// 출력 결과물의 인코딩을 넣어주면 암호화가 완료된다.
result += cipher.final('base64');
console.log('암호화', result);

// 복호화할 때 사용한다. 암호화할 때 사용했던 알고리즘, 키, iv를 그대로 넣어준다.
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result += decipher.final('utf8');
console.log('복호화', result2);

// 인코딩: 유니코드를 컴퓨터가 알아볼 수 있는 binary로 바꿔주는 것
// utf-8: 인코딩하는 방법중 하나. 다른 인코딩 방식보다 평균적으로 적은 메모리를 사용하고 호환문제도 덜하다.
// base64: binary data를 역으로 ASCII 영역의 문자열로 인코딩하는 방식. 64는 64진법을 뜻한다.
