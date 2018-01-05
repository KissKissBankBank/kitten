import React from 'react'
import classNames from 'classnames'

import { CloseButton } from 'kitten/components/buttons/close-button'

describe('<CloseButton />', () => {
  describe('by default', () => {
    const closeButton = shallow(<CloseButton />)

    test('is a <button />', () => {
      expect(closeButton).to.have.tagName('button')
    })

    test('has a default classes', () => {
      const className = classNames(
        'k-ButtonIcon',
        'k-ButtonIcon--cross',
        'k-ButtonIcon--hydrogen',
      )

      expect(closeButton.hasClass(className)).toBe(true)
    })

    test('has a <CrossIcon />', () => {
      expect(closeButton).to.have.descendants('CrossIcon')
    })

    test('has a title', () => {
      expect(closeButton).to.have.attr('title', 'Close')
    })

    test('has an aria-label', () => {
      expect(closeButton).to.have.attr('aria-label', 'Close')
    })

    test('has a button type', () => {
      expect(closeButton).to.have.type('button')
    })
  })

  describe('with closeButtonLabel prop', () => {
    const closeButton = shallow(
      <CloseButton closeButtonLabel='Close this alert' />
    )

    test('has a title', () => {
      expect(closeButton).to.have.attr('title', 'Close this alert')
    })

    test('has an aria-label', () => {
      expect(closeButton).to.have.attr('aria-label', 'Close this alert')
    })
  })

  describe('with modifier prop', () => {
    const closeButton = shallow(<CloseButton modifier='carbon' />)

    test('has a class', () => {
      expect(closeButton.hasClass('k-ButtonIcon--carbon')).toBe(true)
    })
  })

  describe('with other button props', () => {
    const closeButton = shallow(<CloseButton disabled name='CustomName' />)

    test('has custom props', () => {
      expect(closeButton).to.have.attr('disabled')
      expect(closeButton).to.have.attr('name', 'CustomName')
    })
  })
})
