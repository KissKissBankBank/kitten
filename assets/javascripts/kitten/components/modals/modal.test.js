import React from 'react'
import classNames from 'classnames'
import { shallow, mount } from 'enzyme'
import { Modal } from 'kitten/components/modals/modal'

describe('<Modal />', () => {
  describe('with trigger', () => {
    const component = mount(
      <Modal trigger={ <span className="trigger-example" /> } />
    )

    it('contains the trigger', () => {
      expect(component.find('.trigger-example').exists()).toBe(true)
    })
  })

  describe('with content prop', () => {
    const component = mount(
      <Modal className="content-example" />
    )

    it('contains the content', () => {
      expect(component.render().hasClass('content-example')).toBe(true)
      expect(component.render().hasClass('k-Modal')).toBe(true)
    })
  })
})
