import React from 'react'
import renderer from 'react-test-renderer'
import { ResponsiveImage } from './index'

describe('<ResponsiveImage />', () => {
  let component

  describe('Basic render', () => {
    beforeEach(() => {
      component = renderer
        .create(<ResponsiveImage src="/test/data.jpg" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('Responsive render', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ResponsiveImage
            pictureProps={{ className: 'customClass' }}
            src="/test/data.jpg"
            isResponsive={true}
            ratio={2}
            fromM={400}
            fromXxs={500}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
