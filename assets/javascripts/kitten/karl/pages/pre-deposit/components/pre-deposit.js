import React, { Component } from 'react'
import { StyleRoot } from 'radium'
import HeaderWithBackground from './header-with-background'
import KeySection from './key-section'
import SolutionsTriptych from './triptych/solutions-triptych'
import TimelineSection from './timeline-section'
import TipsSection from './tips/tips-section'
import CarouselSection from './carousel-section'
import PartnersSection from './partners-section'

class PreDeposit extends Component {
  render() {
    return (
      <StyleRoot>
        <HeaderWithBackground />
        <KeySection />
        <SolutionsTriptych />
        <TimelineSection />
        <TipsSection />
        <CarouselSection />
        <PartnersSection />
      </StyleRoot>
    )
  }
}

export default PreDeposit
