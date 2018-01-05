import React from 'react'
import classNames from 'classnames'
import { shallow, mount } from 'enzyme'
import { Modal } from 'kitten/components/modals/modal'

describe('<Modal />', () => {
  describe('with trigger', () => {
    const component = mount(
      <Modal trigger={ <span className="trigger-example" /> } />
    )

    test('contains the trigger', () => {
      expect(component).to.have.descendants('.trigger-example')
    })
  })

  describe('with content prop', () => {
    const component = mount(
      <Modal className="content-example" />
    )

    test('contains the content', () => {
      expect(component.hasClass('content-example')).toBe(true)
      expect(component.hasClass('k-Modal')).toBe(true)
    })
  })
})
