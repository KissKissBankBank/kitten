import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Popover } from 'kitten/components/popovers/popover'
import { Button } from 'kitten/components/buttons/button'

describe('<Popover />', () => {
  const defaultComponent = shallow(
    <Popover />)

  describe('with default props', () => {
    it('renders <div class="k-Popover">', () => {
      expect(defaultComponent.find('.k-Popover')).to.have.length(1)
    })

    it('renders aria attributes', () => {
      const popoverComponent = defaultComponent.find('.k-Popover')

      expect(popoverComponent).to.have.attr('role', 'dialog')
      expect(popoverComponent).to.have.attr('aria-hidden', 'true')
    })

    it('renders close button', () => {
      const buttonIconComponent = defaultComponent.find('.k-ButtonIcon')

      expect(buttonIconComponent).to.have.length(1)
    })
  })

  describe('with basic props', () => {
    const component = shallow(
      <Popover popoverClassName="k-Popover--custom"
               containerClassName="k-Popover__container--custom"
               closeButtonLabel="Fermer"
               titleAriaLabelId="custom-aria-label" />)

    it('renders custom aria-labelledby attribute', () => {
      const popoverComponent = component.find('.k-Popover')

      expect(popoverComponent).to.have
        .attr('aria-labelledby', 'custom-aria-label')
    })

    it('renders <div className="k-Popover--custom" />', () => {
      expect(component.find('.k-Popover--custom')).to.have.length(1)
     })

    it('renders <div className="k-Popover__container--custom" />', () => {
      expect(component.find('.k-Popover__container--custom')).to.have.length(1)
    })

    it('renders close button with a specific label', () => {
      const closeButtonComponent = component.find('.k-ButtonIcon')

      expect(closeButtonComponent).to.have.attr('title', 'Fermer')
    })
  })
})
