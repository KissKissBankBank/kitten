import React from 'react'
import renderer from 'react-test-renderer'
import { BulletList } from './index'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<BulletList />', () => {
  let originalMatchMedia
  let component

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  it('should match its empty snapshot', () => {
    window.matchMedia = createMockMediaMatcher(false)

    const tree = renderer
      .create(
        <BulletList
          small={false}
          large={false}
          big={false}
          huge={false}
          items={[
            { key: '1', item: 'Dis Manibus' },
            { key: '2', item: 'Calpurnia Felicla' },
            { key: '3', item: 'Germulio coniugi' },
          ]}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
