import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import HeaderWithBackground from './header-with-background'
import KeySection from './key-section'
import SolutionsTriptych from './triptych/solutions-triptych'
import TimelineSection from './steps/timeline-section'

class PreDeposit extends Component {
  render() {
    return (
      <StyleRoot>
        <HeaderWithBackground />
        <KeySection />
        <SolutionsTriptych />
        <TimelineSection />
      </StyleRoot>
    )
  }
}

export default PreDeposit
