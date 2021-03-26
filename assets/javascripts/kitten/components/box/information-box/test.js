import React from 'react'
import renderer from 'react-test-renderer'
import { InformationBox } from './index'

describe('<InformationBox />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<InformationBox />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with contents', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <InformationBox
            title="Title"
            titleProps={{
              tag: 'h3',
              className: 'customClassName',
              'aria-label': 'custom aria prop',
            }}
          >
            Content
          </InformationBox>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
