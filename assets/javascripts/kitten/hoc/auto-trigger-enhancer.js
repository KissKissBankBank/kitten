import React from 'react'
import domElementHelper from 'kitten/helpers/dom/element-helper'

export const autoTriggerEnhancer = (WrappedComponent, wrappedComponentProps) => {
  class AutoTriggerWrapper extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        play: false
      }
    }

    componentDidMount() {
      if (this.shouldStart()) {
        this.start()
      }
    }

    shouldStart() {
      if (!domElementHelper.canUseDom()) { return false }

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

      if (!this.props.development) {
        localStorage.setItem(this.props.storeName, componentState)
      }
    }

    stop() {
      this.setState({ play: false })
    }

    render() {
      if (!this.state.play) return <div></div>

      return <WrappedComponent { ...wrappedComponentProps } />
    }
  }

  AutoTriggerWrapper.defaultProps = {
    storeName: 'kitten.AutoTrigger',
    development: false,
  }

  return AutoTriggerWrapper
}
