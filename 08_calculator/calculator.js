const add = function(nr1, nr2) {
	return nr1 + nr2;
};

const subtract = function(nr1, nr2) {
	return nr1 - nr2;
};

const sum = function(array) {
	return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr);
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(nr) {
	if (nr === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= nr; i++) {
    result *= i;
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
