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
        .create(<Button size="tiny">MyButton</Button>)
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

  describe('with `oxygen` `modifier` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<Button modifier="oxygen">MyButton</Button>)
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

  describe('with icon and tiny', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button fit="icon" size="tiny">
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon and big', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button fit="icon" size="big">
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
      component = renderer
        .create(
          <Button fit="fluid">
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with variant', () => {
    beforeEach(() => {
      component = renderer.create(<Button>Orion</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with variant and fluid', () => {
    beforeEach(() => {
      component = renderer.create(<Button fit="fluid">Orion fluid</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
