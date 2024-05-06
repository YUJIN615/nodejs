const { isMainThread, Worker, parentPort, workerData } = require('worker_threads');

if (isMainThread) { // 메인스레드
  const threads = new Set();
  threads.add(new Worker(__filename, {
    workerData: { start: 1 },
  }));
  threads.add(new Worker(__filename, {
    workerData: { start: 2 },
  }));
  for (let worker of threads) {
    worker.on('message', (value) =>  console.log('워커로부터', value));
    worker.on('exit', () => {
      worker.postMessage('ping')
      threads.delete(worker);
      if (threads.size === 0) {
        console.log('워커 끝!');
      }
    });
  }
} else { // 워커스레드
  // workerData 로 데이터를 받아올 수 있다.
  const data = workerData;
  parentPort.postMessage(data.start + 100);
  // parentPort.on('message', (value) => {
  //   console.log('부모로부터', value);
  //   parentPort.postMessage('pong');
  //   parentPort.close();
  // })
}
