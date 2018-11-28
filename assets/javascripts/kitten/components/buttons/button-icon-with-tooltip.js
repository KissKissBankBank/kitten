import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import COLORS from 'kitten/constants/colors-config'

const ButtonIcon = Radium(ButtonIconBase)

export class ButtonIconWithTooltip extends Component {
  static propTypes = {
    tooltipText: PropTypes.string.isRequired,
    href: PropTypes.string,
    modifier: PropTypes.string,
    size: PropTypes.string,
  }

  static defaultProps = {
    href: '',
    modifier: '',
    size: '',
  }

  constructor(props) {
    super(props)

    this.state = {
      hover: false,
      focus: false,
    }
  }

  handleSubmitFocus = () => {
    this.setState({ focus: true })
  }

  handleSubmitBlur = () => {
    this.setState({ focus: false })
  }

  handleOnMouseEnter = () => {
    this.setState({ hover: true })
  }

  handleOnMouseLeave = () => {
    this.setState({ hover: false })
  }

  renderTooltip() {
    const { tooltipText } = this.props

    const tooltipStyle = [
      styles.tooltip.content,
      this.state.hover && styles.tooltip.content.hover,
      this.state.focus && styles.tooltip.content.focus,
    ]

    return (
      <div style={styles.tooltip}>
        <span style={tooltipStyle}>
          {tooltipText}
          <span style={styles.tooltip.content.after} />
        </span>
        {this.renderButton()}
      </div>
    )
  }

  renderButton() {
    const { children, modifier, size } = this.props

    return (
      <Fragment>
        <ButtonIcon modifier={modifier} size={size}>
          {children}
        </ButtonIcon>
      </Fragment>
    )
  }
  render() {
    const { href } = this.props

    return (
      <StyleRoot>
        <a
          href={href}
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
          onFocus={this.handleSubmitFocus}
          onBlur={this.handleSubmitBlur}
          style={{ outline: 'none' }}
        >
          {this.renderTooltip()}
        </a>
      </StyleRoot>
    )
  }
}

const backgroundColor = COLORS.primary1

const pseudoClass = {
  visibility: 'visible',
  opacity: 1,
}

const styles = {
  tooltip: {
    position: 'relative',

    content: {
      position: 'absolute',
      top: 55,
      padding: 15,
      marginLeft: -50,
      backgroundColor: backgroundColor,
      border: '2px solid #19b4fa',
      fontSize: 14,
      lineHeight: 'normal',
      fontWeight: 'regular',
      color: COLORS.background1,
      whiteSpace: 'nowrap',
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity .2s, visibility .2s',
      hover: pseudoClass,
      focus: pseudoClass,

      after: {
        position: 'absolute',
        left: '50%',
        bottom: '102%',
        height: 0,
        width: 0,
        marginLeft: -8,
        border: '10px solid transparent',
        borderBottomColor: backgroundColor,
        pointerEvents: 'none',
      },
    },
  },
}
