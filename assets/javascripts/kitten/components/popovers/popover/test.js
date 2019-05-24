import React from 'react'
import { Popover } from '../../components/popovers/popover'

describe('<Popover />', () => {
  const defaultComponent = shallow(<Popover />)

  describe('with default props', () => {
    it('renders <div class="k-Popover">', () => {
      expect(defaultComponent.find('.k-Popover')).toHaveLength(1)
    })

    it('renders aria attributes', () => {
      const popoverComponent = defaultComponent.find('.k-Popover')

      expect(popoverComponent.props().role).toBe('dialog')
      expect(popoverComponent.props()['aria-hidden']).toBe('true')
    })

    it('renders close button', () => {
      const buttonIconComponent = defaultComponent.find('CloseButton')

      expect(buttonIconComponent).toHaveLength(1)
    })
  })

  describe('with basic props', () => {
    const component = shallow(
      <Popover
        popoverClassName="k-Popover--custom"
        containerClassName="k-Popover__container--custom"
        closeButtonLabel="Custom close"
        titleAriaLabelId="custom-aria-label"
      />,
    )

    it('renders custom aria-labelledby attribute', () => {
      const popoverComponent = component.find('.k-Popover')

      expect(popoverComponent.props()['aria-labelledby']).toBe(
        'custom-aria-label',
      )
    })

    it('renders <div className="k-Popover--custom" />', () => {
      expect(component.find('.k-Popover--custom')).toHaveLength(1)
    })

    it('renders <div className="k-Popover__container--custom" />', () => {
      expect(component.find('.k-Popover__container--custom')).toHaveLength(1)
    })

    it('renders close button with a specific label', () => {
      const closeButtonComponent = component.find('CloseButton')

      expect(closeButtonComponent.props().closeButtonLabel).toBe('Custom close')
    })
  })
})
