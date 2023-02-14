function camelize(text) {
  return text.split("-").map((value, index, array) =>
      value[0].toUpperCase() + value.slice(1)).join("")
}

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

function filterRange(arr, a, b) {
  arr = arr.filter(item => (a <= item && item <= b));
}

arr.sort((a, b) => b - a);

function copySorted(arr) {
  return Array.of(arr).sort();
}

function Calculator() {
  this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
  };

  this.calculate = function(str) {
      let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
      }

      return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
      this.methods[name] = func;
  };
}

users.map(item => item.name);

users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


function unique(arr) {
  let result = [];

  for (let str of arr) {
      if (!result.includes(str)) {
          result.push(str);
      }
  }

  return result;
}

function groupById(array) {
  return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
  }, {})
}