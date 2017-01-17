import { expect } from 'chai'
import { stringUtils } from 'kitten/helpers/utils/string'

describe('upcaseFirst()', () => {
  it('converts a first character to uppercase', () => {
    const string = stringUtils.upcaseFirst('lorem ipsum…')
    expect(string).to.be.equal('Lorem ipsum…')
  })

  it('preserves the capital on the first character', () => {
    const string = stringUtils.upcaseFirst('Lorem ipsum…')
    expect(string).to.be.equal('Lorem ipsum…')
  })

  it('returns the same value when the string is not valid', () => {
    const string = stringUtils.upcaseFirst({ text: 'lorem ipsum…' })
    expect(string).to.be.an('object')
    expect(string.text).to.be.equal('lorem ipsum…')
  })
})
