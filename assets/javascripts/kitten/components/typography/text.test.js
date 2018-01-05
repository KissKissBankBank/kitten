import React from 'react'
import { shallow } from 'enzyme'
import { Text } from 'kitten/components/typography/text'

describe('<Text />', () => {
  describe('by default', () => {
    const component = shallow(<Text />)

    it('renders a <span />', () => {
      expect(component).to.have.tagName('span')
    })
  })

  describe('with tag prop', () => {
    const component = shallow(<Text tag="div" />)

    it('renders a <div />', () => {
      expect(component).to.have.tagName('div')
    })
  })

  describe('with className prop', () => {
    const component = shallow(<Text className="custom__class" />)

    it('has a good class', () => {
      expect(component).to.have.className('custom__class')
    })
  })

  describe('with other prop', () => {
    const component = shallow(<Text aria-hidden={ true } />)

    it('has an aria-hidden attribute', () => {
      expect(component).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with weight prop', () => {
    const component = shallow(<Text weight="light" />)

    it('has a good utility class', () => {
      expect(component).to.have.className('k-u-weight-light')
    })
  })

  describe('with size prop', () => {
    const component = shallow(<Text size="nano" />)

    it('has a good utility class', () => {
      expect(component).to.have.className('k-u-size-nano')
    })
  })

  describe('with lineHeight prop', () => {
    const component = shallow(<Text lineHeight="normal" />)

    it('has a good utility class', () => {
      expect(component).to.have.className('k-u-line-height-normal')
    })
  })

  describe('with color prop', () => {
    const component = shallow(<Text color="error" />)

    it('has a good utility class', () => {
      expect(component).to.have.className('k-u-color-error')
    })
  })

  describe('with style prop', () => {
    const component = shallow(<Text style="italic" />)

    it('has a good utility class', () => {
      expect(component).to.have.className('k-u-style-italic')
    })
  })

  describe('with transform prop', () => {
    const component = shallow(<Text transform="uppercase" />)

    it('has a good utility class', () => {
      expect(component).to.have.className('k-u-transform-uppercase')
    })
  })

  describe('with decoration prop', () => {
    const component = shallow(<Text decoration="underline" />)

    it('has a good utility class', () => {
      expect(component).to.have.className('k-u-decoration-underline')
    })
  })
})
