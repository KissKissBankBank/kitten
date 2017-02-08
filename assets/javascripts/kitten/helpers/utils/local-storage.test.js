import { expect } from 'chai'
import { localStorageUtils } from 'kitten/helpers/utils/local-storage'
import sinon from 'sinon'

describe('set()', () => {
  const key = 'alice'
  const value = 'wonderland'

  before(() => {
    localStorageUtils.set(key, value)
  })

  it('add a entry in localStorage', () => {
    const length = Object.keys(localStorage).length

    expect(length).to.be.equal(1)
  })

  it('affects a JSON value to the specified key', () => {
    const fetched = localStorage.getItem(key)
    const expected = JSON.stringify(value)

    expect(fetched).to.be.equal(expected)
  })

  describe('when localStorage is not defined', () => {
    const originalLocalStorage = localStorage

    before(() => {
      localStorage = undefined
    })

    it('returns null', () => {
      const fetched = localStorageUtils.get('someKey')

      expect(fetched).to.be.null
    })

    after(() => {
      localStorage = originalLocalStorage
    })
  })
})

describe('get()', () => {
  describe('with localStorageUtils', () => {
    describe('with a simple string value', () => {
      const key = 'alice'
      const value = 'wonderland'

      before(() => {
        localStorageUtils.set(key, value)
      })

      it('returns a string', () => {
        const fetched = localStorageUtils.get(key)

        expect(fetched).to.be.equal(value)
      })

    })

    describe('with an object value', () => {
      const key = 'alice'
      const value = {
        name: 'Alice',
        place: 'Wonderland',
        flaw: 'curiosity',
      }

      before(() => {
        localStorageUtils.set(key, value)
      })

      it('returns an object', () => {
        const fetched = localStorageUtils.get(key)

        expect(fetched).to.be.eql(value)
      })
    })
  })

  describe('without localStorageUtils', () => {
    const key = 'alice'
    const value = 'wonderland'

    before(() => {
      localStorage.setItem(key, value)
    })

    it('returns a value', () => {
      const fetched = localStorageUtils.get(key)

      expect(fetched).to.be.equal(value)
    })
  })

  describe('when localStorage is not defined', () => {
    const originalLocalStorage = localStorage

    before(() => {
      localStorage = undefined
    })

    it('returns null', () => {
      const fetched = localStorageUtils.get('someKey')

      expect(fetched).to.be.null
    })

    after(() => {
      localStorage = originalLocalStorage
    })
  })
})
