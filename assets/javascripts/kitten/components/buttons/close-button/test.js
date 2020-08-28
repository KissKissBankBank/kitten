import React from 'react'
import classNames from 'classnames'
import { CloseButton } from '../../../components/buttons/close-button'
import { ButtonIcon } from '../../../components/buttons/button-icon'

describe('<CloseButton />', () => {
  describe('by default', () => {
    const closeButton = shallow(<CloseButton />)

    it('is a <ButtonIcon />', () => {
      expect(closeButton.type()).toBe(ButtonIcon)
    })

    it('has a default classes', () => {
      const className = classNames('k-ButtonIcon--cross')

      expect(closeButton.hasClass(className)).toBe(true)
    })

    it('has a <CrossIcon />', () => {
      expect(closeButton.find('CrossIcon')).toHaveLength(1)
    })

    it('has a title', () => {
      expect(closeButton.props().title).toBe('Close')
    })

    it('has an aria-label', () => {
      expect(closeButton.props()['aria-label']).toBe('Close')
    })

    it('has a button type', () => {
      expect(closeButton.props().type).toBe('button')
    })
  })

  describe('with closeButtonLabel prop', () => {
    const closeButton = shallow(
      <CloseButton closeButtonLabel="Close this alert" />,
    )

    it('has a title', () => {
      expect(closeButton.props().title).toBe('Close this alert')
    })

    it('has an aria-label', () => {
      expect(closeButton.props()['aria-label']).toBe('Close this alert')
    })
  })

  describe('with modifier prop', () => {
    const closeButton = shallow(<CloseButton modifier="carbon" />)

    it('has a class', () => {
      expect(closeButton.render().hasClass('k-ButtonIcon--carbon')).toBe(true)
    })
  })

  describe('with other button props', () => {
    const closeButton = shallow(<CloseButton disabled name="CustomName" />)

    it('has custom props', () => {
      expect(closeButton.props().disabled).toBe(true)
      expect(closeButton.props().name).toBe('CustomName')
    })
  })
})
