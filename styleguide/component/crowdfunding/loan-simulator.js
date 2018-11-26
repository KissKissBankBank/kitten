import React from 'react'
import {
  KarlLoanSimulator,
  KarlLoanSimulatorWithCommission,
  KarlLoanSimulatorWithError,
  KarlLoanSimulatorWithfeesExemption,
} from '../../../assets/javascripts/kitten/karl/organisms/loan-simulator'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Normal" className="k-Grid__col--6@m k-Grid__col--6@l">
        <KarlLoanSimulator />
      </Example>
      <Example
        title="With commission"
        className="k-Grid__col--6@m k-Grid__col--6@l"
      >
        <KarlLoanSimulatorWithCommission />
      </Example>
      <Example
        title="With fees exemptions"
        className="k-Grid__col--6@m k-Grid__col--6@l"
      >
        <KarlLoanSimulatorWithfeesExemption />
      </Example>
      <Example title="With error" className="k-Grid__col--6@m k-Grid__col--6@l">
        <KarlLoanSimulatorWithError />
      </Example>
    </div>
  )
}
