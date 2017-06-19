const utils = require('./utils');

it('should add two numbers', () => {
  var result = utils.add(3, 2);
  if (result !== 5) {
    throw new Error(`Expected: 5, but we got ${result}`);
  }
});

it('should square a number', () => {
  var result = utils.square(9);
  if (result !== 81) {
    throw new Error(`Expected: 81, but we got ${result}`);
  }
});