import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import LoanSimulator from 'kitten/components/simulators/loan-simulator'

const nbsp = String.fromCharCode(160)
const KarlLoanSimulator = defaultProps(LoanSimulator, {
  amountLabel: 'J’ai besoin de',
  amountPlaceholder: `Entre 200${nbsp}€ et 10${nbsp}000${nbsp}€`,
  amountMin: 200,
  amountMax: 10000,
  amountName: 'amount',
  initialAmount: null,

  amountEmptyError: 'Veuillez renseigner un montant',
  amountOutOfBoundsError: `Veuillez renseigner un montant compris entre
                           200 et 10${nbsp}000${nbsp}€`,

  installmentLabel: 'Je rembourse',
  installmentName: 'installment',

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
})

const KarlLoanSimulatorWithCommission = defaultProps(KarlLoanSimulator, {
  displayCommission: true,
  commissionLabel: `Commission${nbsp}:`,
  commissionRate: function(duration) {
    if (duration <= 9)
      return 0.03
    else if (duration <= 18)
      return 0.04
    else if (duration <= 24)
      return 0.05
    else
      return 0.06
  },

  initialAmount: 2500,

  actionLabel: null,
})


export { KarlLoanSimulator, KarlLoanSimulatorWithCommission }
