export var numberUtils = {
  /**
   * Returns if a variable is a number or not.
   */
  isNumber: function isNumber(number) {
    var float = parseFloat(number);
    return !isNaN(float) && float + '' == number + '';
  }
}; // DEPRECATED: do not use default export.

export default numberUtils;