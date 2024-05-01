const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('이벤트1')
})

// 콜백 2개 추가
myEvent.addListener('event2', () => {
  console.log('이벤트2')
})
myEvent.addListener('event2', () => {
  console.log('이벤트2 추가')
})

// 이벤트 여러번 호출해도 한번만 실행됨
myEvent.once('event3', () => {
  console.log('이벤트3')
})

myEvent.on('event4', () => {
  console.log('이벤트 4');
})
// 이벤트 삭제. 모든 콜백 이벤트가 삭제된다.
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안됨

const listener = () => {
  console.log('이벤트5')
}
const listener2 = () => {
  console.log('이벤트5 추가')
}
myEvent.on('event5', listener);
myEvent.on('event5', listener2);
// 여러 콜백 함수중에 특정한 것만 삭제하고 싶을 때
myEvent.removeListener('event5', listener);
myEvent.emit('event5');


// 이벤트 호출
myEvent.emit('event1')
myEvent.emit('event2')

myEvent.emit('event3')
myEvent.emit('event3')

// 등록된 콜백 함수 개순
console.log(myEvent.listenerCount('event2'));
