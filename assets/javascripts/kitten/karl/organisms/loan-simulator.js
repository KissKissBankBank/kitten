import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import LoanSimulator from 'kitten/components/simulators/loan-simulator'

const nbsp = String.fromCharCode(160)
const loanSimulatorProps = {
  amountLabel: 'J’ai besoin de',
  amountPlaceholder: `Entre 200${nbsp}€ et 10${nbsp}000${nbsp}€`,
  amountMin: 200,
  amountMax: 10000,
  initialAmount: null,

  amountEmptyError: 'Veuillez renseigner un montant',
  amountOutOfBoundsError: `Veuillez renseigner un montant compris entre
                           200 et 10${nbsp}000${nbsp}€`,

  installmentLabel: 'Je rembourse',

  sliderPlaceholder: 'Glisser pour sélectionner',

  durationText: 'soit',
  durationMin: 1,
  durationMax: 36,
  durationSymbol: 'mensualité',
  durationSymbolPlural: 'mensualités',

  currencySymbol: '€',
  installmentSymbol: '€/mois',
  locale: 'fr',

  actionLabel: `C’est parti${nbsp}!`,
}

const KarlLoanSimulator = defaultProps(LoanSimulator, loanSimulatorProps)

export { KarlLoanSimulator }
