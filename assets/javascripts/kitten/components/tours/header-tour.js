import React from 'react'
import objectAssign from 'core-js/library/fn/object/assign'
import Tour from 'kitten/components/tours/tour'

// We directly use svg-react loader for the moment.
// TODO: update webpack config to manage svg in jsx files.
import PlatformSwitchIllustration from
  'babel?presets[]=babel-preset-es2015,presets[]=babel-preset-react!svg-react!icons/icon-tour-1.svg?name=PlatformSwitchIllustration'
import CrowdIllustration from
  'babel?presets[]=babel-preset-es2015,presets[]=babel-preset-react!svg-react!icons/icon-tour-2.svg?name=CrowdIllustration'

class HeaderTour extends React.Component {
  getPlatformSwitchStep() {
    const content = this.props.platformSwitchStep
    const illustration = {
      illustration: <PlatformSwitchIllustration
                         className="k-Tour__popover__svg--primary"/>
    }

    return objectAssign(content, illustration)
  }

  getCrowdStep() {
    const content = this.props.crowdStep
    const illustration = {
      illustration: <CrowdIllustration
                         className="k-Tour__popover__svg--primary" />
    }

    return objectAssign(content, illustration)
  }

  render() {
    const steps = [
      this.getPlatformSwitchStep(),
      this.getCrowdStep(),
    ]

    return (<Tour className="k-HeaderTour" steps={ steps } />)
  }
}

export default HeaderTour
