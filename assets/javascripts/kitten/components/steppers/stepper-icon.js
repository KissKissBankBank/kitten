import React from 'react'
import classNames from 'classnames'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'

export class StepperIcon extends React.Component {
  render() {
    const iconClassNames = classNames(
      'k-ButtonIcon',
      'k-ButtonIcon--micro',
      'k-ButtonIcon--hydrogen',
      'k-ButtonIcon--withoutHover',
      'k-Stepper__icon',
      this.props.className,
    )

    return (
      <span className={ iconClassNames }>
        { this.props.children }
      </span>
    )
  }
}

export class StepperIconDefault extends React.Component {
  render() {
    return (
      <StepperIcon className="k-ButtonIcon--empty--micro" />
    )
  }
}

export class StepperIconInProgress extends React.Component {
  render() {
    return (
      <StepperIcon className="k-Stepper__icon--inProgress">
        <ArrowIcon className="k-ButtonIcon__svg k-Stepper__svg" />
      </StepperIcon>
    )
  }
}

export class StepperIconValidated extends React.Component {
  render() {
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
}
