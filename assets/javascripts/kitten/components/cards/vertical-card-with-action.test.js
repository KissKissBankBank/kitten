import React from 'react'
import renderer from 'react-test-renderer'
import { VerticalCardWithAction } from 'kitten/components/cards/vertical-card-with-action'

describe('<VerticalCardWithAction />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalCardWithAction />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <VerticalCardWithAction
            imageProps={{
              src: '#image',
              alt: 'Image alt',
            }}
            titleDescription="Custom title"
            textDescription="Custom text"
            button="button"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
