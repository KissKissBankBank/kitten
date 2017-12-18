import arrayKeys from 'core-js/library/fn/array/keys'
import arrayFrom from 'core-js/library/fn/array/from'

export const createRangeFromZeroTo = (num) => arrayFrom(arrayKeys(Array(num)))
