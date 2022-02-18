import { pxToRem, stepToRem } from 'kitten'

describe('typography helpers', () => {
  describe('pxToRem : 16px', () => {
    const range = pxToRem(16)

    it('returns "1rem"', () => {
      expect(range).toEqual('1rem')
    })
  })
  describe('stepToRem : 4', () => {
    const range = stepToRem(4)

    it('returns "1.5rem"', () => {
      expect(range).toEqual('1.5rem')
    })
  })
  describe('stepToRem : -2', () => {
    const range = stepToRem(-2)

    it('returns "0.75rem"', () => {
      expect(range).toEqual('0.75rem')
    })
  })
})
