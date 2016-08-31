const numberUtils = {
  /**
   * Returns if a variable is a number or not.
   */
  isNumber(number) {
    const float = parseFloat(number)
    return (!isNaN(float) && float + '' == number + '')
  }
}

export default numberUtils
