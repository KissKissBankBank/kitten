import React from 'react'
import renderer from 'react-test-renderer'
import {
  FieldInputExample,
  FieldPasswordExample,
  FieldRadioButtonSetExample,
  FieldSelectExample,
  FieldInputWithButtonExample,
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

  describe('with <Field.InputWithButton />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldInputWithButtonExample
            id="input"
            label="Label"
            value="Button"
            textInputProps={{
              placeholder: 'Placeholder…',
              name: 'field',
            }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with <Field.Password />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldPasswordExample
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

  describe('with <Field.Password /> in error', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldPasswordExample
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
                text: 'Option B',
                id: 'option-b',
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
