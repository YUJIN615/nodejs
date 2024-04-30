import { odd, even } from './4_var.mjs';
import checkNumber from './4_func.mjs';

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
