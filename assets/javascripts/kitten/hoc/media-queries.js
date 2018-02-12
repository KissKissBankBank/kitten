import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  createMatchMedia,
  createMatchMediaMax,
} from 'kitten/helpers/utils/media-queries'
import {
  SCREEN_SIZE_XS,
  SCREEN_SIZE_M,
} from 'kitten/constants/screen-config'

export const mediaQueries = (WrappedComponent, hocProps = {}) => (
  class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        mqMobile: typeof(hocProps.mqMobile) !== 'undefined'
          ? hocProps.mqMobile
          : true,
        mqTabletOrLess: typeof(hocProps.mqTabletOrLess) !== 'undefined'
          ? hocProps.mqMobile
          : true,
      }
    }

    componentWillMount() {
      if (this.state.mqMobile) {
        this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
        this.setState({ viewportIsMobile: false })
      }

      if (this.state.mqTabletOrLess) {
        this.mqTabletOrLess = createMatchMediaMax(SCREEN_SIZE_M)
        this.setState({ viewportIsTabletOrLess: false })
      }
    }

    componentDidMount() {
      if (this.state.mqMobile && this.mqMobile) {
        this.mqMobile.addListener(this.onMobileMQ)
        this.onMobileMQ(this.mqMobile)
      }

      if (this.state.mqTabletOrLess && this.mqTabletOrLess) {
        this.mqTabletOrLess.addListener(this.onTabletMQ)
        this.onTabletMQ(this.mqTabletOrLess)
      }
    }

    componentWillUnmount() {
      if (this.state.mqMobile && this.mqMobile) {
        this.mqMobile.removeListener(this.onMobileMQ)
      }

      if (this.state.mqTabletOrLess && this.mqTabletOrLess) {
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
