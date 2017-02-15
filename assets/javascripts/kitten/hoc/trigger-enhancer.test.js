import sinon from 'sinon'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { triggerEnhancer } from 'kitten/hoc/trigger-enhancer'
import domElementHelper from 'kitten/helpers/dom/element-helper'
import { localStorageUtils } from 'kitten/helpers/utils/local-storage'

// Because of an unexpected loss of the jsdom context when React re-renders a
// component (using setState on componentDidMount), we have to mount all
// enhancedComponents with the `autorun` prop set to false.
// cf. https://github.com/facebook/react/issues/4025

describe('autoTriggerEnhancer', () => {
  const sandbox = sinon.sandbox.create()
  const CustomComponent = (props) => <div>{ props.text }</div>
  const EnhancedComponent = triggerEnhancer(CustomComponent, {
    text: 'my custom text'
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('by default', () => {
    const enhancedComponent = shallow(<EnhancedComponent />)

    it('renders nothing on mount', () => {
      expect(enhancedComponent).to.be.blank()
    })
  })

  describe('#componentDidMount()', () => {
    let enhancedComponent

    beforeEach(() => {
      enhancedComponent = mount(<EnhancedComponent autorun={ false } />)
    })

    describe('calls shouldStart()', () => {
      let shouldStartSpy

      before(() => {
        shouldStartSpy = sandbox.spy(EnhancedComponent.prototype, 'shouldStart')
      })

      it('once', () => {
        expect(shouldStartSpy.calledOnce).to.equal(true)
      })
    })
  })

  describe('#handleStop()', () => {
    let enhancedComponent

    beforeEach(() => {
      enhancedComponent = mount(<EnhancedComponent autorun={ false } />)

      enhancedComponent.instance().handleStop()
    })

    describe('calls stop()', () => {
      let stopSpy

      before(() => {
        stopSpy = sandbox.spy(EnhancedComponent.prototype, 'stop')
      })

      it('once', () => {
        expect(stopSpy.calledOnce).to.equal(true);
      })
    })

    describe('calls dispatchEvent()', () => {
      let dispatchEventSpy

      before(() => {
        dispatchEventSpy = sandbox.spy(EnhancedComponent.prototype, 'dispatchEvent')
      })

      it('once', () => {
        expect(dispatchEventSpy.calledOnce).to.equal(true);
      })

      it('with this.props.stopEventName', () => {
        expect(dispatchEventSpy.calledWith('k:auto-trigger:stop'))
          .to.equal(true)
      })
    })
  })

  describe('#dispatchEvent', () => {
    let enhancedComponent
    let dispatchEventSpy

    beforeEach(() => {
      dispatchEventSpy = sandbox.spy(window, 'dispatchEvent')
      enhancedComponent = mount(<EnhancedComponent autorun={ false } />)

      enhancedComponent.instance().dispatchEvent('myCustomEvent')
    })

    describe('on server-side rendering', () => {
      before(() => {
        const domElementHelperStub = sandbox.stub(domElementHelper, 'canUseDom')

        domElementHelperStub.returns(false)
      })

      it("doesn't dispatch an event", () => {
        expect(dispatchEventSpy.calledOnce).to.equal(false);
      })
    })

    describe('on client-side rendering', () =>{
      before(() => {
        const domElementHelperStub = sandbox.stub(domElementHelper, 'canUseDom')

        domElementHelperStub.returns(true)
      })

      it('dispatches an event', () => {
        expect(dispatchEventSpy.calledOnce).to.equal(true);
      })
    })
  })

  describe('#hasPlayed()', () => {
    let enhancedComponent
    const storeName = 'kitten.AutoTrigger'

    beforeEach(() => {
      enhancedComponent = mount(<EnhancedComponent autorun={ false } />)
    })

    describe('with localStorage filled with this.props.storeName entry', () => {
      before(() => {
        localStorageUtils.set(storeName, { hasPlayed: true })
      })

      after(() => {
        localStorage.removeItem(storeName)
      })

      it('returns true', () => {
        expect(enhancedComponent.instance().hasPlayed()).to.equal(true)
      })
    })

    describe('without localStorage entry', () => {
      it('returns false', () => {
        expect(enhancedComponent.instance().hasPlayed()).to.equal(false)
      })
    })
  })

  describe('#shouldStart()', () => {
    let enhancedComponent

    describe('on server-side rendering', () => {
      before(() => {
        enhancedComponent = mount(<EnhancedComponent autorun={ false } />)
        const domElementHelperStub = sandbox.stub(domElementHelper, 'canUseDom')

        domElementHelperStub.returns(false)
      })

      it('returns false', () => {
        expect(enhancedComponent.instance().shouldStart()).to.equal(false)
      })
    })

    describe('on client-side rendering', () => {
      describe('when this.props.verifyStorageOnStart is set to false', () => {
        before(() => {
          enhancedComponent = mount(<EnhancedComponent
            verifyStorageOnStart={ false }
          />)

        })

        it('returns true', () => {
          expect(enhancedComponent.instance().shouldStart()).to.equal(true)
        })
      })

      describe('when this.props.autorun is set to false', () => {
        before(() => {
          enhancedComponent = mount(<EnhancedComponent autorun={ false } />)
        })

        it('returns false', () => {
          expect(enhancedComponent.instance().shouldStart()).to.equal(false)
        })
      })

      describe('when the wrapped element has already been displayed', () => {
        before(() => {
          const componentStub = sandbox.stub(
            EnhancedComponent.prototype,
            'hasPlayed'
          )
          enhancedComponent = mount(<EnhancedComponent autorun={ false } />)

          componentStub.returns(true)
        })

        it('returns false', () => {
          expect(enhancedComponent.instance().shouldStart()).to.equal(false)
        })
      })

      describe('when the wrapped element has never been displayed', () => {
        // Pending: this method cannot be tested for the moment because of the issue
        // with jsdom, mocha, enzyme and the re-rendering
          it('returns true')
      })
    })
  })

  describe('#start()', () => {
    // Pending: this method cannot be tested for the moment because of the issue
    // with jsdom, mocha, enzyme and the re-rendering
    it('set the state entry `play` to true')
    it('adds an entry in the localStorage with this.props.storeName as entry name')
  })

  describe('#stop()', () => {
    // Pending: this method cannot be tested for the moment because of the issue
    // with jsdom, mocha, enzyme and the re-rendering
    it('set the state entry `play` to false')
  })

  describe('#handlerProps()', () => {
    let enhancedComponent

    describe('with this.props.stopHandlerName', () => {
      before(() => {
        enhancedComponent = mount(<EnhancedComponent
          autorun={ false }
          stopHandlerName='onCustomStop'
        />)
      })

      it('returns an object with this.props.stopHandlerName entry', () => {
        const expected = {
          onCustomStop: enhancedComponent.instance().handleStop
        }

        expect(enhancedComponent.instance().handlerProps()).to.eql(expected)
      })
    })

    describe('without this.props.stopHandlerName', () => {
      before(() => {
        enhancedComponent = mount(<EnhancedComponent autorun={ false } />)
      })

      it('returns an empty object', () => {
        expect(enhancedComponent.instance().handlerProps()).to.eql({})
      })
    })
  })
})
