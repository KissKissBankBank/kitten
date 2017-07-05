import React from 'react'
import classNames from 'classnames'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ReactModal from 'react-modal'
import { Modal } from 'kitten/components/modals/modal'
import { Button } from 'kitten/components/buttons/button'
import { CloseButton } from 'kitten/components/buttons/close-button'

describe('<Modal />', () => {
  describe('with trigger', () => {
    const component = mount(
      <Modal trigger={ <span className="trigger-example" /> } />
    )

    it('contains the trigger', () => {
      expect(component).to.have.descendants('.trigger-example')
    })
  })

  describe('with className', () => {
    const component = mount(
      <Modal className="content-example" />
    )

    it('contains the content', () => {
      expect(component).to.have.className('k-ModalTrigger')
      expect(component).to.have.className('content-example')
      expect(component).to.have.descendants('.k-ModalTrigger__trigger')
    })
  })
})
