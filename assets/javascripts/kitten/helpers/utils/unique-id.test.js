import { expect } from 'chai'
import { uniqueIdUtils } from 'kitten/helpers/utils/unique-id'

describe('getNextId()', () => {
  it('get next id', () => {
    const id = uniqueIdUtils.getNextId('k-MyComponent')
    expect(id).to.be.equal('k-MyComponent-1')
  })

  it('get next id', () => {
    const id = uniqueIdUtils.getNextId('k-MyComponent')
    expect(id).to.be.equal('k-MyComponent-2')
  })

  it('get next id', () => {
    const id = uniqueIdUtils.getNextId('k-AnotherComponent')
    expect(id).to.be.equal('k-AnotherComponent-1')
  })
})

describe('resetId()', () => {
  it('reset id', () => {
    uniqueIdUtils.resetId()

    const id = uniqueIdUtils.getNextId('k-MyComponent')
    const id2 = uniqueIdUtils.getNextId('k-AnotherComponent')

    expect(id).to.be.equal('k-MyComponent-1')
    expect(id2).to.be.equal('k-AnotherComponent-1')
  })
})
