import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import { LoanSimulator } from 'kitten/components/simulators/loan-simulator'
import { card } from 'kitten/hoc/card'
import { Marger } from 'kitten/components/layout/marger'

const KarlLoanSimulatorCardComponent = props =>
  <div { ...props } />

const KarlLoanSimulatorCard = card(KarlLoanSimulatorCardComponent, {
  light: true,
  rounded: true,
  padded: true,
})

const KarlLoanSimulatorComponent = defaultProps(LoanSimulator, {
  amountLabel: 'I need',
  amountPlaceholder: 'Between $200 and $10,000',
  amountMin: 200,
  amountMax: 10000,
  amountName: 'amount',

  amountOutOfBoundsError: 'Please choose an amount between $200 and $10,000',

  installmentName: 'installment',

  durationName: 'duration',

  sliderPlaceholder: 'Slide to choose',

  actionLabel: 'OK',
})

const KarlLoanSimulatorComponentWithCommission = defaultProps(LoanSimulator, {
  displayCommission: true,

  commissionRules: [
    { durationMax: 9, rate: 0.03 },
    { durationMax: 18, rate: 0.04 },
    { durationMax: 24, rate: 0.05 },
    { rate: 0.06 },
  ],

  initialAmount: 2500,
  initialInstallment: 150,

  actionLabel: null,
})

const KarlLoanSimulatorComponentWithfeesExemption = defaultProps(LoanSimulator, {
  displayCommission: true,
  feesExemption: true,
  commissionRules: [
    { durationMax: 9, rate: 0.03 },
    { durationMax: 18, rate: 0.04 },
    { durationMax: 24, rate: 0.05 },
    { rate: 0.06 },
  ],

  initialAmount: 2500,
  initialInstallment: 150,

  actionLabel: null,
})

const KarlLoanSimulatorComponentWithError = defaultProps(LoanSimulator, {
  initialTouched: true,
  actionLabel: null,
})

export const KarlLoanSimulator = () =>
  <KarlLoanSimulatorCard>
    <Marger top="2" bottom="2">
      <KarlLoanSimulatorComponent />
    </Marger>
  </KarlLoanSimulatorCard>

export const KarlLoanSimulatorWithCommission = () =>
  <KarlLoanSimulatorCard>
    <Marger top="2" bottom="2">
      <KarlLoanSimulatorComponentWithCommission />
    </Marger>
  </KarlLoanSimulatorCard>

export const KarlLoanSimulatorWithfeesExemption = () =>
  <KarlLoanSimulatorCard>
    <Marger top="2" bottom="2">
      <KarlLoanSimulatorComponentWithfeesExemption />
    </Marger>
  </KarlLoanSimulatorCard>

export const KarlLoanSimulatorWithError = () =>
  <KarlLoanSimulatorCard>
    <Marger top="2" bottom="2">
      <KarlLoanSimulatorComponentWithError />
    </Marger>
  </KarlLoanSimulatorCard>
