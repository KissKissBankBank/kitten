export var createRangeFromZeroTo = function createRangeFromZeroTo(num) {
  var array = []; // We intentionally don't use `Number.isInteger` directly because it breaks IE
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/isInteger

  if (num !== parseInt(num, 10)) return array;

  for (var i = 0; i < num; i++) {
    array.push(i);
  }

  return array;
};