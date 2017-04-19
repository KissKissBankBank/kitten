import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import LoanSimulator from 'kitten/components/simulators/loan-simulator'

const KarlLoanSimulator = defaultProps(LoanSimulator, {
  amountLabel: 'I need',
  amountPlaceholder: 'Between $200 and $10,000',
  amountMin: 200,
  amountMax: 10000,
  amountName: 'amount',
  initialAmount: null,

  amountEmptyError: 'Please select an amount',
  amountOutOfBoundsError: 'Please choose an amount between $200 and $10,000',

  installmentLabel: 'I can reimburse',
  installmentName: 'installment',

  durationName: 'duration',

  sliderPlaceholder: 'Slide to choose',

  durationText: 'therefore',
  durationMin: 1,
  durationMax: 36,
  durationSymbol: 'month',
  durationSymbolPlural: 'months',

  currencySymbol: '$',
  installmentSymbol: '$/month',
  locale: 'fr',

  actionLabel: 'Go!',
})

const KarlLoanSimulatorWithCommission = defaultProps(KarlLoanSimulator, {
  displayCommission: true,
  commissionLabel: 'Commission:',

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

const KarlLoanSimulatorWithfeesExemption = defaultProps(KarlLoanSimulator, {
  displayCommission: true,
  feesExemption: true,
  feesExemptionLabel: `instead of`,
  commissionLabel: `Commission:`,

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

const KarlLoanSimulatorWithError = defaultProps(KarlLoanSimulator, {
  initialTouched: true,
  actionLabel: null,
})

export { KarlLoanSimulator,
         KarlLoanSimulatorWithCommission,
         KarlLoanSimulatorWithfeesExemption,
         KarlLoanSimulatorWithError }
