import React from 'react'
import renderer from 'react-test-renderer'
import { Row } from './index'

describe('<Row />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<Row />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Row
            centered
            dark
            lightTopBorder
            lightBottomBorder
            padded
            className="custom-className"
          >
            <p>custom content</p>
          </Row>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
