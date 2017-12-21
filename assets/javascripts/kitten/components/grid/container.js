import React from 'react'
import classNames from 'classnames'

import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'

export class Container extends React.PureComponent {

  constructor(props, context) {
    super(props, context)

    this.mqBelowScreenSize = props.fullWidthBelowScreenSize &&
      createMatchMediaMax(props.fullWidthBelowScreenSize)

    this.state = {
      isBelowScreenSize: this.mqBelowScreenSize &&
        this.mqBelowScreenSize.matches
    }
  }

  componentDidMount () {
    this.mqBelowScreenSize &&
      this.mqBelowScreenSize.addListener(this.onScreenSizeChange)
  }

  componentWillUnmount () {
    this.mqBelowScreenSize &&
      this.mqBelowScreenSize.removeListener(this.onScreenSizeChange)
  }

  onScreenSizeChange = (event) => {
    this.setState({ isBelowScreenSize: event.matches })
  }

  render() {
    const { className, fullWidthBelowScreenSize, ...props } = this.props
    const { isBelowScreenSize } = this.state

    const containerClassName = classNames('k-Container', className, {
      'k-Container--no-padding': isBelowScreenSize,
    })

    return (
      <div className={ containerClassName } { ...props } />
    )
  }
}

Container.defaultProps = {
  className: null,
  fullWidthBelowScreenSize: null,
}
