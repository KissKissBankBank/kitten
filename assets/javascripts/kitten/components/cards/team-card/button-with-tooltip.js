import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { withTooltip } from 'kitten/hoc/with-tooltip'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import { ScreenConfig } from 'kitten/constants/screen-config'

const ButtonIcon = Radium(ButtonIconBase)

class TeamCardButtonWithTooltipBase extends Component {
  render() {
    const { phoneNumber } = this.props

    return (
      <StyleRoot>
        <ButtonIcon
          href={`tel:${phoneNumber}`}
          modifier="hydrogen"
          aria-label="Phone"
          className="k-ButtonIcon--phone"
          style={styles.icons}
        >
          <PhoneIcon className="k-ButtonIcon__svg" />
        </ButtonIcon>
      </StyleRoot>
    )
  }
}

const styles = {
  icons: {
    marginRight: 9,
    [`@media (min-width: ${ScreenConfig.M.min}px)`]: {
      marginRight: 14,
    },
  },
}

export const TeamCardButtonWithTooltip = withTooltip(
  TeamCardButtonWithTooltipBase,
  {
    children: '06 00 00 00 00',
  },
)
