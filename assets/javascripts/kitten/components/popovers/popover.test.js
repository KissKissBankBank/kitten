import React from 'react'

import { Popover } from 'kitten/components/popovers/popover'
import { Button } from 'kitten/components/buttons/button'

describe('<Popover />', () => {
  const defaultComponent = shallow(
    <Popover />)

  describe('with default props', () => {
    test('renders <div class="k-Popover">', () => {
      expect(defaultComponent.find('.k-Popover')).toHaveLength(1)
    })

    test('renders aria attributes', () => {
      const popoverComponent = defaultComponent.find('.k-Popover')

      expect(popoverComponent).to.have.attr('role', 'dialog')
      expect(popoverComponent).to.have.attr('aria-hidden', 'true')
    })

    test('renders close button', () => {
      const buttonIconComponent = defaultComponent.find('CloseButton')

      expect(buttonIconComponent).toHaveLength(1)
    })
  })

  describe('with basic props', () => {
    const component = shallow(
      <Popover popoverClassName="k-Popover--custom"
               containerClassName="k-Popover__container--custom"
               closeButtonLabel="Custom close"
               titleAriaLabelId="custom-aria-label" />)

    test('renders custom aria-labelledby attribute', () => {
      const popoverComponent = component.find('.k-Popover')

      expect(popoverComponent).to.have
        .attr('aria-labelledby', 'custom-aria-label')
    })

    test('renders <div className="k-Popover--custom" />', () => {
      expect(component.find('.k-Popover--custom')).toHaveLength(1)
     })

    test('renders <div className="k-Popover__container--custom" />', () => {
      expect(component.find('.k-Popover__container--custom')).toHaveLength(1)
    })

    test('renders close button with a specific label', () => {
      const closeButtonComponent = component.find('CloseButton')

      expect(closeButtonComponent).to.have.prop('closeButtonLabel').toBe('Custom close')
    })
  })
})
