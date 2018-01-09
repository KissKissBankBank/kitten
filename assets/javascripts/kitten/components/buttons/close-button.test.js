import React from 'react'
import classNames from 'classnames'

import { CloseButton } from 'kitten/components/buttons/close-button'

describe('<CloseButton />', () => {
  describe('by default', () => {
    const closeButton = shallow(<CloseButton />)

    it('is a <button />', () => {
      expect(closeButton.type()).toBe('button')
    })

    it('has a default classes', () => {
      const className = classNames(
        'k-ButtonIcon',
        'k-ButtonIcon--cross',
        'k-ButtonIcon--hydrogen',
      )

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
      expect(closeButton.type()).toBe('button')
    })
  })

  describe('with closeButtonLabel prop', () => {
    const closeButton = shallow(
      <CloseButton closeButtonLabel='Close this alert' />
    )

    it('has a title', () => {
      expect(closeButton.props().title).toBe('Close this alert')
    })

    it('has an aria-label', () => {
      expect(closeButton.props()['aria-label']).toBe('Close this alert')
    })
  })

  describe('with modifier prop', () => {
    const closeButton = shallow(<CloseButton modifier='carbon' />)

    it('has a class', () => {
      expect(closeButton.hasClass('k-ButtonIcon--carbon')).toBe(true)
    })
  })

  describe('with other button props', () => {
    const closeButton = shallow(<CloseButton disabled name='CustomName' />)

    it('has custom props', () => {
      expect(closeButton.props().disabled).toBe(true)
      expect(closeButton.props().name).toBe('CustomName')
    })
  })
})
