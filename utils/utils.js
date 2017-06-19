var add = (a, b) => {
  return a + b;
};

var square = (n) => {
  return n * n;
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
  square,
  setName
};