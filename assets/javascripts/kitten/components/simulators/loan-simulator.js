// Simulator that lets users select an amount and an installment, to start
// simulating a loan.

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { numberUtils } from '../../helpers/utils/number'
import { SliderWithTooltipAndPower } from '../../components/sliders/slider-with-tooltip-and-power'
import { TextInputWithUnit } from '../../components/form/text-input-with-unit'

export class LoanSimulator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: props.initialAmount * 1,
      installmentAmount: props.initialInstallment,
      dragged: !!props.initialInstallment,
      touched: props.initialTouched,
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleInstallmentLabelClick = this.handleInstallmentLabelClick.bind(
      this,
    )
    this.handleInstallmentChange = this.handleInstallmentChange.bind(this)
    this.handleInstallmentAction = this.handleInstallmentAction.bind(this)
  }

  handleFocus() {
    this.setState({
      touched: false,
      installmentAmount: null,
    })
  }

  handleAmountChange(e) {
    this.setState({ amount: e.target.value })
  }

  handleEnter() {
    this.setState({ touched: true })
  }

  handleInstallmentLabelClick() {
    this.refs.content.focusSlider()
  }

  // on slider click or on grab change
  handleInstallmentChange(value) {
    this.setState({
      installmentAmount: value,
      dragged: true,
    })
  }

  handleInstallmentAction() {
    this.setState({ touched: true })
  }

  duration() {
    if (this.state.installmentAmount)
      return Math.ceil(this.state.amount / this.state.installmentAmount)
  }

  commissionRate() {
    const duration = this.duration()
    for (let i = 0, len = this.props.commissionRules.length; i < len; i++) {
      let rule = this.props.commissionRules[i]
      if (!rule.durationMax || duration <= rule.durationMax) return rule.rate
    }
  }

  commissionAmount() {
    return this.commissionRate() * this.state.amount
  }

  installmentMin() {
    const installmentStep = this.installmentStep()
    const value = this.state.amount / this.props.durationMax
    const min = Math.ceil(value / installmentStep) * installmentStep

    if (min > this.state.amount * 1) return this.state.amount
    else return min
  }

  installmentMax() {
    return this.state.amount * 1
  }

  installmentStep() {
    if (this.state.installmentAmount > 1000) return 100
    if (this.state.installmentAmount > 200) return 10
    return 1
  }

  error() {
    if (!this.state.touched) return null

    return this.amountError()
  }

  amountError() {
    if (!this.state.amount) return this.props.amountEmptyError

    if (
      !numberUtils.isNumber(this.state.amount) ||
      this.state.amount < this.props.amountMin ||
      this.state.amount > this.props.amountMax
    )
      return this.props.amountOutOfBoundsError
  }

  render() {
    return (
      <LoanSimulatorContent
        ref="content"
        {...this.props}
        {...this.state}
        onFocus={this.handleFocus}
        onAmountChange={this.handleAmountChange}
        onEnter={this.handleEnter}
        onInstallmentLabelClick={this.handleInstallmentLabelClick}
        onInstallmentChange={this.handleInstallmentChange}
        onInstallmentAction={this.handleInstallmentAction}
        duration={this.duration()}
        commissionAmount={this.commissionAmount()}
        commissionRate={this.commissionRate()}
        installmentMin={this.installmentMin()}
        installmentMax={this.installmentMax()}
        installmentStep={this.installmentStep()}
        error={this.error()}
        amountError={this.amountError()}
      />
    )
  }
}

class LoanSimulatorContent extends React.Component {
  constructor(props) {
    super(props)

    this.handleAmountKeyDown = this.handleAmountKeyDown.bind(this)
    this.handleInstallmentChange = this.handleInstallmentChange.bind(this)
  }

  // Allow parents to focus the slider
  focusSlider() {
    this.slider.focus()
  }

  handleAmountKeyDown(e) {
    // when pressing enter
    if (e.keyCode == 13) {
      this.focusSlider()
      this.props.onEnter()
    }
  }

  handleInstallmentChange(value, ratio) {
    this.amount.blur()
    this.props.onInstallmentChange(value, ratio)
  }

  toCurrency(cents) {
    if (isNaN(cents)) return null

    return (cents / 100).toLocaleString(this.props.locale)
  }

  sliderIsActive() {
    return (
      !this.props.amountError &&
      this.props.dragged &&
      this.props.installmentAmount
    )
  }

  renderCommission() {
    if (!this.props.displayCommission) return

    const active = this.sliderIsActive()
    const amount = active
      ? this.toCurrency(this.props.commissionAmount * 100)
      : '--'

    let commissionAmount = ' 0 '
    let exemptionText = null

    if (!this.props.feesExemption) {
      commissionAmount = ` ${amount} `
    } else {
      const text = `
        (${this.props.feesExemptionLabel}
        ${amount}
        ${this.props.currencySymbol})
      `

      exemptionText = (
        <span className="k-LoanSimulator__feesExemption">{text}</span>
      )
    }

    commissionAmount += ` ${this.props.currencySymbol}`

    return (
      <div className="k-LoanSimulator__commission">
        {this.props.commissionLabel}
        <span
          className={classNames({
            'k-u-text--active': active,
            'k-u-text--inactive': !active,
          })}
        >
          {commissionAmount}
        </span>
        {exemptionText}
      </div>
    )
  }

  renderDurationError() {
    const { duration, touched, requiredDurationError } = this.props

    if (!touched || duration > 0 || !requiredDurationError) return

    return (
      <span className="k-LoanSimulator__durationError">
        {this.props.requiredDurationError}
      </span>
    )
  }

  renderButton() {
    if (!this.props.actionLabel) return

    return (
      <div className="k-LoanSimulator__actions">
        <button className="k-Button k-Button--helium k-Button--big">
          {this.props.actionLabel}
        </button>
      </div>
    )
  }

  render() {
    const { label, duration, error } = this.props
    const amountValid = !this.props.amountError
    const installmentMin = amountValid ? this.props.installmentMin : 0
    const installmentMax = amountValid ? this.props.installmentMax : 0
    const installmentAmount = amountValid ? this.props.installmentAmount : 0

    let errorClass, errorTag, tooltipClass, tooltipText

    if (error) {
      errorClass = 'is-error'
      errorTag = <p className="k-LoanSimulator__amount__error">{error}</p>
    }

    if (this.sliderIsActive()) {
      const durationSymbol =
        duration === 1
          ? this.props.durationSymbol
          : this.props.durationSymbolPlural

      const installmentText = `
        ${this.toCurrency(installmentAmount * 100)}
        ${this.props.installmentSymbol}
      `
      const durationText = `
        ${this.props.durationText}
        ${duration}
        ${durationSymbol}
      `

      tooltipClass = null
      tooltipText = [
        <div key="1" className="k-LoanSimulator__installment">
          {installmentText}
        </div>,
        <div key="2" className="k-LoanSimulator__duration">
          {durationText}
        </div>,
      ]
    } else {
      tooltipClass = 'is-inactive'
      tooltipText = this.props.sliderPlaceholder
    }

    let durationInput
    if (this.props.durationName)
      durationInput = (
        <input
          type="hidden"
          name={this.props.durationName}
          value={this.props.duration || ''}
        />
      )

    return (
      <div className={classNames('k-LoanSimulator', errorClass)}>
        <div className="k-LoanSimulator__amount">
          <label
            className="k-Label k-LoanSimulator__label"
            htmlFor="loan-simulator-amount"
          >
            {this.props.amountLabel}
          </label>
          <TextInputWithUnit
            ref={input => (this.amount = input)}
            error={error}
            id="loan-simulator-amount"
            name={this.props.amountName}
            type="number"
            min={this.props.amountMin}
            max={this.props.amountMax}
            defaultValue={this.props.initialAmount}
            onFocus={this.props.onFocus}
            onChange={this.props.onAmountChange}
            onKeyDown={this.props.onAmountKeyDown}
            placeholder={this.props.amountPlaceholder}
            unit={this.props.currencySymbol}
          />
          {errorTag}
        </div>
        <div>
          <label
            className="k-Label k-LoanSimulator__label"
            onClick={this.props.onInstallmentLabelClick}
          >
            {this.props.installmentLabel}
          </label>
          <SliderWithTooltipAndPower
            ref={input => (this.slider = input)}
            step={this.props.installmentStep}
            min={installmentMin}
            max={installmentMax}
            power={2}
            name={this.props.installmentName}
            value={installmentAmount}
            onChange={this.handleInstallmentChange}
            onAction={this.props.onInstallmentAction}
            tooltipClass={tooltipClass}
            tooltipText={tooltipText}
          />

          {this.renderCommission()}
          {durationInput}
          {this.renderDurationError()}
        </div>
        {this.renderButton()}
      </div>
    )
  }
}

LoanSimulator.propTypes = {
  // Label for amount input
  amountLabel: PropTypes.string,

  // Name attribute for the amount input (if needed)
  amountName: PropTypes.string,

  // Name attribute for the hidden installment input (if needed)
  installmentName: PropTypes.string,

  // Name attribute for the hidden duration input (if needed)
  durationName: PropTypes.string,

  // Placeholder for amount input
  amountPlaceholder: PropTypes.string,

  // Bounds for accepted amount
  amountMin: PropTypes.number,
  amountMax: PropTypes.number,

  // Default amount
  initialAmount: PropTypes.number,

  // Set this to true to show errors on first use
  initialTouched: PropTypes.bool,

  // Error text when the amount is empty or non-numerical
  amountEmptyError: PropTypes.string,

  // Error text when the amount is over or under the min and max
  amountOutOfBoundsError: PropTypes.string,

  // Error text when the duration has not been set
  requiredDurationError: PropTypes.string,

  // Display commission if requested
  displayCommission: PropTypes.bool,
  commissionLabel: PropTypes.string,
  commissionRules: PropTypes.array,

  // Label before the slider
  installmentLabel: PropTypes.string,

  // Text before the computed duration
  durationText: PropTypes.string,

  // Bounds for the computed duration
  durationMin: PropTypes.number,
  durationMax: PropTypes.number,

  // Duration value (months)
  durationSymbol: PropTypes.string,
  durationSymbolPlural: PropTypes.string,

  // Currency
  currencySymbol: PropTypes.string,

  // Installment
  installmentSymbol: PropTypes.string,

  // Locale to format amounts correctly
  locale: PropTypes.string,

  // Submit button
  actionLabel: PropTypes.string,
}

LoanSimulator.defaultProps = {
  amountLabel: 'I need',
  amountPlaceholder: '',
  amountMin: 1,
  amountMax: 10000,

  initialAmount: null,
  initialTouched: false,

  amountEmptyError: 'Amount cannot be empty',
  amountOutOfBoundsError: 'Amount is either too big or too small',
  requiredDurationError: 'Duration is required',

  displayCommission: false,
  feesExemption: false,
  feesExemptionLabel: 'instead of',
  commissionLabel: 'Fees:',

  // The `commissionRules` prop has to be an array containing a `durationMax`
  // rule. This will return the first `rate` which matches the rule for the
  // current `duration`.
  //
  // Example `commissionRules` prop:
  //     [
  //       { durationMax: 12, rate: 0.3 },
  //       { durationMax: 20, rate: 0.2 },
  //       { rate: 0.1 }
  //     ]
  commissionRules: [],

  installmentLabel: "I'd like to reimburse",
  initialInstallment: null,

  durationText: 'during',
  durationMin: 1,
  durationMax: 36,
  durationSymbol: 'month',
  durationSymbolPlural: 'months',

  currencySymbol: '$',
  installmentSymbol: '$/month',
  locale: 'en',

  actionLabel: null,
}

// DEPRECATED: do not use default export.
export default LoanSimulator
