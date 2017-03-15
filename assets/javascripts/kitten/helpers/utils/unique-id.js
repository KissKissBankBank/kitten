/**
* Set uniq id for `id` attribute tag
*/
export const uniqueIdUtils = {
  count: 1,

  resetId() {
    this.count = 1
  },

  getNextId(idName) {
    return `${idName}-${this.count++}`
  }
}
