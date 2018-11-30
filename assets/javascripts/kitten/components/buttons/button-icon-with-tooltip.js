import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { pxToRem } from 'kitten/helpers/utils/typography'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import { Button } from 'kitten/components/buttons/button'
import COLORS from 'kitten/constants/colors-config'

const ButtonIcon = Radium(ButtonIconBase)

export class ButtonIconWithTooltip extends Component {
  static propTypes = {
    tooltip: PropTypes.string.isRequired,
    href: PropTypes.string,
    ariaId: PropTypes.string.isRequired,
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

  handleFocus = () => {
    this.setState({ focus: true })
  }

  handleBlur = () => {
    this.setState({ focus: false })
  }

  handleOnMouseEnter = () => {
    this.setState({ hover: true })
  }

  handleOnMouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    const { ariaId } = this.props

    return (
      <StyleRoot>
        <div
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          aria-controls={ariaId}
          style={{ outline: 'none' }}
        >
          {this.renderTooltip()}
        </div>
      </StyleRoot>
    )
  }

  renderTooltip() {
    const { ariaId, tooltip, href } = this.props

    const tooltipStyle = [
      styles.tooltip.content,
      this.state.hover && styles.tooltip.content.hover,
      this.state.focus && styles.tooltip.content.focus,
    ]

    return (
      <a id={ariaId} style={styles.tooltip} tag="button" href={href}>
        <span style={tooltipStyle}>
          {tooltip}
          <span style={styles.tooltip.content.after} />
        </span>
        {this.renderButton()}
      </a>
    )
  }

  renderButton() {
    const { modifier, size, children, href } = this.props

    return (
      <ButtonIcon modifier={modifier} size={size} href={href}>
        {children}
      </ButtonIcon>
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
      maxWidth: 440,
      top: 55,
      padding: 20,
      // marginLeft: -50,
      backgroundColor: backgroundColor,
      border: '2px solid #19b4fa',
      fontSize: pxToRem(14),
      lineHeight: 'normal',
      fontWeight: 'regular',
      color: COLORS.background1,
      opacity: 1,
      visibility: 'visible',
      transition: 'opacity .2s, visibility .2s',
      pointer: 'cursor',
      hover: pseudoClass,
      focus: pseudoClass,

      after: {
        position: 'absolute',
        left: 20,
        bottom: '102%',
        height: 0,
        width: 0,
        border: '10px solid transparent',
        borderBottomColor: backgroundColor,
        pointerEvents: 'none',
      },
    },
  },
}
