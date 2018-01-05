import React from 'react'

import { ButtonImage } from 'kitten/components/buttons/button-image'

describe('<ButtonImage />', () => {
  describe('by default', () => {
    const button = shallow(<ButtonImage />)

    test('is a <button />', () => {
      expect(button).to.have.tagName('button')
    })

    test('has default classes', () => {
      expect(button.hasClass('k-ButtonImage')).toBe(true)
      expect(button).to.have.descendants('.k-ButtonImage__img')
    })
  })

  describe('with custom tag', () => {
    const button = shallow(<ButtonImage tag="a" />)

    test('has a custom tag', () => {
      expect(button).to.have.tagName('a')
    })

    test('has a tabindex attribute', () => {
      expect(button).to.have.attr('tabindex', '0')
    })
  })

  describe('with custom class', () => {
    const button = shallow(<ButtonImage className="custom__class" />)

    test('has a custom class', () => {
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with tiny prop', () => {
    const button = shallow(<ButtonImage tiny />)

    test('has a tiny class', () => {
      expect(button.hasClass('k-ButtonImage--tiny')).toBe(true)
    })
  })

  describe('with big prop', () => {
    const button = shallow(<ButtonImage big />)

    test('has a big class', () => {
      expect(button.hasClass('k-ButtonImage--big')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const button = shallow(<ButtonImage aria-hidden="true" />)

    test('has an aria-hidden attribute', () => {
      expect(button).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with img props', () => {
    const imgProps = {
      src: '#',
      className: 'custom__class',
      width: '140',
    }
    const button = shallow(<ButtonImage img={ imgProps } />)
    const image = button.find('img')

    test('renders an image with src', () => {
      expect(image).to.have.attr('src', '#')
    })

    test('renders an image with custom class', () => {
      expect(image.hasClass('custom__class')).toBe(true)
    })

    test('renders an image with custom attribute', () => {
      expect(image).to.have.attr('width', '140')
    })
  })

  describe('with withoutPointerEvents prop', () => {
    const button = shallow(<ButtonImage withoutPointerEvents />)

    test('has a good class', () => {
      expect(button.hasClass('k-ButtonImage--withoutPointerEvents')).toBe(true)
    })
  })

  describe('with withBorder prop', () => {
    const button = shallow(<ButtonImage withBorder />)

    test('has a good class', () => {
      expect(button.hasClass('k-ButtonImage--withBorder')).toBe(true)
    })
  })
})
