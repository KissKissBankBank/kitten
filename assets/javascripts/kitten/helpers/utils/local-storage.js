export const localStorageUtils = {
  isDefined() {
    return !!localStorage
  },
  set(key, value) {
    if (!this.isDefined()) return

    const stringValue = JSON.stringify(value)

    localStorage.setItem(key, stringValue)
  },
  get(key) {
    if (!this.isDefined()) return null

    const value = localStorage.getItem(key)
    let parsedValue

    try {
      parsedValue = JSON.parse(value)
    } catch (e) {
      parsedValue = value
    }

    return parsedValue
  },
}
