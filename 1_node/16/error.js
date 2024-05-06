setInterval(() => {
  console.log('시작');
  try {
    throw new Error('서버 고장내기');
  } catch(err) {
    // throw 로 발생한 에러를 catch로 받는다.
    // 에러가 아닌 것처럼 처리한다.
    // 코드가 계속 실행된다.
    // try catch 문이 없으면 코드가 한번 실행되고 끝난다.
    console.error(err);
  }
}, 1000)
