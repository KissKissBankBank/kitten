window.isNumber = function(number) {
  const float = parseFloat(number)
  return (!isNaN(float) && float + '' == number + '')
}
