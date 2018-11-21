export const createRangeFromZeroTo = num => {
  let array = []
  if (!Number.isInteger(num)) {
    return array
  }
  for (let i = 0; i < num; i++) {
    array.push(i)
  }
  return array
}
