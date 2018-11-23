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
    const { phoneNumber, viewportIsMobile } = this.props

    return (
      <Fragment>
        {viewportIsMobile && (
          <ButtonIcon
            tag="a"
            href={`tel:${phoneNumber}`}
            modifier="hydrogen"
            aria-label="Phone"
            className="k-ButtonIcon--phone"
            style={{ marginRight: 15 }}
          >
            <PhoneIcon className="k-ButtonIcon__svg" />
          </ButtonIcon>
        )}

        {!viewportIsMobile && <TeamCardButtonWithTooltip {...this.props} />}
      </Fragment>
    )
  }
}

export const TeamCardPhoneIcon = mediaQueries(TeamCardPhoneIconBase, {
  viewportIsMobile: true,
})
