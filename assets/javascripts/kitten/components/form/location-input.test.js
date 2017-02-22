import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { LocationInput } from 'kitten/components/form/location-input'
import { LocationIcon } from 'kitten/components/icons/location-icon'

describe('<LocationInput />', () => {
  describe('by default', () => {
    const component = shallow(<LocationInput />)

    it('renders a .k-LocationInput', () => {
      expect(component.find('.k-LocationInput')).to.have.length(1)
    })

    it('renders a .k-LocationInput__label', () => {
      expect(component.find('.k-LocationInput__label')).to.have.length(1)
    })

    it('renders a .k-LocationInput__icon', () => {
      expect(component.find('.k-LocationInput__icon')).to.have.length(1)
    })

    it('renders a PlacesAutocomplete', () => {
      expect(component.find('PlacesAutocomplete')).to.have.length(1)
    })
  })

  describe('location-input with error class', () => {
    const componentWithErrorClass = shallow(
      <LocationInput error={ true } />
    )

    it('has a error class', () => {
      expect(componentWithErrorClass).to.have.className('is-error')
    })
  })

  describe('label prop', () => {
    const component = shallow(
      <LocationInput label="Lorem ipsum" />
    )

    it('adds a label element', () => {
      const label = component.find('.k-LocationInput__label')
      expect(label).to.have.length(1)
      expect(label).to.have.text('Lorem ipsum')
    })
  })
})
