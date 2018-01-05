import React from 'react'
import { shallow, mount } from 'enzyme'
import { LocationInput } from 'kitten/components/form/location-input'

describe('<LocationInput />', () => {
  describe('by default', () => {
    const component = shallow(<LocationInput />)

    test('renders a .k-LocationInput', () => {
      expect(component.find('.k-LocationInput')).toHaveLength(1)
    })

    test('renders a .k-LocationInput__icon', () => {
      expect(component.find('.k-LocationInput__icon')).toHaveLength(1)
    })

    test('renders a PlacesAutocomplete', () => {
      expect(component.find('PlacesAutocomplete')).toHaveLength(1)
    })
  })
})
