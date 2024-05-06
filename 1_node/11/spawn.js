const spawn = require('child_process').spawn;

// 새로운 프로세스를 띄워서 파이썬을 호출할 수 있음
// python 이 깔려있어야 함
const process = spawn('python', ['test.py']);

process.stdout.on('data', function(data) {
  console.log(data.toString());
})

process.stderr.on('data', function(data) {
  console.error(data.toString());
})
