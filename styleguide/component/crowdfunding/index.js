import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Progress from './progress'
import CounterBlock from './counter-block'
import LoanSimulator from './loan-simulator'
import Teaser from './teaser'
import Popover from './popover'

export default () => {
  return (
    <Section title="Crowdfunding" id="crowdfunding">
      <Component
        title="Progress"
        id="components/crowdfunding/progress"
        component={Progress}
      />
      <Component
        title="Counter block"
        id="components/crowdfunding/counter-block"
        component={CounterBlock}
      />
      <Component
        title="Loan simulator"
        id="components/crowdfunding/loan-simulator"
        component={LoanSimulator}
      />
      <Component
        title="Teaser"
        id="components/crowdfunding/teaser"
        component={Teaser}
      />
      <Component
        title="Popover"
        id="components/crowdfunding/popover"
        component={Popover}
      />
    </Section>
  )
}
