import React, { Component } from 'react'
import { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon } from '../../buttons/button-icon'
import { PhoneIcon } from '../../icons/phone-icon'
import COLORS from '../../../constants/colors-config'

export class TeamCardButtonWithTooltip extends Component {
  static propTypes = {
    phoneNumber: PropTypes.string.isRequired,
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

  render() {
    const { phoneNumber, color } = this.props

    const tooltipStyle = [
      tooltipColor(color),
      styles.tooltip.content,
      this.state.hover && styles.tooltip.content.hover,
      this.state.focus && styles.tooltip.content.focus,
    ]

    const arrowTooltipStyle = [
      styles.tooltip.content.after,
      arrowTooltipColor(color),
    ]

    return (
      <StyleRoot>
        <a
          href={`tel:${phoneNumber}`}
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
          onFocus={this.handleSubmitFocus}
          onBlur={this.handleSubmitBlur}
          style={{ outline: 'none' }}
        >
          <div style={styles.tooltip}>
            <span style={tooltipStyle}>
              {phoneNumber}
              <span style={arrowTooltipStyle} />
            </span>

            <ButtonIcon
              modifier="hydrogen"
              className="k-ButtonIcon--phone"
              style={{ marginRight: 15 }}
            >
              <PhoneIcon className="k-ButtonIcon__svg" />
            </ButtonIcon>
          </div>
        </a>
      </StyleRoot>
    )
  }
}

const pseudoClass = {
  visibility: 'visible',
  opacity: 1,
}

const arrowTooltipColor = backgroundTooltipColor => ({
  borderBottomColor: `${backgroundTooltipColor}`,
})

const tooltipColor = backgroundTooltipColor => ({
  backgroundColor: `${backgroundTooltipColor}`,
  borderColor: `${backgroundTooltipColor}`,
})

const styles = {
  tooltip: {
    position: 'relative',

    content: {
      position: 'absolute',
      top: 55,
      padding: 15,
      marginLeft: -50,
      borderSize: 2,
      borderStyle: 'solid',
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
        borderWidth: 10,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        pointerEvents: 'none',
      },
    },
  },
}
