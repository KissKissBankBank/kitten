import { createRangeFromZeroTo } from '../../helpers/utils/range'

describe('utils range', () => {
  describe('createRangeFromZeroTo range 2', () => {
    const range = createRangeFromZeroTo(2)

    it('return the array 0 to 1', () => {
      expect(range).toEqual([0, 1])
    })
  })

  describe('createRangeFromZeroTo range 7', () => {
    const range = createRangeFromZeroTo(7)

    it('return the array 0 to 6', () => {
      expect(range).toEqual([0, 1, 2, 3, 4, 5, 6])
    })
  })

  describe('createRangeFromZeroTo range 1', () => {
    const range = createRangeFromZeroTo(1)

    it('return the array 0', () => {
      expect(range).toEqual([0])
    })
  })

  describe('createRangeFromZeroTo range 0', () => {
    const range = createRangeFromZeroTo(0)

    it('return the array empty', () => {
      expect(range).toEqual([])
    })
  })

  describe('createRangeFromZeroTo range undefined', () => {
    const range = createRangeFromZeroTo()

    it('return the array empty', () => {
      expect(range).toEqual([])
    })
  })

  describe('createRangeFromZeroTo range string', () => {
    const range = createRangeFromZeroTo('toto')

    it('return the array empty', () => {
      expect(range).toEqual([])
    })
  })
})
