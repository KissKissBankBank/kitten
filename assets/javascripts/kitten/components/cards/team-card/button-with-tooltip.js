import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import { ScreenConfig } from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'

const ButtonIcon = Radium(ButtonIconBase)

export class TeamCardButtonWithTooltip extends Component {
  static propTypes = {
    phoneNumber: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = { hover: false }
  }

  handleOnMouseEnter = () => {
    this.setState({ hover: true })
  }

  handleOnMouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    const { phoneNumber } = this.props

    const tooltipStyle = [
      styles.tooltip.content,
      this.state.hover && styles.tooltip.content.hover,
    ]

    return (
      <StyleRoot>
        <a
          href={`tel:${phoneNumber}`}
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          <div style={styles.tooltip}>
            <span style={tooltipStyle}>
              {phoneNumber}
              <span style={styles.tooltip.content.after} />
            </span>

            <ButtonIcon
              modifier="hydrogen"
              aria-label="Phone"
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

const backgroundColor = COLORS.primary1

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
      hover: {
        visibility: 'visible',
        opacity: 1,
      },

      after: {
        position: 'absolute',
        left: '50%',
        bottom: '102%',
        height: 0,
        width: 0,
        marginLeft: -8,
        border: '8px solid transparent',
        borderBottomColor: backgroundColor,
        borderWidth: 10,
        pointerEvents: 'none',
      },
    },
  },
}
