import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { HorizontalStroke } from './index'

describe('<HorizontalStroke />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalStroke />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `tiny` size', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalStroke size="tiny" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `big` size', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalStroke size="big" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `huge` size', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalStroke size="huge" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `primary` modifier', () => {
    beforeEach(() => {
      component = renderer
        .create(<HorizontalStroke modifier="primary" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `primary` modifier and `huge` size', () => {
    beforeEach(() => {
      component = renderer
        .create(<HorizontalStroke size="huge" modifier="primary" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with width via `customSize`', () => {
    beforeEach(() => {
      component = renderer
        .create(<HorizontalStroke customSize={{ width: 100 }} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with height via `customSize`', () => {
    beforeEach(() => {
      component = renderer
        .create(<HorizontalStroke customSize={{ height: 50 }} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with width and height via `customSize`', () => {
    beforeEach(() => {
      component = renderer
        .create(<HorizontalStroke customSize={{ width: 100, height: 50 }} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `height via `customSize` and width via `style`', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HorizontalStroke
            customSize={{ height: 50 }}
            style={{ width: 100 }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `width via `customSize` and width via `style`', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HorizontalStroke
            customSize={{ width: 50 }}
            style={{ width: 100 }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `width via `customSize` and width via `style` and more custom styles', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HorizontalStroke
            customSize={{ height: 50 }}
            style={{ width: 100, backgroundColor: '#888' }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
