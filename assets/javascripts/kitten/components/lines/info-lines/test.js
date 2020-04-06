import React from 'react'
import renderer from 'react-test-renderer'
import { InfoLines } from './index'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<InfoLines />', () => {
  let originalMatchMedia

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
        <InfoLines
          withBorderRadius={false}
          withLeftRightBorder={false}
          withoutTopBottomBorder={false}
          withoutResponsive={false}
          borderColor="#eee"
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
