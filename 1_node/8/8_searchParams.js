const url = require('url');

const { URL } = url;
const myURL = new URL('https://www.inflearn.com/course/lecture?courseSlug=%EB%85%B8%EB%93%9C-js-%EA%B5%90%EA%B3%BC%EC%84%9C&unitId=143559&tab=curriculum')

console.log('searchParams', myURL.searchParams);
console.log('searchParams.getAll()', myURL.searchParams.getAll('courseSlug'));
console.log('searchParams.get()', myURL.searchParams.get('unitId'));
console.log('searchParams.has()', myURL.searchParams.has('tab'));

console.log('searchParams.keys()', myURL.searchParams.keys());
console.log('searchParams.values()', myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log('searchParams.append()', myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');
console.log('searchParams.set()', myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log('searchParams.delete()', myURL.searchParams.getAll('filter'));

console.log('searchParams.toString()', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
