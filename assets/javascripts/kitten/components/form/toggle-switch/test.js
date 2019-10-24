import React from 'react'
import renderer from 'react-test-renderer'
import { ToggleSwitch } from './index'

describe('<ToggleSwitch />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer.create(<ToggleSwitch />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `label` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ToggleSwitch label="A test label" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `isChecked` prop', () => {
    beforeEach(() => {
      component = renderer.create(<ToggleSwitch isChecked />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `big` prop', () => {
    beforeEach(() => {
      component = renderer.create(<ToggleSwitch big />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `disabled` prop', () => {
    beforeEach(() => {
      component = renderer.create(<ToggleSwitch disabled />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `isLabelVisible` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<ToggleSwitch isLabelVisible={false} />)
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
