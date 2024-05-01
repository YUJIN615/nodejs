const path = require('path');


// 현재 폴더 경로에 var.js를 붙여준다.
// 운영체제별로 구분자가 알아서 붙는다.
// 맥 > study/side/nodejs/var.js
// 윈도우 > study\side\nodejs\var.js함
path.join(__dirname, 'var.js');

// 부모로 올라갈 수도 있음
// study/side/var.js
path.join(__dirname, '..', 'var.js');

// 절대경로를 붙이면 절대경로에 생성된다. 앞에 붙은 경로가 무시된다.
// C:/var.js
path.resolve(__dirname, '..', '/var.js')
