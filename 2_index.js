const { odd, even } = require('./2_var');
// 가져올 때 변수명을 다르게 쓸 수 있다.
const checkNumber = require('./2_func');

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

// 중복을 막기 위해 파일을 작게 쪼개서 require 해서 사용한다.
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'))
