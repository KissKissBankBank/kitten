import React from 'react'
import PropTypes from 'prop-types'
import { Badge as BadgeComponent } from '../../../../components/atoms/badge'
import COLORS from '../../../../constants/colors-config'

export const Badge = ({ backgroundColor, ...props }) => (
  <BadgeComponent color={backgroundColor} spaced {...props} />
)

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string,
}

Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)',
}
