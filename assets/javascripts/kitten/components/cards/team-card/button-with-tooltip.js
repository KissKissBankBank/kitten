import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import COLORS from 'kitten/constants/colors-config'

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
    const { phoneNumber, color, pseudoColor } = this.props

    const tooltipStyle = [
      colorTooltip(color),
      styles.tooltip.content,
      this.state.hover && styles.tooltip.content.hover,
      this.state.focus && styles.tooltip.content.focus,
    ]

    const tooltipPseudoStyle = [
      styles.tooltip.content.after,
      colorPseudoTooltip(pseudoColor),
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
              <span style={tooltipPseudoStyle} />
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

const colorPseudoTooltip = pseudoTooltipColor => ({
  borderBottomColor: `${pseudoTooltipColor}`,
})

const colorTooltip = backgroundTooltipColor => ({
  backgroundColor: `${backgroundTooltipColor}`,
  borderColor: `${backgroundTooltipColor}`,
})

const backgroundColor = COLORS.primary1

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
      opacity: 1,
      visibility: 'visible',
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
        pointerEvents: 'none',
      },
    },
  },
}
