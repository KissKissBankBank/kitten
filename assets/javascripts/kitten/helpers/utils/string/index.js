export const stringUtils = {
  /**
   * Converts the first character to uppercase.
   */
  upcaseFirst(str) {
    if (!str || typeof str !== 'string') return str

    return str.charAt(0).toUpperCase() + str.slice(1)
  },
}

// Prefer specific export
export const upcaseFirst = stringUtils.upcaseFirst
