import { hexToRgba } from './hex-to-rgba'

describe('hexToRgba()', () => {
  it('converts short hex color', () => {
    const hex = '#369'

    expect(hexToRgba(hex, 0.5)).toBe('rgba(51,102,153,0.5)')
  })

  it('converts long hex color', () => {
    const hex = '#3f6f9f'

    expect(hexToRgba(hex, 0.5)).toBe('rgba(63,111,159,0.5)')
  })

  it('converts hex without # or alpha', () => {
    const hex = '3f6f9f'

    expect(hexToRgba(hex)).toBe('rgba(63,111,159,1)')
  })

  it('handles bad hex', () => {
    const hex = '123xyz'

    expect(hexToRgba(hex)).toBe('rgba(0,0,0,1)')
  })

  it('handles null', () => {
    const hex = null

    expect(hexToRgba(hex)).toBe('rgba(0,0,0,1)')
  })
})
