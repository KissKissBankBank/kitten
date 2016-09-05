const assignUtils = {
  /**
   * Returns a single value or an array of values.
   * If an array is provided, it fills this array. If not, it returns the value.
   *
   * @param {array} arr
   * @param {string|object|number|array} val
   */
  singleValueOrToArray(arr, val) {
    if (Array.isArray(arr)) {
      return arr.concat(val)
    } else if (arr) {
      return [arr, val]
    }

    return val
  }
}

export default assignUtils
