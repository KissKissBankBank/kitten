import React from 'react'
import classNames from 'classnames'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { CloseButton } from 'kitten/components/buttons/close-button'

describe('<CloseButton />', () => {
  describe('by default', () => {
    const closeButton = shallow(<CloseButton />)

    it('is a <button />', () => {
      expect(closeButton).to.have.tagName('button')
    })

    it('has a default classes', () => {
      const className = classNames(
        'k-ButtonIcon',
        'k-ButtonIcon--cross',
        'k-ButtonIcon--hydrogen',
      )

      expect(closeButton).to.have.className(className)
    })

    it('has a <CrossIcon />', () => {
      expect(closeButton).to.have.descendants('CrossIcon')
    })

    it('has a title', () => {
      expect(closeButton).to.have.attr('title', 'Close')
    })

    it('has an aria-label', () => {
      expect(closeButton).to.have.attr('aria-label', 'Close')
    })
  })

  describe('with closeButtonLabel prop', () => {
    const closeButton = shallow(
      <CloseButton closeButtonLabel='Close this alert' />
    )

    it('has a title', () => {
      expect(closeButton).to.have.attr('title', 'Close this alert')
    })

    it('has an aria-label', () => {
      expect(closeButton).to.have.attr('aria-label', 'Close this alert')
    })
  })

  describe('with modifier prop', () => {
    const closeButton = shallow(<CloseButton modifier='carbon' />)

    it('has a class', () => {
      expect(closeButton).to.have.className('k-ButtonIcon--carbon')
    })
  })

  describe('with other button props', () => {
    const closeButton = shallow(<CloseButton disabled name='CustomName' />)

    it('has custom props', () => {
      expect(closeButton).to.have.attr('disabled')
      expect(closeButton).to.have.attr('name', 'CustomName')
    })
  })
})
