import {
  pxToRem,
  pxModularScale,
  modularScale,
} from '../../helpers/utils/typography'

describe('typography helpers', () => {
  describe('pxToRem : 16px', () => {
    const range = pxToRem(16)

    it('returns "1rem"', () => {
      expect(range).toEqual('1rem')
    })
  })
  describe('pxModularScale : 4', () => {
    const range = pxModularScale(4)

    it('returns "25.63"', () => {
      expect(range).toEqual('25.63')
    })
  })
  describe('modularScale : 4', () => {
    const range = modularScale(4)

    it('returns "1.601875rem"', () => {
      expect(range).toEqual('1.601875rem')
    })
  })
})
