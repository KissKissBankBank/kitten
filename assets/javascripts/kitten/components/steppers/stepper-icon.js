import React from 'react'
import classNames from 'classnames'

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
        <svg className="k-ButtonIcon__svg k-Stepper__svg"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 6 8.99">
          <path d="M6 4.48L4.51 6 0 1.48 1.51 0z"/>
          <path d="M6 4.48L1.51 9 0 7.48 4.51 3z"/>
        </svg>
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
        <svg className="k-ButtonIcon__svg k-Stepper__svg"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 11 8">
          <path d="M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z"/>
          <path d="M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z"/>
        </svg>
      </StepperIcon>
    )
  }
}
