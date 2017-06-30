import React from 'react'
import classNames from 'classnames'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { modal } from 'kitten/hoc/modal'

const ExampleModalComponent = props => {
  const exampleClassName = classNames(
    'test-ExampleModal',
    props.className,
  )

  return (
    <div { ...props } className={ exampleClassName } />
  )
}

const ExampleModal = modal(ExampleModalComponent)

describe('modal()', () => {
  describe('by default', () => {
    const component = shallow(<ExampleModalComponent />)

    it('has a default class', () => {
      expect(component).to.have.className('k-Modal')
    })
  })

  describe('with button', () => {
    const component = component.children().first()
  })

  describe('with CloseButton', () => {
    const component = shallow(<ExampleModalComponent closeButon />)

    it('renders CloseButton', () => {
      expect(component).to.have.className('k-Modal__close')
    })
  })

  describe('with react modal', () => {
    it('renders ReactModal', () => {
      const modal = component.children().last()

      expect(modal).to.have.type(ReactModal)
    })
  })
})
