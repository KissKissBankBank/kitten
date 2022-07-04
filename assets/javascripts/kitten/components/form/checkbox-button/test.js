import React from 'react'
import { CheckboxButton } from '../../form/checkbox-button'
import { Text } from '../../typography/text'
import renderer from 'react-test-renderer'

describe('<CheckboxButton />', () => {
  describe('default', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(<CheckboxButton id="test-checkbox">Label</CheckboxButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with label prop', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(
          <CheckboxButton
            id="test-checkbox"
            label="Test label"
            labelProps={{ className: 'custom-label-className' }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('whith label and children props', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(
          <CheckboxButton
            id="test-checkbox"
            label="Main label"
            labelProps={{ className: 'custom-label-className' }}
            textProps={{ className: 'custom-text-className' }}
          >
            Secondary content
          </CheckboxButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
