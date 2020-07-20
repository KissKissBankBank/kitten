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

  describe('with modifier', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Paragraph
            tag="p"
            modifier="primary"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with margin', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Paragraph
            tag="p"
            margin
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('without normal line height', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Paragraph
            tag="p"
            normalLineHeight={false}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('without italic', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Paragraph
            tag="p"
            italic={false}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
