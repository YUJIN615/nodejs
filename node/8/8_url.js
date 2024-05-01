const url = require('url');

const { URL } = url;
const myURL = new URL('https://www.inflearn.com/course/lecture?courseSlug=%EB%85%B8%EB%93%9C-js-%EA%B5%90%EA%B3%BC%EC%84%9C&unitId=143559&tab=curriculum')

console.log('new URL()', myURL);
console.log('url.format()', url.format(myURL));
