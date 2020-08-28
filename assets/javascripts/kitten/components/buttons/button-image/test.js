import React from 'react'
import { ButtonImage } from '../../../components/buttons/button-image'

describe('<ButtonImage />', () => {
  describe('by default', () => {
    const button = shallow(<ButtonImage />)

    it('is a <button />', () => {
      expect(button.find('button')).toHaveLength(1)
    })

    it('has default classes', () => {
      expect(button.hasClass('k-ButtonImage')).toBe(true)
      expect(button.find('.k-ButtonImage__img')).toHaveLength(1)
    })
  })

  describe('with custom tag', () => {
    const button = shallow(<ButtonImage tag="a" />)

    it('has a custom tag', () => {
      expect(button.type()).toBe('a')
    })

    it('has a tabindex attribute', () => {
      expect(button.props().tabIndex).toBe(0)
    })
  })

  describe('with custom class', () => {
    const button = shallow(<ButtonImage className="custom__class" />)

    it('has a custom class', () => {
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with tiny prop', () => {
    const button = shallow(<ButtonImage tiny />)

    it('has a tiny class', () => {
      expect(button.hasClass('k-ButtonImage--tiny')).toBe(true)
    })
  })

  describe('with big prop', () => {
    const button = shallow(<ButtonImage big />)

    it('has a big class', () => {
      expect(button.hasClass('k-ButtonImage--big')).toBe(true)
    })
  })

  describe('with huge prop', () => {
    const button = shallow(<ButtonImage huge />)

    it('has a huge class', () => {
      expect(button.hasClass('k-ButtonImage--huge')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const button = shallow(<ButtonImage aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
      expect(button.props()['aria-hidden']).toBe('true')
    })
  })

  describe('with img props', () => {
    const imgProps = {
      src: '#',
      className: 'custom__class',
      width: '140',
    }
    const button = shallow(<ButtonImage img={imgProps} />)
    const image = button.find('img')

    it('renders an image with src', () => {
      expect(image.props().src).toBe('#')
    })

    it('renders an image with custom class', () => {
      expect(image.hasClass('custom__class')).toBe(true)
    })

    it('renders an image with custom attribute', () => {
      expect(image.props().width).toBe('140')
    })
  })

  describe('with withoutPointerEvents prop', () => {
    const button = shallow(<ButtonImage withoutPointerEvents />)

    it('has a good class', () => {
      expect(button.hasClass('k-ButtonImage--withoutPointerEvents')).toBe(true)
    })
  })

  describe('with withBorder prop', () => {
    const button = shallow(<ButtonImage withBorder />)

    it('has a good class', () => {
      expect(button.hasClass('k-ButtonImage--withBorder')).toBe(true)
    })
  })
})
