import React from 'react'
import renderer from 'react-test-renderer'
import { Paragraph } from './index'

describe('<Paragraph />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Paragraph
            tag="p"
            modifier="primary"
            margin
            normalLineHeight={false}
            italic={false}
            children="Lorem ipsum dolor sit amet…"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
