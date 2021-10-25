import { getScssPaths } from './paths'

describe('#getScssPaths', () => {
  it('returns an array of scss paths', () => {
    const scssPaths = getScssPaths()

    expect(scssPaths).toHaveLength(1)
    expect(scssPaths[0]).toMatch(new RegExp('/assets/stylesheets$'))
  })
})
