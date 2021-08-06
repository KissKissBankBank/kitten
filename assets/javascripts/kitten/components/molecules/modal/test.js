import React from 'react'
import sinon from 'sinon'
import { Modal } from './index'

describe('<Modal />', () => {
  const sandbox = sinon.createSandbox()
  console.warn = jest.fn()

  describe('with trigger', () => {
    const component = mount(
      <Modal trigger={<span className="trigger-example" />} />,
    )

    it('contains the trigger', () => {
      expect(console.warn).toHaveBeenCalledWith(
        'The Modal component on `modals/modal` will be deprecated in favor of `ModalNext`.',
      )
      expect(component.find('.trigger-example').exists()).toBe(true)
    })
  })

  describe('with content prop', () => {
    const component = mount(<Modal className="content-example" />)

    it('contains the content', () => {
      expect(console.warn).toHaveBeenCalledWith(
        'The Modal component on `modals/modal` will be deprecated in favor of `ModalNext`.',
      )
      expect(component.render().hasClass('content-example')).toBe(true)
      expect(component.render().hasClass('k-Modal')).toBe(true)
    })

    describe('with onClose prop', () => {
      let onCloseSpy
      let modalComponent

      beforeAll(() => {
        onCloseSpy = sandbox.spy()
        modalComponent = mount(
          <Modal className="content-example" onClose={onCloseSpy} />,
        )

        modalComponent.instance().close()
      })

      it('calls onClose prop callback', () => {
        expect(console.warn).toHaveBeenCalledWith(
          'The Modal component on `modals/modal` will be deprecated in favor of `ModalNext`.',
        )
        expect(onCloseSpy.calledOnce).toBe(true)
      })
    })
  })
})
