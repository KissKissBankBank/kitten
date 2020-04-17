import React from 'react'
import renderer from 'react-test-renderer'
import { EngagementCardWithImage } from './index'

describe('<EngagementCardWithImage />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <EngagementCardWithImage
            backgroundImage="https://source.unsplash.com/WLUHO9A_xik/200x120"
            href="#"
            title="Hello word"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
