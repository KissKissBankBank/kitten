import React from 'react'

import { Text } from 'kitten/components/typography/text'

describe('<Text />', () => {
  describe('by default', () => {
    const component = shallow(<Text />)

    test('renders a <span />', () => {
      expect(component).to.have.tagName('span')
    })
  })

  describe('with tag prop', () => {
    const component = shallow(<Text tag="div" />)

    test('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })
  })

  describe('with className prop', () => {
    const component = shallow(<Text className="custom__class" />)

    test('has a good class', () => {
      expect(component.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const component = shallow(<Text aria-hidden={ true } />)

    test('has an aria-hidden attribute', () => {
      expect(component).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with weight prop', () => {
    const component = shallow(<Text weight="light" />)

    test('has a good utility class', () => {
      expect(component.hasClass('k-u-weight-light')).toBe(true)
    })
  })

  describe('with size prop', () => {
    const component = shallow(<Text size="nano" />)

    test('has a good utility class', () => {
      expect(component.hasClass('k-u-size-nano')).toBe(true)
    })
  })

  describe('with lineHeight prop', () => {
    const component = shallow(<Text lineHeight="normal" />)

    test('has a good utility class', () => {
      expect(component.hasClass('k-u-line-height-normal')).toBe(true)
    })
  })

  describe('with color prop', () => {
    const component = shallow(<Text color="error" />)

    test('has a good utility class', () => {
      expect(component.hasClass('k-u-color-error')).toBe(true)
    })
  })

  describe('with style prop', () => {
    const component = shallow(<Text style="italic" />)

    test('has a good utility class', () => {
      expect(component.hasClass('k-u-style-italic')).toBe(true)
    })
  })

  describe('with transform prop', () => {
    const component = shallow(<Text transform="uppercase" />)

    test('has a good utility class', () => {
      expect(component.hasClass('k-u-transform-uppercase')).toBe(true)
    })
  })

  describe('with decoration prop', () => {
    const component = shallow(<Text decoration="underline" />)

    test('has a good utility class', () => {
      expect(component.hasClass('k-u-decoration-underline')).toBe(true)
    })
  })
})
