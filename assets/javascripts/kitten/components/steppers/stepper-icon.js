import React from 'react'
import classNames from 'classnames'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'

const StepperIcon = ({ className, children }) => {
  const iconClassNames = classNames(
    'k-ButtonIcon',
    'k-ButtonIcon--nano',
    'k-ButtonIcon--hydrogen',
    'k-ButtonIcon--withoutHover',
    'k-Stepper__icon',
    className,
  )

  return (
    <span className={ iconClassNames }>
      { children }
    </span>
  )
}

export const StepperIconDefault = () => {
  return (
    <StepperIcon className="k-ButtonIcon--empty--nano" />
  )
}

export const StepperIconInProgress = () => {
  const inProgressClassNames = classNames(
    'k-Stepper__icon--inProgress',
  )

  return (
    <StepperIcon className={ inProgressClassNames }>
      <ArrowIcon className={ classNames('k-ButtonIcon__svg',
                                        'k-Stepper__svg') }
      />
    </StepperIcon>
  )
}

export const StepperIconValidated = () => {
  const validatedClassNames = classNames(
    'k-Stepper__icon--validated',
    'k-ButtonIcon--checked--nano',
  )

  return (
    <StepperIcon className={ validatedClassNames }>
      <CheckedIcon className={ classNames('k-ButtonIcon__svg',
                                          'k-Stepper__svg') }
      />
    </StepperIcon>
  )
}
