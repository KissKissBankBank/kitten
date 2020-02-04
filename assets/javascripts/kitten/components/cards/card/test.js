import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Card } from './index'

describe('<Card />', () => {
  let component

  describe('without prop', () => {
    beforeEach(() => {
      component = renderer.create(<Card>This is a test.</Card>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with all props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Card
            light
            shadow
            border="normal"
            radius={15}
            as="a"
            href="protocol://test@server"
          >
            This is a test.
          </Card>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
