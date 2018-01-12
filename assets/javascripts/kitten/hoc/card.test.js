import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'

const ExampleCardComponent = props => {
  const exampleClassName = classNames(
    'test-ExampleCard',
    props.className,
  )

  return (
    <div { ...props } className={ exampleClassName } />
  )
}

const ExampleCard = card(ExampleCardComponent)

describe('card()', () => {
  describe('by default', () => {
    const component = shallow(<ExampleCard />)

    it('has default class', () => {
      expect(component.hasClass('k-Card')).toBe(true)
    })
  })

  describe('with light prop', () => {
    const component = shallow(<ExampleCard light />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--light')).toBe(true)
    })
  })

  describe('with padded prop', () => {
    const component = shallow(<ExampleCard padded />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--padded')).toBe(true)
    })
  })

  describe('with rounded="micro" prop', () => {
    const component = shallow(<ExampleCard rounded="micro" />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--microRounded')).toBe(true)
    })
  })

  describe('with rounded="tiny" prop', () => {
    const component = shallow(<ExampleCard rounded="tiny" />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--tinyRounded')).toBe(true)
    })
  })

  describe('with rounded prop', () => {
    const component = shallow(<ExampleCard rounded />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--rounded')).toBe(true)
    })
  })

  describe('with translateOnHover prop', () => {
    const component = shallow(<ExampleCard translateOnHover />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--translateOnHover')).toBe(true)
    })
  })

  describe('with withBorder prop', () => {
    const component = shallow(<ExampleCard withBorder />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--withBorder')).toBe(true)
    })
  })

  describe('with withDarkBorder prop', () => {
    const component = shallow(<ExampleCard withDarkBorder />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--withDarkBorder')).toBe(true)
    })
  })

  describe('with withShadow prop', () => {
    const component = shallow(<ExampleCard withShadow />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--withShadow')).toBe(true)
    })
  })

  describe('with withVerticalPadding prop', () => {
    const component = shallow(<ExampleCard withVerticalPadding />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--withVerticalPadding')).toBe(true)
    })
  })

  describe('with withoutBoxShadowOnHover prop', () => {
    const component = shallow(<ExampleCard withoutBoxShadowOnHover />)

    it('has a good class', () => {
      expect(component.hasClass('k-Card--withoutBoxShadowOnHover')).toBe(true)
    })
  })

  describe('with custom prop', () => {
    const ExampleCard = card(ExampleCardComponent, { 'title': 'Foo' })
    const component = shallow(<ExampleCard title="Bar" />)

    it('has a component custom prop', () => {
      expect(component.props().title).toBe('Bar')
    })
  })
})
