import React from 'react'
import renderer from 'react-test-renderer'
import { SimpleCarousel } from './index'

describe('<SimpleCarousel />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SimpleCarousel>
            <p key="1">Foo</p>
            <p key="2">Bar</p>
          </SimpleCarousel>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with only one item', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SimpleCarousel>
            <p key="1">Foo</p>
          </SimpleCarousel>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SimpleCarousel paginationAlign="center" id="simpleCarousel">
            <p
              activePaginationColor="Custom active pagination color"
              paginationColor="Custom pagination color"
            >
              Foo
            </p>
          </SimpleCarousel>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
