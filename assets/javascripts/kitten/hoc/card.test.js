import React from 'react'
import classNames from 'classnames'
import { expect } from 'chai'
import { shallow } from 'enzyme'
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
      expect(component).to.have.className('k-Card')
    })
  })

  describe('with light prop', () => {
    const component = shallow(<ExampleCard light />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Card--light')
    })
  })

  describe('with padded prop', () => {
    const component = shallow(<ExampleCard padded />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Card--padded')
    })
  })

  describe('with rounded prop', () => {
    const component = shallow(<ExampleCard rounded />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Card--rounded')
    })
  })

  describe('with translateOnHover prop', () => {
    const component = shallow(<ExampleCard translateOnHover />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Card--translateOnHover')
    })
  })

  describe('with withBorder prop', () => {
    const component = shallow(<ExampleCard withBorder />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Card--withBorder')
    })
  })

  describe('with withShadow prop', () => {
    const component = shallow(<ExampleCard withShadow />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Card--withShadow')
    })
  })

  describe('with withVerticalPadding prop', () => {
    const component = shallow(<ExampleCard withVerticalPadding />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Card--withVerticalPadding')
    })
  })
})
