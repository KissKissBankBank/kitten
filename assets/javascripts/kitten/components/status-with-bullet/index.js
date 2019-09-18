import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../constants/colors-config'
import TYPOGRAPHY from '../../constants/typography-config'
import { stepToRem, pxToRem } from '../../helpers/utils/typography'

const StyledBullet = styled.span`
  background-color: currentColor;
  display: inline-block;
  /* '.7em' will adapt the size if the parent font size is changed */
  width: 0.7em;
  height: 0.7em;
  line-height: 0.7em;
  margin-right: ${pxToRem(10)};
  border-radius: 50%;
`

const StyledStatus = styled.div`
  color: ${({ statusColor }) => statusColor};
  font-family: ${TYPOGRAPHY.fontStyles.regular.fontFamily};
  font-weight: ${TYPOGRAPHY.fontStyles.regular.fontWeight};
  font-size: ${stepToRem(-1)};
`

export const StatusWithBullet = ({ statusMessage, statusType }) => {
  let statusColor = COLORS.valid
  if (statusType === 'danger') {
    statusColor = COLORS.error
  }
  if (statusType === 'warning') {
    statusColor = COLORS.error
  }

  return (
    <StyledStatus statusColor={statusColor}>
      <StyledBullet aria-hidden="true" />
      {statusMessage}
    </StyledStatus>
  )
}

StatusWithBullet.propTypes = {
  statusMessage: PropTypes.string.isRequired,
  statusType: PropTypes.oneOf(['danger', 'success', 'warning']),
}

StatusWithBullet.defaultProps = {
  statusType: 'success',
}
