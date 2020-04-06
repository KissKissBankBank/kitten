import React, { Component } from 'react'
import {
  createMatchMediaMax,
  createMatchMedia,
} from '../helpers/utils/media-queries'
import {
  SCREEN_SIZE_XXS,
  SCREEN_SIZE_XS,
  SCREEN_SIZE_S,
  SCREEN_SIZE_M,
  SCREEN_SIZE_L,
} from '../constants/screen-config'

const viewPortTable = {
  viewportIsMobile: SCREEN_SIZE_XS,
  viewportIsTabletOrLess: SCREEN_SIZE_M,

  viewportIsXXS: SCREEN_SIZE_XXS,
  viewportIsXSOrLess: SCREEN_SIZE_XS,
  viewportIsSOrLess: SCREEN_SIZE_S,
  viewportIsMOrLess: SCREEN_SIZE_M,
  viewportIsLOrLess: SCREEN_SIZE_L,
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

    setExposedMethods = wrappedComponentInstance => {
      if (!wrappedComponentInstance) return
      if (!hocProps.exposedMethods) return

      hocProps.exposedMethods.forEach(method => {
        this[method] = wrappedComponentInstance[method]
      })
    }

    isInvalidProp(prop) {
      return (
        (typeof hocProps[prop] === 'boolean' && !viewPortTable[prop]) ||
        !['boolean', 'string'].includes(typeof hocProps[prop])
      )
    }

    warnIfHocPropIsDeprecated(prop) {
      if (process.env.NODE_ENV === 'development') {
        const deprecatedPropsToNewProps = {
          viewportIsMobile: 'viewportIsXSOrLess',
          viewportIsTabletOrLess: 'viewportIsMOrLess',
        }

        if (Object.keys(deprecatedPropsToNewProps).includes(prop)) {
          console.warn(
            `${prop} is deprecated. Please use ${deprecatedPropsToNewProps[prop]} instead now.`,
          )
        }
      }
    }

    componentDidMount() {
      for (let prop in hocProps) {
        const propValue = hocProps[prop]
        if (this.isInvalidProp(prop)) {
          break
        }
        this.warnIfHocPropIsDeprecated(prop)
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
          ref={this.setExposedMethods}
          {...this.props}
          {...this.state}
        />
      )
    }
  }
