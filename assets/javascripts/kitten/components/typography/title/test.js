import React from 'react'
import renderer from 'react-test-renderer'
import { Title } from './index'

describe('<Title />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<Title />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Title
            tag="h3"
            modifier="quinary"
            noMargin
            italic
            children="Lorem ipsum dolor sit amet…"
            cssColor="#555"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
