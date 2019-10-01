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

export const StatusWithBullet = ({
  statusMessage,
  statusType,
  bulletProps,
  messageAttributes,
  ...props
}) => {
  let statusColor = COLORS.valid
  if (statusType === 'danger') {
    statusColor = COLORS.error
  }

  return (
    <StyledStatus statusColor={statusColor} {...props}>
      <StyledBullet aria-hidden="true" {...bulletProps} />
      {statusMessage}
    </StyledStatus>
  )
}

StatusWithBullet.propTypes = {
  statusMessage: PropTypes.node.isRequired,
  statusType: PropTypes.oneOf(['danger', 'success']),
  bulletProps: PropTypes.object,
}

StatusWithBullet.defaultProps = {
  statusType: 'success',
  bulletProps: {},
}
