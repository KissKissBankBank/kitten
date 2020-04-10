import { cssSupports } from './feature-detection'

describe('cssSupports', () => {
  const initialWindow = Object.assign({}, global.window)
  const supportCondition = 'scroll-behavior: smooth'

  describe('when method is not supported', () => {
    describe('when `window` is not defined', () => {
      beforeAll(() => {
        global.window = void 0
      })
      afterAll(() => {
        global.window = initialWindow
      })

      it('returns false', () => {
        expect(cssSupports(supportCondition)).toBe(false)
      })
    })

    describe('when `window.CSS` is not defined', () => {
      beforeAll(() => {
        global.window = {}
      })
      afterAll(() => {
        global.window = initialWindow
      })

      it('returns false', () => {
        expect(cssSupports(supportCondition)).toBe(false)
      })
    })

    describe('when `window.CSS.supports` is not defined', () => {
      beforeAll(() => {
        global.window = { CSS: {} }
      })
      afterAll(() => {
        global.window = initialWindow
      })

      it('returns false', () => {
        expect(cssSupports(supportCondition)).toBe(false)
      })
    })
  })

  describe('when methods is supported', () => {
    afterAll(() => {
      global.window = initialWindow
    })

    it('calls `window.CSS.supports` with the correct parameter', () => {
      global.window.CSS = { supports: jest.fn() }
      cssSupports(supportCondition)

      expect(global.window.CSS.supports).toHaveBeenCalled()
    })
  })
})
