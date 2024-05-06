// require 는 nodejs 에서 제공해준다.
// export 한 값을 가져와서 사용할 수 있다.
// 구조분해 할당으로 가져올 수 있다.
const { odd, even } = require('./2_var')

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

// 함수를 다시 export 할 수 있다.
// module.exports 는 한 번만 사용할 수 있다.
module.exports = checkOddOrEven;
