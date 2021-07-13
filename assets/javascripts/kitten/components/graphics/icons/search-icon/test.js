import React from 'react'
import renderer from 'react-test-renderer'
import { SearchIcon } from './index'

describe('<SearchIcon />', () => {
  describe('default', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<SearchIcon width="12" height="10" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(
          <SearchIcon
            width="12"
            height="10"
            color="red"
            circleProps={{ className: 'circle-class' }}
            pathProps={{ className: 'path-class' }}
          />,
        )
        .toJSON()

      expect(component).toMatchSnapshot()
    })

    describe('with no `title`', () => {
      it('matches the snapshot', () => {
        const component = renderer
          .create(<SearchIcon width="12" height="10" iconTitle={null} />)
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })
  })
})
