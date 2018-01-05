import sinon from 'sinon'
import { cssSupports } from './feature-detection'

describe('cssSupports', () => {
  const initialWindow = Object.assign({}, global.window)
  const supportCondition = 'scroll-behavior: smooth'

  describe('when method is not supported', () => {
    describe('when `window` is not defined', () => {
      beforeAll(() => { global.window = undefined })
      afterAll(() => { global.window = initialWindow })

      test('returns false', () => {
        expect(cssSupports(supportCondition)).to.eq(false)
      })
    })

    describe('when `window.CSS` is not defined', () => {
      beforeAll(() => { global.window = {} })
      afterAll(() => { global.window = initialWindow })

      test('returns false', () => {
        expect(cssSupports(supportCondition)).to.eq(false)
      })
    })

    describe('when `window.CSS.supports` is not defined', () => {
      beforeAll(() => { global.window = { CSS: {} } })
      afterAll(() => { global.window = initialWindow })

      test('returns false', () => {
        expect(cssSupports(supportCondition)).to.eq(false)
      })
    })
  })

  describe('when methods is supported', () => {
    const sandbox = sinon.sandbox.create()
    let supportSpy

    beforeAll(() => {
      supportSpy = sandbox.spy()
      global.window = {
        CSS: {
          supports: supportSpy
        },
      }

      cssSupports(supportCondition)
    })

    afterAll(() => { global.window = initialWindow })

    test('calls `window.CSS.supports` with the correct parameter', () => {
      expect(supportSpy.calledWith(supportCondition)).to.eq(true)
    })
  })
})
