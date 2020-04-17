import React from 'react'
import renderer from 'react-test-renderer'
import { TitleWithStroke } from './index'

describe('<TitleWithStroke />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TitleWithStroke
            children="Lorem ipsum dolor sit amet…"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('with more props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TitleWithStroke
            align="center"
            italic
            modifier="tertiary"
            tag="h4"
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
