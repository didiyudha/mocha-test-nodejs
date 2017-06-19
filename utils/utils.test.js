const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var result = utils.add(3, 2);
  expect(result).toBe(5).toBeA('number');
});

it('should square a number', () => {
  var result = utils.square(9);
  expect(result).toBe(81).toBeA('number');
});

it('should equal object', () => {
  // toEqual used for comparing between two objects
  expect({name: 'Didi Yudha Perwira'}).toEqual({name: 'Didi Yudha Perwira'});
});

it('should contains element in a list', () => {
  expect([1, 2, 3, 4, 5]).toInclude(5);
});

it('should not contains element in a list', () => {
  expect([1, 2, 3, 4, 5]).toExclude(10);
});

it('should contains equal attribute in an object', () => {
  expect({
    name: 'Didi Yudha Perwira',
    age: 25
  }).toInclude({
    name: 'Didi Yudha Perwira'
  });
});

it('should not equal attribute in an object', () => {
  expect({
    name: 'Didi Yudha Perwira',
    age: 25
  }).toExclude({
    address: 'Jakarta'
  });
});

it('should first name and last name', () => {
  var fullName = 'Didi Yudha Perwira';
  var usr = {};
  var user = utils.setName(usr, fullName);
  expect(user).toEqual({
    firstName: 'Didi',
    lastName: 'Yudha'
  });
});

it('should not include first name and last name', () => {
  var fullName = 'Didi Yudha Perwira';
  var usr = {};
  var user = utils.setName(usr, fullName);
  expect(user).toExclude({
    age: 25,
    address: 'Jakarta'
  });
});
