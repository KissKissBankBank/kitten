import React from 'react'
import renderer from 'react-test-renderer'
import { VerticalCardWithAction } from '../../components/cards/vertical-card-with-action'

describe('<VerticalCardWithAction />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<VerticalCardWithAction title="Custom title" button="button" />)
        .toJSON()
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
            title="Custom title"
            description="Custom text"
            button="button"
            buttonModifier="helium"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
