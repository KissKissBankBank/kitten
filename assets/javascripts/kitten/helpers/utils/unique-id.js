/**
* Set uniq id for `id` attribute tag
*/
export const uniqueIdUtils = {
  // eg: {id_name: 1, id_name_2: 4}
  // where id_name is the id name and 1 or 4 is the occurence counter
  counterId: {},

  countId(idName) {
    if(!this.counterId[idName]) {
      this.counterId[idName] = 1
    } else {
      this.counterId[idName] += 1
    }
  },

  resetId() {
    this.counterId = {}
  },

  getNextId(idName) {
    this.countId(idName)

    return `${idName}-${this.counterId[idName]}`
  }
}
