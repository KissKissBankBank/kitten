import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownSelect } from './index'

describe('<DropdownSelect />', () => {

  beforeEach(() => {
    // The Comobobox test gives out this known error
    // https://github.com/downshift-js/downshift/issues/1272
    // We will disable `console.error` for these tests.
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <DropdownSelect
          id="dropdown-select-test"
          labelText="DropdownSelect test"
          items={[
            {
              value: 'bianchi',
              label: 'Bianchi',
              children: [
                { value: 'bmc', label: 'BMC' },
                { value: 'cannondale', label: 'Cannondale' },
              ],
            },
            { value: 'canyon', label: 'Canyon' },
            { value: 'cervelo', label: 'Cervelo' },
            { value: 'diamondback', label: 'Diamondback' },
            { value: 'eddy merckx', label: 'Eddy Merckx', disabled: true },
            { value: 'felt', label: 'Felt' },
            { value: 'focus', label: 'Focus' },
            {
              value: 'fuji',
              label:
                'Fuji Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.',
            },
          ]}
          openOnLoad
          labelProps={{
            'data-custom-label': 'Hello World',
            className: 'k-u-weight-light',
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should match its snapshot with combobox props', () => {
    const tree = renderer
      .create(
        <DropdownSelect
          id="dropdown-select-test"
          labelText="DropdownSelect test"
          items={[
            {
              value: 'bianchi',
              label: 'Bianchi',
              children: [
                { value: 'bmc', label: 'BMC' },
                { value: 'cannondale', label: 'Cannondale' },
              ],
            },
            { value: 'canyon', label: 'Canyon' },
            { value: 'cervelo', label: 'Cervelo' },
            { value: 'diamondback', label: 'Diamondback' },
            { value: 'eddy merckx', label: 'Eddy Merckx', disabled: true },
            { value: 'felt', label: 'Felt' },
            { value: 'focus', label: 'Focus' },
            {
              value: 'fuji',
              label:
                'Fuji Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod.',
            },
          ]}
          openOnLoad
          combobox
          comboboxButtonLabelText="Button label text"
          noResultText="No results"
          inputProps={{
            'data-test': 'Custom Data Test Value'
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
