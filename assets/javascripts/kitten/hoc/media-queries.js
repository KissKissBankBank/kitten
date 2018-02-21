import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
import {
  SCREEN_SIZE_XS,
  SCREEN_SIZE_M,
} from 'kitten/constants/screen-config'

export const mediaQueries = (WrappedComponent, hocProps = {}) => (
  class extends Component {
    constructor(props) {
      super(props)

      this.state = {}

      if (this.mobileMediaQueryEnabled()) {
        this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
        this.state = { ...this.state, viewportIsMobile: false }
      }

      if (this.tabletOrLessMediaQueryEnabled()) {
        this.mqTabletOrLess = createMatchMediaMax(SCREEN_SIZE_M)
        this.state = { ...this.state, viewportIsTabletOrLess: false }
      }
    }

    mobileMediaQueryEnabled = () => (
      typeof(hocProps.viewportIsMobile) !== 'undefined'
        ? hocProps.viewportIsMobile
        : false
    )

    tabletOrLessMediaQueryEnabled = () => (
      typeof(hocProps.viewportIsTabletOrLess) !== 'undefined'
        ? hocProps.viewportIsTabletOrLess
        : false
    )

    componentDidMount() {
      if (this.mqMobile) {
        this.mqMobile.addListener(this.onMobileMQ)
        this.onMobileMQ(this.mqMobile)
      }

      if (this.mqTabletOrLess) {
        this.mqTabletOrLess.addListener(this.onTabletMQ)
        this.onTabletMQ(this.mqTabletOrLess)
      }
    }

    componentWillUnmount() {
      if (this.mqMobile) {
        this.mqMobile.removeListener(this.onMobileMQ)
      }

      if (this.mqTabletOrLess) {
        this.mqTabletOrLess.removeListener(this.onTabletMQ)
      }
    }

    onMobileMQ = event => {
      this.setState({ viewportIsMobile: event.matches })
    }

    onTabletMQ = event => {
      this.setState({ viewportIsTabletOrLess: event.matches })
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          viewportIsMobile={ this.state.viewportIsMobile }
          viewportIsTabletOrLess={ this.state.viewportIsTabletOrLess }
        />
      )
    }
  }
)
