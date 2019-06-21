import { getColor } from '../../helpers/utils/get-color'

describe('getColor helper', () => {
  describe('getColor("primary3")', () => {
    const color = getColor('primary3')

    it('returns "#0496cc"', () => {
      expect(color).toEqual('#0496cc')
    })
  })
  describe('getColor("background")', () => {
    const color = getColor('background')

    it('returns "#fff"', () => {
      expect(color).toEqual('#fff')
    })
  })
  describe('getColor("greenLighter", {invert:true})', () => {
    const color = getColor('greenLighter', { invert: true })

    it('returns "#000"', () => {
      expect(color).toEqual('#000')
    })
  })
  describe('getColor("fake color name")', () => {
    it('throws an exception', () => {
      expect(() => getColor('fake color name')).toThrow(
        'getColor() exception: provided color argument doesn’t exist',
      )
    })
  })
})
