import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ButtonIcon } from '../../buttons/button-icon'
import { PhoneIcon } from '../../icons/phone-icon'
import { TeamCardButtonWithTooltip } from './button-with-tooltip'
import { mediaQueries } from '../../../hoc/media-queries'

class TeamCardPhoneIconBase extends Component {
  static propTypes = {
    phoneNumber: PropTypes.string,
    tooltipColor: PropTypes.string,
  }

  static defaultProps = {
    phoneNumber: '',
    tooltipColor: '#19b4fa',
  }

  render() {
    const { phoneNumber, viewportIsXSOrLess, tooltipColor } = this.props

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
          <TeamCardButtonWithTooltip {...this.props} color={tooltipColor} />
        )}
      </Fragment>
    )
  }
}

export const TeamCardPhoneIcon = mediaQueries(TeamCardPhoneIconBase, {
  viewportIsXSOrLess: true,
})
