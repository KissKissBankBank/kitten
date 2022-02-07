import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownPhoneSelect } from './index'

describe('<DropdownPhoneSelect />', () => {
  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <DropdownPhoneSelect
          id="dropdown-phone-select-test"
          labelText="DropdownPhoneSelect test"
          flagsUrl="./flags.png"
          locale="fr"
          defaultCountry="fr"
          value="+33 12 34 56 78"
          phoneProps={{
            onlyCountries: ['fr', 'be', 'lu'],
          }}
          openOnLoad
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
