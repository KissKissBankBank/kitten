import { getScssPaths } from './paths'

describe('#getScssPaths', () => {
  it('returns an array of scss paths', () => {
    const scssPaths = getScssPaths()

    expect(scssPaths).toHaveLength(2)
    expect(scssPaths[0]).toMatch(new RegExp('/assets/stylesheets$'))
    expect(scssPaths[1]).toMatch(new RegExp('modularscale-sass'))
  })
})
