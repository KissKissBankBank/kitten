import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownSelect } from './index'

describe('<DropdownSelect combobox />', () => {
  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <DropdownSelect
          combobox
          id="dropdown-select-test_2"
          labelText="DropdownSelect test"
          comboboxButtonLabelText="Button label text"
          noResultText="No result"
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
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
