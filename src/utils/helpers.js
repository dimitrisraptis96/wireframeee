export function createArrayFromInt(range) {
  var x = [];
  for (var i = 1; i <= range; i++) {
    x.push(i);
  }
  return x;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // return Math.floor(Math.random() * (max - min)) + min;
}
