import React from 'react'
import PropTypes from 'prop-types'
import { ButtonIcon } from '../../../../action/button-icon'
import { PhoneIcon } from '../../../../graphics/icons/phone-icon'
import { TeamCardButtonWithTooltip } from './button-with-tooltip'
import COLORS from '../../../../../constants/colors-config'
import classNames from 'classnames'

export const TeamCardPhoneIcon = ({
  phoneNumber,
  tooltipColor,
  className,
  buttonLabel,
  ...props
}) => {
  return (
    <>
      <ButtonIcon
        tag="a"
        href={`tel:${phoneNumber}`}
        modifier="hydrogen"
        size="tiny"
        className={classNames(
          'k-ButtonIcon--phone',
          'k-u-hidden@s-up',
          className,
        )}
        aria-label={buttonLabel}
      >
        <PhoneIcon aria-hidden className="k-ButtonIcon__svg" />
      </ButtonIcon>

      <TeamCardButtonWithTooltip
        phoneNumber={phoneNumber}
        tooltipColor={tooltipColor}
        className={classNames('k-u-hidden@xs-down', className)}
        aria-label={buttonLabel}
        {...props}
      />
    </>
  )
}

TeamCardPhoneIcon.propTypes = {
  phoneNumber: PropTypes.string,
  tooltipColor: PropTypes.string,
  buttonLabel: PropTypes.string,
}

TeamCardPhoneIcon.defaultProps = {
  phoneNumber: '',
  tooltipColor: COLORS.primary1,
  buttonLabel: 'Telephone',
}
