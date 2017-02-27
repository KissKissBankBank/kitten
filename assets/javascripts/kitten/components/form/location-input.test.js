import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { LocationInput } from 'kitten/components/form/location-input'

describe('<LocationInput />', () => {
  describe('by default', () => {
    const component = shallow(<LocationInput />)

    it('renders a .k-LocationInput', () => {
      expect(component.find('.k-LocationInput')).to.have.length(1)
    })

    it('renders a .k-LocationInput__icon', () => {
      expect(component.find('.k-LocationInput__icon')).to.have.length(1)
    })

    it('renders a PlacesAutocomplete', () => {
      expect(component.find('PlacesAutocomplete')).to.have.length(1)
    })
  })
})
