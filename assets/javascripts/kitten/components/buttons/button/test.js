import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Button } from './button'

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

  describe('with `huge` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Button huge>MyButton</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `giant` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Button giant>MyButton</Button>).toJSON()
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
      component = renderer.create(<Button icon>!</Button>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon and micro', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button icon micro>
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
          <Button icon tiny>
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
          <Button icon big>
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
          <Button icon huge>
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
          <Button icon giant>
            !
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon and fluid', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button icon fluid>
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
      component = renderer
        .create(<Button variant="orion">Orion</Button>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with variant and fluid', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Button variant="orion" fluid>
            Orion fluid
          </Button>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
