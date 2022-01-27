import React from 'react'
import renderer from 'react-test-renderer'
import { Timeline } from './index'

describe('<Timeline />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Timeline>
            <span>foo</span>
            <span>bar</span>
            <span>baz</span>
          </Timeline>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with itemHeight props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Timeline itemHeight="thin">
            <span>foo</span>
            <span>bar</span>
            <span>baz</span>
          </Timeline>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
