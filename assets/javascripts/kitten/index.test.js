import * as components from './index'

describe('Import components', () => {
  it('should return React components', () => {
    Object.entries(components).map(component => {
      const element = component[1]

      if (!element) console.log('Component undefined:', component)
      expect(element).toBeDefined()
    })
  })
})
