import React from 'react'
import classNames from 'classnames'
import { Stepper } from 'kitten/components/steppers/stepper'

export class KarlMakerStepper extends React.Component {
  render() {
    return (
      <div className="k-Row k-Row--centered k-Row--lightBottomBorder">
        <div className="k-Row__content">
          <Stepper items={ this.props.items } />
        </div>
      </div>
    )
  }
}
