import { expect } from 'chai'
import { uniqueIdUtils } from 'kitten/helpers/utils/unique-id'

describe('getNextId()', () => {
  it('returns a string starting at 1', () => {
    const id = uniqueIdUtils.getNextId('k-MyComponent')
    expect(id).to.be.equal('k-MyComponent-1')
  })

  it('increments the string when called twice', () => {
    const id = uniqueIdUtils.getNextId('k-MyComponent')
    expect(id).to.be.equal('k-MyComponent-2')
  })

  it('returns another string starting at 1', () => {
    const id = uniqueIdUtils.getNextId('k-AnotherComponent')
    expect(id).to.be.equal('k-AnotherComponent-1')
  })
})

describe('resetId()', () => {
  it('reset id', () => {
    uniqueIdUtils.getNextId('k-MyComponent')
    uniqueIdUtils.getNextId('k-AnotherComponent')
    uniqueIdUtils.resetId()

    const id = uniqueIdUtils.getNextId('k-MyComponent')
    const id2 = uniqueIdUtils.getNextId('k-AnotherComponent')

    expect(id).to.be.equal('k-MyComponent-1')
    expect(id2).to.be.equal('k-AnotherComponent-1')
  })
})
