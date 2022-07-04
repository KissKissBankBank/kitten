import React from 'react'
import { Checkbox } from '../../form/checkbox'
import { Text } from '../../typography/text'
import renderer from 'react-test-renderer'

describe('<Checkbox />', () => {
  describe('default', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(<Checkbox id="test-checkbox">Label</Checkbox>)
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
          <Checkbox
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
          <Checkbox
            id="test-checkbox"
            label="Main label"
            labelProps={{ className: 'custom-label-className' }}
            textProps={{ className: 'custom-text-className' }}
          >
            Secondary content
          </Checkbox>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
