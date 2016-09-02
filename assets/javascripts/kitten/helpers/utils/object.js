const objectUtils = {
  /**
   * Returns an object.
   * This object is a partial copy of an object containing
   * only the keys specified. If the key does not exist, the property is
   * ignored. (Inspired from http://ramdajs.com/0.22.1/docs/#pick)
   *
   * @param {array} keys
   * @param {object} obj
   */
  pick(keys, obj) {
    return keys.reduce((memo, key) => {
      if (obj[key]) memo[key] = obj[key]
      return memo
    }, {})
  }
}

export default objectUtils
