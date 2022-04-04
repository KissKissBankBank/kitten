import React from 'react'
import renderer from 'react-test-renderer'
import { HorizontalProjectCard } from './index'

describe('<HorizontalProjectCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HorizontalProjectCard
            title="Custom title"
            description="Custom description"
            href="#"
            imageProps={{ src: '#image', alt: '' }}
            noProgressOnMobile
            progress={50}
            progressColor="transparent"
            info={<span>Test info</span>}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with noProgress prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HorizontalProjectCard
            title="Custom title"
            description="Custom description"
            href="#"
            imageProps={{ src: '#image', alt: '' }}
            info={<span>Test info</span>}
            noProgress
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
