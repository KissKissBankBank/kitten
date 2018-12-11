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
    tooltipColor: PropTypes.string,
    tooltipPseudoColor: PropTypes.string,
  }

  static defaultProps = {
    phoneNumber: '',
    tooltipColor: '#19b4fa',
    tooltipPseudoColor: '#19b4fa',
  }

  render() {
    const {
      phoneNumber,
      viewportIsXSOrLess,
      tooltipColor,
      tooltipPseudoColor,
    } = this.props

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
            color={tooltipColor}
            pseudoColor={tooltipPseudoColor}
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
