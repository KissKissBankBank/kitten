import React from 'react'
import PropTypes from 'prop-types'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { CheckedIcon } from '../../../components/icons/checked-icon'
import { IconBadge } from '../../../components/atoms/icon-badge'

export const StepperIconDefault = props => (
  <StepperIcon {...props} state="default" />
)

export const StepperIconInProgress = props => (
  <StepperIcon {...props} state="inProgress" />
)

export const StepperIconValidated = props => (
  <StepperIcon {...props} state="validated" />
)

export const StepperIcon = ({ state, ...props }) => {
  if (state === 'inProgress' || state === 'progress') {
    return (
      <IconBadge size="tiny" {...props}>
        <ArrowIcon />
      </IconBadge>
    )
  }

  if (state === 'validated' || state === 'valid') {
    return (
      <IconBadge size="tiny" valid {...props}>
        <CheckedIcon />
      </IconBadge>
    )
  }

  return <IconBadge size="tiny" empty {...props} />
}

StepperIcon.defaultProps = {
  state: 'default',
}

StepperIcon.propTypes = {
  state: PropTypes.oneOf([
    'default',
    'progress',
    'inProgress',
    'validated',
    'valid',
  ]),
}
