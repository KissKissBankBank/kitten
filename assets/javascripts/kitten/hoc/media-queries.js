import React, { Component } from 'react'
import {
  createMatchMediaMax,
  createMatchMedia,
} from 'kitten/helpers/utils/media-queries'
import {
  SCREEN_SIZE_XS,
  SCREEN_SIZE_S,
  SCREEN_SIZE_M,
} from 'kitten/constants/screen-config'

const viewPortTable = {
  viewportIsMobile: SCREEN_SIZE_XS,
  viewportIsSOrLess: SCREEN_SIZE_S,
  viewportIsTabletOrLess: SCREEN_SIZE_M,
}

export const withMediaQueries = hocProps => WrapperComponent =>
  mediaQueries(WrapperComponent, hocProps)

export const mediaQueries = (WrappedComponent, hocProps = {}) =>
  class extends Component {
    constructor(props) {
      super(props)

      this.viewports = {}
      this.state = Object.keys(hocProps).reduce((result, prop) => {
        return this.isInvalidProp(prop) ? result : { ...result, [prop]: false }
      }, {})
    }

    cloneMethods = wrappedComponentInstance => {
      if (!wrappedComponentInstance) return

      Object.keys(wrappedComponentInstance).forEach(property => {
        if (typeof wrappedComponentInstance[property] === 'function') {
          this[property] = wrappedComponentInstance[property]
        }
      })
    }

    isInvalidProp(prop) {
      return (
        (typeof hocProps[prop] === 'boolean' && !viewPortTable[prop]) ||
        !['boolean', 'string'].includes(typeof hocProps[prop])
      )
    }

    componentDidMount() {
      for (let prop in hocProps) {
        const propValue = hocProps[prop]
        if (this.isInvalidProp(prop)) {
          break
        }
        this.viewports[prop] =
          typeof propValue === 'boolean'
            ? createMatchMediaMax(viewPortTable[prop])
            : createMatchMedia(propValue)
        this.viewports[prop].cb = event =>
          this.setState({ [prop]: event.matches })
        this.viewports[prop].addListener(this.viewports[prop].cb)
        this.viewports[prop].cb(this.viewports[prop])
      }
    }

    componentWillUnmount() {
      Object.keys(this.viewports).forEach(prop =>
        this.viewports[prop].removeListener(this.viewports[prop].cb),
      )
    }

    render() {
      return (
        <WrappedComponent
          ref={this.cloneMethods}
          {...this.props}
          {...this.state}
        />
      )
    }
  }
