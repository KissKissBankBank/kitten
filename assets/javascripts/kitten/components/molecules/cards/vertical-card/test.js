import React from 'react'
import renderer from 'react-test-renderer'
import { VerticalCard } from './index'

describe('<VerticalCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <VerticalCard
            title="Custom title"
            imageProps={{ src: '#image', alt: '' }}
          />,
        )
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
          <VerticalCard
            imageProps={{
              src: '#image',
              alt: 'Image alt',
            }}
            title="Custom title"
            description="Custom text"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
