import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import COLORS from 'kitten/constants/colors-config'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import { EmbedIcon as EmbedIconBase } from 'kitten/components/icons/embed-icon'

const ButtonIcon = Radium(ButtonIconBase)
const EmbedIcon = Radium(EmbedIconBase)

class KarlButtonIconTooltipComponent extends Component {
  render() {
    const embedIsHovered = Radium.getState(this.state, 'embed-button', ':hover')
    const embedIsFocused = Radium.getState(this.state, 'embed-button', ':focus')
    const embedIsActived = Radium.getState(
      this.state,
      'embed-button',
      ':active',
    )

    const isDisabled = this.props.disabled

    return (
      <StyleRoot>
        <div style={styles.tooltip}>
          <span style={styles.tooltip.content}>
            {this.props.tooltipText}
            <span style={styles.tooltip.content.after} />
          </span>
          <ButtonIcon
            key="embed-button"
            aria-label="Embed button"
            title="Embed button"
            disabled={isDisabled}
            modifier="azote"
            style={styles.tooltip.buttonIcon}
          >
            <EmbedIcon
              key={`icon-${embedIsHovered}`}
              className="k-ButtonIcon__svg"
              style={styles.tooltip.buttonIcon.svg}
            />
          </ButtonIcon>
        </div>
      </StyleRoot>
    )
  }
}

const styles = {
  tooltip: {
    ':hover': {},
    ':focus': {},
    ':active': {},
    ':disabled': {},

    position: 'relative',
    display: 'flex',

    content: {
      position: 'absolute',
      top: '-7px',
      right: '30px',
      padding: '10px',
      backgroundColor: COLORS.primary1,

      whiteSpace: 'nowrap',
      color: COLORS.background1,
      fontSize: '12px',
      lineHeight: 'normal',
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity .2s, visibility .2s',

      after: {
        position: 'absolute',
        left: '100%',
        top: '50%',
        content: ' ',
        height: '0',
        width: '0',
        marginTop: '-5px',

        border: 'solid transparent',
        borderLeftColor: COLORS.primary1,
        borderWidth: '5px',

        pointerEvents: 'none',
      },
    },

    buttonIcon: {
      width: '50px',
      height: '50px',
      display: 'flex',
      svg: {
        width: '20px',
        height: '20px',
        transform: 'rotate(45deg)',
      },
    },
  },
}

export const KarlButtonIconTooltip = Radium(KarlButtonIconTooltipComponent)
