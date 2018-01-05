import React from 'react'
import classNames from 'classnames'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { Alert } from 'kitten/components/notifications/alert'

describe('<Alert />', () => {
  const sandbox = sinon.sandbox.create()

  afterEach(() => {
    sandbox.restore()
  })

  describe('by default', () => {
    const alert = shallow(<Alert />)

    test('is a <div />', () => {
      expect(alert).to.have.tagName('div')
    })

    test('has a default classes', () => {
      expect(alert.hasClass('k-Alert')).toBe(true)
      expect(alert).to.have.descendants('.k-Alert__container')
      expect(alert).to.have.descendants('.k-Alert__row')
      expect(alert).to.have.descendants('.k-Alert__content')
    })

    test('has a role alert', () => {
      expect(alert).to.have.attr('role', 'alert')
    })

    test('has not a <CloseButton />', () => {
      expect(alert).not.to.have.descendants('CloseButton')
    })

    test('has initial state', () => {
      expect(alert.state().show).toBe(true)
      expect(alert.state().height).toBe('auto')
    })
  })

  describe('with show prop at false', () => {
    const alert = shallow(<Alert show={ false } />)

    test('don\'t show the alert', () => {
      expect(Object.keys(alert)).toHaveLength(0)
    })
  })

  describe('with error prop', () => {
    const alert = shallow(<Alert error />)

    test('has a error class', () => {
      expect(alert.hasClass('k-Alert--error')).toBe(true)
    })
  })

  describe('with success prop', () => {
    const alert = shallow(<Alert success />)

    test('has a success class', () => {
      expect(alert.hasClass('k-Alert--success')).toBe(true)
    })
  })

  describe('with custom class', () => {
    const alert = shallow(<Alert className="custom__class" />)

    test('has a custom class', () => {
      expect(alert.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other prop', () => {
    const alert = shallow(<Alert aria-hidden="true" />)

    test('has an aria-hidden attribute', () => {
      expect(alert).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with close button', () => {
    const alert = shallow(
      <Alert closeButton closeButtonLabel="Close this alert" />
    )

    test('has a <CloseButton />', () => {
      expect(alert).to.have.descendants('CloseButton')
    })

    test('has a label', () => {
      const closeButton = alert.find('CloseButton')

      expect(closeButton).to.have.prop('closeButtonLabel', 'Close this alert')
    })
  })

  describe('with children', () => {
    const alert = shallow(
      <Alert>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit…
      </Alert>
    )

    test('has text', () => {
      expect(alert).to.have.text(
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

    test('calls onClose prop callback', () => {
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

    test('has handleAnimationEnd in onAnimationEnd attribute', () => {
      expect(onCloseSpy.calledOnce).toBe(true)
    })
  })

  describe('simulates click event on CloseButton', () => {
    const alert = mount(<Alert closeButton />)
    const closeButton = alert.find('CloseButton')

    beforeAll(() => {
      closeButton.simulate('click')
    })

    test('changes state', () => {
      expect(alert.state().show).toBe(false)
      expect(alert.state().height).not.toBe('auto')
    })

    test('has a hidden class', () => {
      expect(alert.hasClass('k-Alert--hidden')).toBe(true)
    })
  })
})
