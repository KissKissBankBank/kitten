import { expect } from 'chai'
import sinon from 'sinon'
import { cssSupports } from './feature-detection'

describe('cssSupports', () => {
  const initialWindow = Object.assign({}, global.window)
  const supportCondition = 'scroll-behavior: smooth'

  context('when method is not supported', () => {
    context('when `window` is not defined', () => {
      before(() => { global.window = undefined })
      after(() => { global.window = initialWindow })

      it('return false', () => {
        expect(cssSupports(supportCondition)).to.eq(false)
      })
    })

    context('when `window.CSS` is not defined', () => {
      before(() => { global.window = {} })
      after(() => { global.window = initialWindow })

      it('return false', () => {
        expect(cssSupports(supportCondition)).to.eq(false)
      })
    })

    context('when `window.CSS.supports` is not defined', () => {
      before(() => { global.window = { CSS: {} } })
      after(() => { global.window = initialWindow })

      it('return false', () => {
        expect(cssSupports(supportCondition)).to.eq(false)
      })
    })
  })

  context('when methods is supported', () => {
    const sandbox = sinon.sandbox.create()
    let supportSpy

    before(() => {
      supportSpy = sandbox.spy()
      global.window = {
        CSS: {
          supports: supportSpy
        },
      }

      cssSupports(supportCondition)
    })

    after(() => { global.window = initialWindow })

    it('calls `window.CSS.supports` with the correct parameter', () => {
      expect(supportSpy.calledWith(supportCondition)).to.eq(true)
    })
  })
})
