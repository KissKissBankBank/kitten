import React from 'react'
import renderer from 'react-test-renderer'
import { ToggleSwitch } from './index'

describe('<ToggleSwitch />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer.create(<ToggleSwitch id="toggle-switch" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `label` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ToggleSwitch id="toggle-switch" label="A test label" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `isChecked` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ToggleSwitch id="toggle-switch" isChecked />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `big` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ToggleSwitch id="toggle-switch" big />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `disabled` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ToggleSwitch id="toggle-switch" disabled />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `isLabelVisible` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ToggleSwitch id="toggle-switch" isLabelVisible={false} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `checkedColor` `defaultColor` & `disabledColor` props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ToggleSwitch
            id="toggle-switch"
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
