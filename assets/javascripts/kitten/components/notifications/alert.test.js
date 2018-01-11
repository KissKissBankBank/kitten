import React from 'react'
import classNames from 'classnames'
import sinon from 'sinon'
import { Alert } from 'kitten/components/notifications/alert'

describe('<Alert />', () => {
  const sandbox = sinon.sandbox.create()

  afterEach(() => {
    sandbox.restore()
  })

  describe('by default', () => {
    const alert = shallow(<Alert />)

    it('is a <div />', () => {
      expect(alert.type()).toBe('div')
    })

    it('has a default classes', () => {
      expect(alert.hasClass('k-Alert')).toBe(true)
      expect(alert.find('.k-Alert__container').exists()).toBe(true)
      expect(alert.find('.k-Alert__row').exists()).toBe(true)
      expect(alert.find('.k-Alert__content').exists()).toBe(true)
    })

    it('has a role alert', () => {
      expect(alert.props().role).toBe('alert')
    })

    it('has not a <CloseButton />', () => {
      expect(alert.find('CloseButton').exists()).toBe(false)
    })

    it('has initial state', () => {
      expect(alert.state().show).toBe(true)
      expect(alert.state().height).toBe('auto')
    })
  })

  describe('with show prop at false', () => {
    const alert = shallow(<Alert show={ false } />)

    it('don\'t show the alert', () => {
      expect(alert.type()).toBeNull()
    })
  })

  describe('with error prop', () => {
    const alert = shallow(<Alert error />)

    it('has a error class', () => {
      expect(alert.hasClass('k-Alert--error')).toBe(true)
    })
  })

  describe('with success prop', () => {
    const alert = shallow(<Alert success />)

    it('has a success class', () => {
      expect(alert.hasClass('k-Alert--success')).toBe(true)
    })
  })

  describe('with custom class', () => {
    const alert = shallow(<Alert className="custom__class" />)

    it('has a custom class', () => {
      expect(alert.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const alert = shallow(<Alert aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
      expect(alert.props()['aria-hidden']).toBe('true')
    })
  })

  describe('with close button', () => {
    const alert = shallow(
      <Alert closeButton closeButtonLabel="Close this alert" />
    )

    it('has a <CloseButton />', () => {
      expect(alert.find('CloseButton').exists()).toBe(true)
    })

    it('has a label', () => {
      const closeButton = alert.find('CloseButton')

      expect(closeButton.props().closeButtonLabel).toBe('Close this alert')
    })
  })

  describe('with children', () => {
    const alert = shallow(
      <Alert>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit…
      </Alert>
    )

    it('has text', () => {
      expect(alert.text()).toBe(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit…'
      )
    })
  })

  describe('with onClose prop', () => {
    let onCloseSpy
    let alertComponent

    beforeAll(() => {
      onCloseSpy = sandbox.spy()
      alertComponent = mount(
        <Alert
          closeButton
          onClose={ onCloseSpy }
        />
      )

      alertComponent.instance().handleAnimationEnd()
    })

    it('calls onClose prop callback', () => {
      expect(onCloseSpy.calledOnce).toBe(true)
    })
  })

  describe('simulates onAnimationEnd event', () => {
    let onCloseSpy
    let alertComponent

    beforeAll(() => {
      onCloseSpy = sandbox.spy()
      alertComponent = mount(<Alert onClose={ onCloseSpy } />)

      alertComponent.simulate('animationEnd')
    })

    it('has handleAnimationEnd in onAnimationEnd attribute', () => {
      expect(onCloseSpy.calledOnce).toBe(true)
    })
  })

  describe('simulates click event on CloseButton', () => {
    const alert = mount(<Alert closeButton />)
    const closeButton = alert.find('CloseButton')

    beforeAll(() => {
      closeButton.simulate('click')
    })

    it('changes state', () => {
      expect(alert.state().show).toBe(false)
      expect(alert.state().height).not.toBe('auto')
    })

    it('has a hidden class', () => {
      expect(alert.render().hasClass('k-Alert--hidden')).toBe(true)
    })
  })
})
