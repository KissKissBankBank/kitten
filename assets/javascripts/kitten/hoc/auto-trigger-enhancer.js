import React from 'react'
import domElementHelper from 'kitten/helpers/dom/element-helper'

export const autoTriggerEnhancer = (WrappedComponent, wrappedComponentProps) => {
  class AutoTriggerWrapper extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        play: false
      }

      this.handleStop = this.handleStop.bind(this)
    }

    componentDidMount() {
      if (this.shouldStart()) {
        this.start()
      }
    }

    handleStop() {
      this.stop()

      this.dispatchEvent(this.props.stopEventName)
    }

    dispatchEvent(eventLabel) {
      if (!domElementHelper.canUseDom()) return

      const event = document.createEvent('Event')

      event.initEvent(eventLabel, true, true)
      window.dispatchEvent(event)
    }

    shouldStart() {
      if (!domElementHelper.canUseDom()) { return false }
      if (this.props.development) { return true }

      // TODO: better implementation of localStorage as state store for React
      // component.
      const componentState = JSON.parse(localStorage.getItem(this.props.storeName))

      return !(componentState && componentState.hasPlayed)
    }

    start() {
      this.setState({
        play: true
      })

      const componentState = JSON.stringify({ hasPlayed: true })
      const storeName = this.props.storeName

      setTimeout(() => {
        localStorage.setItem(storeName, componentState)
      }, 1000)
    }

    stop() {
      this.setState({ play: false })
    }

    handlerProps() {
      const handlerProps = {}

      if (this.props.stopHandlerName) {
        handlerProps[this.props.stopHandlerName] = this.handleStop
      }

      return handlerProps
    }

    render() {
      if (!this.state.play) return <div></div>

      return (
        <WrappedComponent
          { ...this.handlerProps() }
          { ...wrappedComponentProps } />
      )
    }
  }

  AutoTriggerWrapper.defaultProps = {
    storeName: 'kitten.AutoTrigger',
    development: false,
    stopEventName: 'k:auto-trigger:stop',
    stopHandlerName: null,
  }

  return AutoTriggerWrapper
}
