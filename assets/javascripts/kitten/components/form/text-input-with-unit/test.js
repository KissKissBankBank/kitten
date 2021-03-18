import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithUnit } from './index'

describe('<TextInputWithUnit />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithUnit />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with valid prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithUnit valid />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with error prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithUnit error />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with disabled prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithUnit disabled />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with unit', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithUnit>€</TextInputWithUnit>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with size prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithUnit size="big" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with variant prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithUnit variant="orion">€</TextInputWithUnit>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
