import React, { Component, Fragment } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { PhoneIcon } from 'kitten/components/icons/phone-icon'
import { TeamCardButtonWithTooltip } from 'kitten/components/cards/team-card/button-with-tooltip'
import { mediaQueries } from 'kitten/hoc/media-queries'

class TeamCardPhoneIconBase extends Component {
  static propTypes = {
    phoneNumber: PropTypes.string,
  }

  static defaultProps = {
    phoneNumber: '',
  }

  render() {
    const { phoneNumber, viewportIsXSOrLess } = this.props

    return (
      <Fragment>
        {viewportIsXSOrLess && (
          <ButtonIcon
            tag="a"
            href={`tel:${phoneNumber}`}
            modifier="hydrogen"
            className="k-ButtonIcon--phone"
            style={{ marginRight: 15 }}
          >
            <PhoneIcon className="k-ButtonIcon__svg" />
          </ButtonIcon>
        )}

        {!viewportIsXSOrLess && (
          <TeamCardButtonWithTooltip
            color="#ff0046"
            pseudoColor="#ff0046"
            {...this.props}
          />
        )}
      </Fragment>
    )
  }
}

export const TeamCardPhoneIcon = mediaQueries(TeamCardPhoneIconBase, {
  viewportIsXSOrLess: true,
})
