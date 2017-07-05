var add = (a, b) => {
  return a + b;
};

var asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a+b);
  }, 1000);
};

var square = (n) => {
  return n * n;
};

var asyncSquare = (n, callback) => {
  setTimeout(() => {
    callback(n * n);
  }, 1000);
};

var setName = (user, fullName) => {
  var names = fullName.split(' ');
  if (names.length === 1) {
    user.firstName = names[0];
  } else {
    user.firstName = names[0];
    user.lastName = names[1];
  }
  return user;
};

module.exports = {
  add,
  asyncAdd,
  asyncSquare,
  square,
  setName
};