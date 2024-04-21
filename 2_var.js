// 노드는 자바스크립트 코드로 모듈을 만들 수 있다.
// 모듈: 특정한 기능을 하는 함수나 변수들의 집합
// 모듈로 만들면 여러 프로그램에서 재사용이 가능하다.

// 파일 끝에 module.export로 모듈로 만들 값을 지정
// 다른 파일에서 require(파일 경로)로 그 모듈의 내용을 가져올 수 있음

const odd = '홀수입니다.';
const even = '짝수입니다.';

// 다른 파일에서 쓰고싶은 변수를 내보내기
// module.exports 는 기본값이 빈 객체. exports 와 같다.
module.exports = {
  odd,
  even,
}

// 이렇게 써도 위와 같다.
// 하지만 같이 쓰면 참조 관계가 끊기기 때문에 같이 쓰면 안된다.
// modules.exports === exports === {}
// exports.odd = odd;
// exports.event = even;
