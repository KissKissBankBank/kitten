import React from 'react'
import renderer from 'react-test-renderer'
import {
  FieldInputExample,
  FieldRadioButtonSetExample,
  FieldSelectExample,
} from './field.examples'

describe('<Field />', () => {
  let component

  describe('with <Field.Input />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldInputExample
            id="input"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            placeholder="Placeholder…"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with <Field.Input /> in error', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldInputExample
            id="input"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            placeholder="Placeholder…"
            error
            errorMessage="Error!"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with <Field.RadioButtonSet />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldRadioButtonSetExample
            id="option-a"
            label="Label"
            items={[
              {
                text: 'Option A',
                id: 'option-a',
                defaultChecked: true,
              },
              {
                text: 'Option C',
                id: 'option-c',
              },
            ]}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with <Field.Select />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldSelectExample
            id="select"
            label="Label"
            placeholder="Select…"
            options={[
              { value: 'a', label: 'Option A' },
              { value: 'b', label: 'Option B' },
              { value: 'c', label: 'Option C' },
            ]}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
