import React from 'react'
import classNames from 'classnames'
// import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
// import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import { ArrowCircleIcon } from 'kitten/components/icons/arrow-circle-icon'
import { CheckedCircleIcon } from 'kitten/components/icons/checked-circle-icon'

const StepperIcon = ({ className, children }) => {
  const iconClassNames = classNames(
    'k-ButtonIcon',
    'k-ButtonIcon--micro',
    'k-ButtonIcon--hydrogen',
    'k-ButtonIcon--withoutHover',
    'k-Stepper__icon',
    className,
  )

  return (
    <span className={ iconClassNames }>{ children }</span>
  )
}

export const StepperIconDefault = () => {
  return (
    <StepperIcon className="k-ButtonIcon--empty--micro" />
  )
}

export const StepperIconActive = () => {
  const activeClassNames = classNames(
    'k-ButtonIcon--active--micro',
    'k-ButtonIcon--helium',
  )

  return (
    <StepperIcon className={ activeClassNames} >
      <ArrowIcon className="k-ButtonIcon__svg k-Stepper__svg" />
    </StepperIcon>
  )
}

export const StepperIconInProgress = () => {
  return (
    <StepperIcon className="k-Stepper__icon--inProgress">
      <ArrowIcon className="k-ButtonIcon__svg k-Stepper__svg" />
    </StepperIcon>
  )
}

export const StepperIconValidated = () => {
  const validatedClassNames = classNames(
    'k-Stepper__icon--validated',
    'k-ButtonIcon--checked--micro',
  )

  return (
    <StepperIcon className={ validatedClassNames }>
      <CheckedIcon className="k-ButtonIcon__svg k-Stepper__svg" />
    </StepperIcon>
  )
}
