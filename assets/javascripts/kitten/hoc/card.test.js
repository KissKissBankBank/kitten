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

    test('has default class', () => {
      expect(component.hasClass('k-Card')).toBe(true)
    })
  })

  describe('with light prop', () => {
    const component = shallow(<ExampleCard light />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--light')).toBe(true)
    })
  })

  describe('with padded prop', () => {
    const component = shallow(<ExampleCard padded />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--padded')).toBe(true)
    })
  })

  describe('with rounded="micro" prop', () => {
    const component = shallow(<ExampleCard rounded="micro" />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--microRounded')).toBe(true)
    })
  })

  describe('with rounded="tiny" prop', () => {
    const component = shallow(<ExampleCard rounded="tiny" />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--tinyRounded')).toBe(true)
    })
  })

  describe('with rounded prop', () => {
    const component = shallow(<ExampleCard rounded />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--rounded')).toBe(true)
    })
  })

  describe('with translateOnHover prop', () => {
    const component = shallow(<ExampleCard translateOnHover />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--translateOnHover')).toBe(true)
    })
  })

  describe('with withBorder prop', () => {
    const component = shallow(<ExampleCard withBorder />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--withBorder')).toBe(true)
    })
  })

  describe('with withDarkBorder prop', () => {
    const component = shallow(<ExampleCard withDarkBorder />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--withDarkBorder')).toBe(true)
    })
  })

  describe('with withShadow prop', () => {
    const component = shallow(<ExampleCard withShadow />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--withShadow')).toBe(true)
    })
  })

  describe('with withVerticalPadding prop', () => {
    const component = shallow(<ExampleCard withVerticalPadding />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--withVerticalPadding')).toBe(true)
    })
  })

  describe('with withoutBoxShadowOnHover prop', () => {
    const component = shallow(<ExampleCard withoutBoxShadowOnHover />)

    test('has a good class', () => {
      expect(component.hasClass('k-Card--withoutBoxShadowOnHover')).toBe(true)
    })
  })

  describe('with custom prop', () => {
    const ExampleCard = card(ExampleCardComponent, { 'title': 'Foo' })
    const component = shallow(<ExampleCard title="Bar" />)

    test('has a component custom prop', () => {
      expect(component).to.have.attr('title', 'Bar')
    })
  })
})
