import React from 'react'
import { Text } from './index'
import renderer from 'react-test-renderer'

describe('<Text />', () => {
  describe('by default', () => {
    let component

    beforeEach(() => {
      component = renderer.create(<Text />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with tag prop', () => {
    let component

    beforeEach(() => {
      component = renderer.create(<Text tag="div" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with as prop', () => {
    let component

    beforeEach(() => {
      component = renderer.create(<Text as="div" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with className prop', () => {
    const component = shallow(<Text className="custom__class" />)

    it('has a good class', () => {
      expect(component.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const component = shallow(<Text aria-hidden={true} />)

    it('has an aria-hidden attribute', () => {
      expect(component.props()['aria-hidden']).toBe(true)
    })
  })

  describe('with weight prop', () => {
    const component = shallow(<Text weight="light" />)

    it('has a good utility class', () => {
      expect(component.hasClass('k-u-weight-light')).toBe(true)
    })
  })

  describe('with size prop', () => {
    const component = shallow(<Text size="nano" />)

    it('has a good utility class', () => {
      expect(component.hasClass('k-u-size-nano')).toBe(true)
    })
  })

  describe('with lineHeight prop', () => {
    const component = shallow(<Text lineHeight="normal" />)

    it('has a good utility class', () => {
      expect(component.hasClass('k-u-line-height-normal')).toBe(true)
    })
  })

  describe('with color prop', () => {
    const component = shallow(<Text color="error" />)

    it('has a good utility class', () => {
      expect(component.hasClass('k-u-color-error')).toBe(true)
    })
  })

  describe('with style prop', () => {
    const component = shallow(<Text fontStyle="italic" />)

    it('has a good utility class', () => {
      expect(component.hasClass('k-u-style-italic')).toBe(true)
    })
  })

  describe('with transform prop', () => {
    const component = shallow(<Text transform="uppercase" />)

    it('has a good utility class', () => {
      expect(component.hasClass('k-u-transform-uppercase')).toBe(true)
    })
  })

  describe('with decoration prop', () => {
    const component = shallow(<Text decoration="underline" />)

    it('has a good utility class', () => {
      expect(component.hasClass('k-u-decoration-underline')).toBe(true)
    })
  })

  describe('with settings prop', () => {
    const component = shallow(<Text setting="tnum" />)

    it('has a good utility class', () => {
      expect(component.hasClass('k-u-font-setting-tnum')).toBe(true)
    })
  })
})
