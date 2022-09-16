import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Button } from './index'

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

  describe('with `tag` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button tag="a" href="#helloWorld">
            MyButton
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `as` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button as="a" href="#helloWorld">
            MyButton
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `size` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<Button size="small">MyButton</Button>)
        .toJSON()
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

  describe('with `scandium` `modifier` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<Button modifier="scandium">MyButton</Button>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `borderRadius` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<Button borderRadius={4}>MyButton</Button>)
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
      component = renderer.create(<Button fit="icon">!</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon and micro', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button fit="icon" size="micro">
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon and small', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button fit="icon" size="small">
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon and large', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button fit="icon" size="large">
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon and huge', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button fit="icon" size="huge">
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon and giant', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button fit="icon" size="giant">
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with fluid', () => {
    beforeEach(() => {
      component = renderer.create(<Button fit="fluid">!</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with bullet', () => {
    beforeEach(() => {
      component = renderer.create(<Button hasBullet>!</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with null props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button size={null} modifier={null} fit={null}>
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('active icon hydrogen props (should have lithum modifier)', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button fit="icon" modifier="hydrogen" active>
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
