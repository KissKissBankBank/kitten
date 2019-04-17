import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Button } from './button'
import detailsElementPolyfill from 'details-element-polyfill'
jest.mock('details-element-polyfill')

describe('<Button />', () => {
  let component

  describe('with text', () => {
    beforeEach(() => {
      component = renderer.create(<Button>MyButton</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `tiny` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Button tiny>MyButton</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `big` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Button big>MyButton</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `fluid` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Button fluid>MyButton</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `modifier` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<Button modifier="oxygen">MyButton</Button>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `as` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<Button as="input" type="submit" value="MyButton" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some elements', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button>
            <span>My</span>
            <span>Button</span>
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon', () => {
    beforeEach(() => {
      component = renderer.create(<Button icon>!</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
