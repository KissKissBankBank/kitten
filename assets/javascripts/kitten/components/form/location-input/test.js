import React from 'react'
import { LocationInput } from '../../../components/form/location-input'

describe('<LocationInput />', () => {
  describe('by default', () => {
    const component = shallow(<LocationInput />)

    it('renders a .k-LocationInput', () => {
      expect(component.find('.k-LocationInput')).toHaveLength(1)
    })

    it('renders a .k-LocationInput__icon', () => {
      expect(component.find('.k-LocationInput__icon')).toHaveLength(1)
    })

    it('renders a PlacesAutocomplete', () => {
      expect(component.find('PlacesAutocomplete')).toHaveLength(1)
    })
  })
})
