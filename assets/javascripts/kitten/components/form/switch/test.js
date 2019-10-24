import React from 'react'
import renderer from 'react-test-renderer'
import { Switch } from './index'

describe('<Switch />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer.create(<Switch />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `label` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Switch label="A test label" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `isChecked` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Switch isChecked />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `big` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Switch big />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `disabled` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Switch disabled />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `isLabelVisible` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Switch isLabelVisible={false} />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `checkedColor` `defaultColor` & `disabledColor` props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Switch
            checkedColor="#000"
            defaultColor="#000"
            disabledColor="#000"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
