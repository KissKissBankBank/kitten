import React from 'react'
import classNames from 'classnames'
import { expect } from 'chai'
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

    it('is a <div />', () => {
      expect(alert).to.have.tagName('div')
    })

    it('has a default classes', () => {
      expect(alert).to.have.className('k-Alert')
      expect(alert).to.have.descendants('.k-Alert__container')
      expect(alert).to.have.descendants('.k-Alert__row')
      expect(alert).to.have.descendants('.k-Alert__content')
    })

    it('has a role alert', () => {
      expect(alert).to.have.attr('role', 'alert')
    })

    it('has not a <CloseButton />', () => {
      expect(alert).not.to.have.descendants('CloseButton')
    })

    it('has initial state', () => {
      expect(alert.state().show).to.be.true
      expect(alert.state().height).to.be.equal('auto')
    })
  })

  describe('with show prop at false', () => {
    const alert = shallow(<Alert show={ false } />)

    it('don\'t show the alert', () => {
      expect(alert).to.be.empty
    })
  })

  describe('with error prop', () => {
    const alert = shallow(<Alert error />)

    it('has a error class', () => {
      expect(alert).to.have.className('k-Alert--error')
    })
  })

  describe('with success prop', () => {
    const alert = shallow(<Alert success />)

    it('has a success class', () => {
      expect(alert).to.have.className('k-Alert--success')
    })
  })

  describe('with custom class', () => {
    const alert = shallow(<Alert className="custom__class" />)

    it('has a custom class', () => {
      expect(alert).to.have.className('custom__class')
    })
  })

  describe('with other prop', () => {
    const alert = shallow(<Alert aria-hidden="true" />)

    it('has an aria-hidden attribute', () => {
      expect(alert).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with close button', () => {
    const alert = shallow(
      <Alert closeButton closeButtonLabel="Close this alert" />
    )

    it('has a <CloseButton />', () => {
      expect(alert).to.have.descendants('CloseButton')
    })

    it('has a label', () => {
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

    it('has text', () => {
      expect(alert).to.have.text(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit…'
      )
    })
  })

  describe('with onClose prop', () => {
    let onCloseSpy
    let alertComponent
    let handleAnimationEnd

    before(() => {
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
      expect(onCloseSpy.calledOnce).to.equal(true)
    })
  })

  describe('simulates onAnimationEnd event', () => {
    let onCloseSpy
    let alertComponent

    before(() => {
      onCloseSpy = sandbox.spy()
      alertComponent = mount(<Alert onClose={ onCloseSpy } />)

      alertComponent.simulate('animationEnd')
    })

    it('has handleAnimationEnd in onAnimationEnd attribute', () => {
      expect(onCloseSpy.calledOnce).to.equal(true)
    })
  })

  describe('simulates click event on CloseButton', () => {
    const alert = mount(<Alert closeButton />)
    const closeButton = alert.find('CloseButton')

    before(() => {
      closeButton.simulate('click')
    })

    it('changes state', () => {
      expect(alert.state().show).to.be.false
      expect(alert.state().height).not.to.be.equal('auto')
    })

    it('has a hidden class', () => {
      expect(alert).to.have.className('k-Alert--hidden')
    })
  })
})
