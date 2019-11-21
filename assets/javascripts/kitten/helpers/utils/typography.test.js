import { pxToRem, stepToRem } from '../../helpers/utils/typography'

describe('typography helpers', () => {
  describe('pxToRem : 16px', () => {
    const range = pxToRem(16)

    it('returns "1rem"', () => {
      expect(range).toEqual('1rem')
    })
  })
  describe('stepToRem : 4', () => {
    const range = stepToRem(4)

    it('returns "1.601806640625rem"', () => {
      expect(range).toEqual('1.601806640625rem')
    })
  })
  describe('stepToRem : -2', () => {
    const range = stepToRem(-2)

    it('returns "0.7901234567901234rem"', () => {
      expect(range).toEqual('0.7901234567901234rem')
    })
  })
})
