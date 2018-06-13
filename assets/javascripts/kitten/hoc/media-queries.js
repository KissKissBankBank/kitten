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

export const withMediaQueries = hocProps => WrapperComponent =>
  mediaQueries(WrapperComponent, hocProps)

export const mediaQueries = (WrappedComponent, hocProps = {}) =>
  class extends Component {
    constructor(props) {
      super(props)

      this.state = {}

      const {
        viewportIsMobile,
        viewportIsSOrLess,
        viewportIsTabletOrLess,
        ...customProps
      } = hocProps

      this.custom = {}
      this.customProps = customProps

      if (this.mobileMediaQueryEnabled()) {
        this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
        this.state = { ...this.state, viewportIsMobile: false }
      }

      if (this.sMediaQueryEnabled()) {
        this.mqSOrLess = createMatchMediaMax(SCREEN_SIZE_S)
        this.state = { ...this.state, viewportIsSOrLess: false }
      }

      if (this.tabletOrLessMediaQueryEnabled()) {
        this.mqTabletOrLess = createMatchMediaMax(SCREEN_SIZE_M)
        this.state = { ...this.state, viewportIsTabletOrLess: false }
      }

      const customState = Object.keys(this.customProps).reduce(
        (result, prop) => ({ ...result, [prop]: false }),
        {},
      )

      this.state = { ...this.state, ...customState }
    }

    mobileMediaQueryEnabled = () =>
      typeof hocProps.viewportIsMobile !== 'undefined'
        ? hocProps.viewportIsMobile
        : false

    sMediaQueryEnabled = () =>
      typeof hocProps.viewportIsSOrLess !== 'undefined'
        ? hocProps.viewportIsSOrLess
        : false

    tabletOrLessMediaQueryEnabled = () =>
      typeof hocProps.viewportIsTabletOrLess !== 'undefined'
        ? hocProps.viewportIsTabletOrLess
        : false

    componentDidMount() {
      if (this.mqMobile) {
        this.mqMobile.addListener(this.onMobileMQ)
        this.onMobileMQ(this.mqMobile)
      }

      if (this.mqSOrLess) {
        this.mqSOrLess.addListener(this.onSMQ)
        this.onSMQ(this.mqSOrLess)
      }

      if (this.mqTabletOrLess) {
        this.mqTabletOrLess.addListener(this.onTabletMQ)
        this.onTabletMQ(this.mqTabletOrLess)
      }

      Object.keys(this.customProps).forEach(prop => {
        this.custom[prop] = createMatchMedia(this.customProps[prop])
        this.custom[prop].cb = event => this.setState({ [prop]: event.matches })
        this.custom[prop].addListener(this.custom[prop].cb)
      })
    }

    componentWillUnmount() {
      if (this.mqMobile) {
        this.mqMobile.removeListener(this.onMobileMQ)
      }

      if (this.mqSOrLess) {
        this.mqSOrLess.removeListener(this.onSMQ)
      }

      if (this.mqTabletOrLess) {
        this.mqTabletOrLess.removeListener(this.onTabletMQ)
      }

      this.customProps = Object.keys(this.customProps).forEach(prop =>
        this.custom[prop].removeListener(this.custion[prop].cb),
      )
    }

    onMobileMQ = event => {
      this.setState({ viewportIsMobile: event.matches })
    }

    onSMQ = event => {
      this.setState({ viewportIsSOrLess: event.matches })
    }

    onTabletMQ = event => {
      this.setState({ viewportIsTabletOrLess: event.matches })
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
