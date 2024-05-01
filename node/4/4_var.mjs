// ES 모듈은 공식적인 자바스크립트 표준 모듈 형식이다.
// CommonJs 모듈은 공식이 아니라 자체적인 표준 모듈이다.
// CommonJs 모듈도 점차 ES 모듈로 전환 될 것이다.

// ES 모듈은 확장자가 mjs 이다.
// 기본 js 확장자도 CommonJs가 표준이기 때문에 cjs 라고 하지 않는다.
// CommonJs 의 require는 함수이고 module은 객체이지만 ES 모듈의 import나 export default는 문법 그 자체이다.(예약어)

// 선언하면서 export 를 붙여서 바로 내보낼 수 있다.
export const odd = 'MJS 홀수입니다';
export const even = 'MJS 짝수입니다';
