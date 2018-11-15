import React, { Fragment, Component } from 'react'
import Radium from 'radium'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Deprecated } from 'kitten/helpers/utils/deprecated'
import COLORS from 'kitten/constants/colors-config'

class DeprecatedArrowIconSvgBase extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
  }

  static defaultProps = {
    direction: 'right',
    disabled: false,
    className: '',
  }

  render() {
    const { className, direction, disabled, version, ...others } = this.props

    const arrowIconClassNames = classNames(
      'k-ArrowIcon',
      {
        [`k-ArrowIcon--${direction}`]: direction,
        'k-ArrowIcon--disabled': disabled,
      },
      className,
    )

    return (
      <svg
        className={arrowIconClassNames}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6 6"
        {...others}
      >
        <title>Arrow</title>
        <path d="M6 0H0v6h2V2h4z" />
      </svg>
    )
  }
}

const DeprecatedArrowIconSvg = Radium(DeprecatedArrowIconSvgBase)

class DeprecatedArrowIcon extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
  }

  static defaultProps = {
    direction: 'right',
    disabled: false,
    className: '',
  }

  render() {
    const warningMessage =
      'The previous version of ArrowIcon does not handle ' +
      'correctly the center of gravity of the arrow. Please use now the prop ' +
      '`version` with the value `solid` to display an arrow with the right ' +
      'center of gravity.'

    return (
      <Deprecated warningMessage={warningMessage}>
        <Fragment>
          <DeprecatedArrowIconSvg {...this.props} />
        </Fragment>
      </Deprecated>
    )
  }
}

class ArrowIconBase extends Component {
  static propTypes = {
    version: PropTypes.oneOf(['solid', 'deprecated-center-of-gravity']),
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
  }

  static defaultProps = {
    version: 'deprecated-center-of-gravity',
    direction: 'right',
    disabled: false,
    className: '',
  }

  render() {
    const { version, direction, disabled, style, ...others } = this.props

    if (version === 'deprecated-center-of-gravity') {
      return <DeprecatedArrowIcon {...this.props} />
    }

    const arrowStyles = [
      style,
      direction && styles[direction],
      disabled && styles.disabled,
    ]

    return (
      <svg
        style={arrowStyles}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8.48 5.64"
        height="5.64"
        width="8.48"
        {...others}
      >
        <path d="M0 4.24 L4.24,0 L8.48,4.24 L7.08,5.64 L4.24,2.77 L1.4,5.6 z" />
      </svg>
    )
  }
}

const styles = {
  right: {
    transform: 'rotate(90deg)',
  },
  left: {
    transform: 'rotate(-90deg)',
  },
  bottom: {
    transform: 'rotate(180deg)',
  },
  disabled: {
    fill: COLORS.background1,
  },
}

export const ArrowIcon = Radium(ArrowIconBase)
