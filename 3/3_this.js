// 전역(anonymous) 에서의 this 는 global 이 아니다.
console.log('this', this); // {}
console.log(this === module.exports); // true

// function 안에서의 this 는 global 이다.
function a () {
  console.log('function this', this); // global
  console.log(this === global); // true
}

// this === module.exports === exports === {} 이다.

a();
