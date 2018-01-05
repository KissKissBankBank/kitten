import React from 'react'
import { shallow } from 'enzyme'
import { ButtonImage } from 'kitten/components/buttons/button-image'

describe('<ButtonImage />', () => {
  describe('by default', () => {
    const button = shallow(<ButtonImage />)

    it('is a <button />', () => {
      expect(button).to.have.tagName('button')
    })

    it('has default classes', () => {
      expect(button).to.have.className('k-ButtonImage')
      expect(button).to.have.descendants('.k-ButtonImage__img')
    })
  })

  describe('with custom tag', () => {
    const button = shallow(<ButtonImage tag="a" />)

    it('has a custom tag', () => {
      expect(button).to.have.tagName('a')
    })

    it('has a tabindex attribute', () => {
      expect(button).to.have.attr('tabindex', '0')
    })
  })

  describe('with custom class', () => {
    const button = shallow(<ButtonImage className="custom__class" />)

    it('has a custom class', () => {
      expect(button).to.have.className('custom__class')
    })
  })

  describe('with tiny prop', () => {
    const button = shallow(<ButtonImage tiny />)

    it('has a tiny class', () => {
      expect(button).to.have.className('k-ButtonImage--tiny')
    })
  })

  describe('with big prop', () => {
    const button = shallow(<ButtonImage big />)

    it('has a big class', () => {
      expect(button).to.have.className('k-ButtonImage--big')
    })
  })

  describe('with other prop', () => {
    const button = shallow(<ButtonImage aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
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

    it('renders an image with src', () => {
      expect(image).to.have.attr('src', '#')
    })

    it('renders an image with custom class', () => {
      expect(image).to.have.className('custom__class')
    })

    it('renders an image with custom attribute', () => {
      expect(image).to.have.attr('width', '140')
    })
  })

  describe('with withoutPointerEvents prop', () => {
    const button = shallow(<ButtonImage withoutPointerEvents />)

    it('has a good class', () => {
      expect(button).to.have.className('k-ButtonImage--withoutPointerEvents')
    })
  })

  describe('with withBorder prop', () => {
    const button = shallow(<ButtonImage withBorder />)

    it('has a good class', () => {
      expect(button).to.have.className('k-ButtonImage--withBorder')
    })
  })
})
