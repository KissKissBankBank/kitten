import React from 'react'
import renderer from 'react-test-renderer'
import { IconBadge } from './index'

describe('<IconBadge />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<IconBadge children={<svg />} status="success" size="large" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with border style', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <IconBadge
            children={<svg />}
            size="small"
            shape="star"
            border={{
              width: 2,
              style: 'solid',
              color: '#e8f7fe',
            }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
