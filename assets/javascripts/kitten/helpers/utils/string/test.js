import { stringUtils } from 'kitten'

describe('upcaseFirst()', () => {
  it('converts a first character to uppercase', () => {
    const string = stringUtils.upcaseFirst('lorem ipsum…')
    expect(string).toBe('Lorem ipsum…')
  })

  it('preserves the capital on the first character', () => {
    const string = stringUtils.upcaseFirst('Lorem ipsum…')
    expect(string).toBe('Lorem ipsum…')
  })

  it('returns the same value when the string is not valid', () => {
    const string = stringUtils.upcaseFirst({ text: 'lorem ipsum…' })
    expect(typeof string).toBe('object')
    expect(string.text).toBe('lorem ipsum…')
  })
})
