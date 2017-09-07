import React from 'react'
import objectAssign from 'core-js/library/fn/object/assign'
import Tour from 'kitten/components/tours/tour'

// We directly use svg-react loader for the moment.
// TODO: update webpack config to manage svg in jsx files.
import { MixIllustration } from 'kitten/components/illustrations/mix-illustration'
import { LoudspeakerIllustration } from 'kitten/components/illustrations/loudspeaker-illustration'

class HeaderTour extends React.Component {
  constructor(props) {
    super(props)
  }

  // Component methods.

  isCrowdStep(step) {
    return step.name == 'crowdStep'
  }

  platformSwitchStep() {
    const content = this.props.platformSwitchStep
    const illustration = {
      illustration: <MixIllustration
                         className="k-Tour__popover__svg--primary"/>
    }

    return objectAssign(content, illustration)
  }

  crowdStep() {
    const content = this.props.crowdStep
    const illustration = {
      illustration: <LoudspeakerIllustration
                         className="k-Tour__popover__svg--primary" />
    }

    return objectAssign(content, illustration)
  }

  steps() {
    return [
      this.platformSwitchStep(),
      this.crowdStep(),
    ]
  }

  render() {
    const { platformSwitchStep, crowdStep, ...otherProps } = this.props

    return (
      <Tour className="k-HeaderTour"
            steps={ this.steps() }
            { ...otherProps } />
    )
  }
}

HeaderTour.defaultProps = {
  storeName: 'kitten.HeaderTour',
}

export default HeaderTour
