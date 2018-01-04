import React from 'react'
import Radium from 'radium'
import classNames from 'classnames'
import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'

class ContainerBase extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.mqBelowScreenSize = props.fullWidthBelowScreenSize &&
      createMatchMediaMax(props.fullWidthBelowScreenSize)

    this.state = {
      isBelowScreenSize: this.mqBelowScreenSize &&
        this.mqBelowScreenSize.matches
    }
  }

  componentDidMount() {
    this.mqBelowScreenSize &&
      this.mqBelowScreenSize.addListener(this.onScreenSizeChange)
  }

  componentWillUnmount() {
    this.mqBelowScreenSize &&
      this.mqBelowScreenSize.removeListener(this.onScreenSizeChange)
  }

  onScreenSizeChange = event => {
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

ContainerBase.defaultProps = {
  className: null,
  fullWidthBelowScreenSize: null,
}

export const Container = Radium(ContainerBase)
