import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ArrowContainer } from './index'

describe('<ArrowContainer />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer>Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `color` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer color="#ff0000">Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `size` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer size={20}>Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `position` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer position="bottom">Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `distance` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer distance={30}>Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `distance` and `distanceAsPercentage` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ArrowContainer distance={30} distanceAsPercentage>
            Foobar
          </ArrowContainer>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `centered` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer centered>Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `shadow` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer shadow>Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `borderRadius` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer borderRadius={4}>Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `borderColor` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer borderColor="#1CAFE1">Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `borderWidth` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ArrowContainer borderWidth={3}>Foobar</ArrowContainer>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with other props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ArrowContainer as="article" className="k-u-example-class">
            Foobar
          </ArrowContainer>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
