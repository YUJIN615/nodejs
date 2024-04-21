// 실행만 하고 싶으면 변수에 담지 않아도 된다.
require('./2_var');

console.log(require);
// require 를 실행하면 main, extensions, cache 등의 정보가 나온다.
// main, cache 는 알아두는 것이 좋다.

// main
// 실행한 파일에 대한 정보

// cache
// 한 번 require 한 파일은 캐싱이 된다. 읽은 정보를 require.cache 에 저장한다.
// 하드 디스크에 있는 것을 메모리로 옮겨오는 것을 캐싱이라고 한다.
// 다시 불러올 때는 require.cache 에서 불러와서 빠르게 불러올 수 있다.
// 캐시를 삭제할 수도 있다.
