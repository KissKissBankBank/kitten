import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import { ScreenConfig } from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'

const ButtonIcon = Radium(ButtonIconBase)

export class ButtonWithTooltip extends Component {
  static propTypes = {
    tooltipText: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }

  static defaultProps = {
    tooltipText: '06 44 42 57 89',
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
    const { tooltipText, phoneNumber } = this.props

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
              {tooltipText}
              <span style={styles.tooltip.content.after} />
            </span>

            <ButtonIcon
              modifier="hydrogen"
              aria-label="Phone"
              className="k-ButtonIcon--phone"
              style={styles.icons}
            >
              <PhoneIcon className="k-ButtonIcon__svg" />
            </ButtonIcon>
          </div>
        </a>
      </StyleRoot>
    )
  }
}

const styles = {
  tooltip: {
    position: 'relative',

    content: {
      position: 'absolute',
      top: 60,
      right: -90,
      padding: 20,
      backgroundColor: COLORS.primary1,
      border: '2px solid #19b4fa',
      fontSize: 14,
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
        borderBottomColor: COLORS.primary1,
        borderWidth: 10,
        pointerEvents: 'none',
      },
    },
  },

  icons: {
    marginRight: 9,
    [`@media (min-width: ${ScreenConfig.M.min}px)`]: {
      marginRight: 14,
    },
  },
}
