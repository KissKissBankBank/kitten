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
            backgroundImage="kitten.jpg"
            href="#"
            title="Hello word"
            imgProps={{ srcSet: 'kitten.jpg 1x, kitten@2x.jpg 2x' }}
            textProps={{ 'aria-label': 'test label' }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
