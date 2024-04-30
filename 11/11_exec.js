// 노드 프로세스 외에 다른 프로세스를 하나 더 띄운다.
const exec = require('child_process').exec;

// 다른 프로세스 위에 'ls'라는 명령어를 치는 것과 비슷하다.
// 노드에서도 다른 명령어를 칠 수 있게 만들어준다.
const process = exec('ls');

process.stdout.on('data', function(data) {
  // 데이터를 가져와서 사용할 수 있다.
  console.log(data.toString('utf8'));
})

process.stderr.on('data', function(data) {
  console.error(data.toString('utf8'));
})
