import React from 'react'
import renderer from 'react-test-renderer'
import {
  FieldInputExample,
  FieldPasswordExample,
  FieldRadioButtonSetExample,
  FieldRadioSetExample,
  FieldAutocompleteExample,
} from './examples'

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
            tooltipProps={{ actionLabel: 'Learn more' }}
            placeholder="Placeholder…"
            size="medium"
            noMargin={false}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with <Field.Input /> and custom Field tag', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldInputExample
            id="input"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            tooltipProps={{ actionLabel: 'Learn more' }}
            placeholder="Placeholder…"
            size="medium"
            noMargin={false}
            tag="div"
            help="Help message"
            error
            errorMessage="Very Bad! Error message"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with <Field.Input unit />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldInputExample
            id="input"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            tooltipProps={{ actionLabel: 'Learn more' }}
            placeholder="Placeholder…"
            unit="€"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with <Field.Input limit />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldInputExample
            id="input"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            tooltipProps={{ actionLabel: 'Learn more' }}
            placeholder="Placeholder…"
            limit={80}
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
            size="medium"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            tooltipProps={{ actionLabel: 'Learn more' }}
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

  describe('with <Field.Input /> in help', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldInputExample
            id="input"
            size="medium"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            tooltipProps={{ actionLabel: 'Learn more' }}
            placeholder="Placeholder…"
            help="Help!"
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
            size="medium"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            tooltipProps={{ actionLabel: 'Learn more' }}
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
            size="medium"
            label="Label"
            tooltip="Tooltip"
            tooltipId="tooltip"
            tooltipProps={{ actionLabel: 'Learn more' }}
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

  describe('with <Field.RadioSet />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldRadioSetExample
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

  describe('with <Field.Autocomplete />', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FieldAutocompleteExample
            id="autocomplete"
            size="medium"
            label="Label"
            placeholder="Select…"
            items={['Foo', 'Bar']}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
