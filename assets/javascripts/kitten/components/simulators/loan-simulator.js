// Simulator that lets users select an amount and an installment, to start
// simulating a loan.

import React from 'react'
import classNames from 'classnames'
import Slider from 'kitten/components/form/slider'
import SliderTooltip from 'kitten/components/form/slider-tooltip'
import numberUtils from 'kitten/helpers/utils/number'

class LoanSimulator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: props.initialAmount * 1,
      installmentAmount: props.initialInstallment,
      installmentPercentage: null,
      dragged: !!props.initialInstallment,
      touched: false,
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleAmountKeyDown = this.handleAmountKeyDown.bind(this)
    this.handleInstallmentLabelClick = this.handleInstallmentLabelClick
                                           .bind(this)
    this.handleInstallmentChange = this.handleInstallmentChange.bind(this)
    this.handleInstallmentAction = this.handleInstallmentAction.bind(this)
  }

  handleFocus(e) {
    this.setState({
      touched: false,
      installmentAmount: null,
      installmentPercentage: null,
    })
  }

  handleAmountChange(e) {
    this.setState({ amount: e.target.value })
  }

  handleAmountKeyDown(e) {
    // when pressing enter
    if (e.keyCode == 13) {
      this.refs.slider.focus()
      this.setState({ touched: true })
    }
  }

  // on slider click or on grab change
  handleInstallmentChange(value, percentage) {
    this.refs.amount.blur()
    this.setState({
      installmentAmount: value,
      installmentPercentage: percentage,
      dragged: true
    })
  }

  handleInstallmentAction() {
    this.setState({ touched: true })
  }

  handleInstallmentLabelClick() {
    this.refs.slider.focus()
  }

  duration() {
    if (this.state.installmentAmount)
      return Math.ceil(this.state.amount / this.state.installmentAmount)
  }

  toCurrency(cents) {
    if (isNaN(cents))
      return null

    return (cents / 100).toLocaleString(this.props.locale)
  }

  commissionRate() {
    if (this.props.commissionRules.length > 0)
      return this.commissionRateFromRules()

    // DEPRECATED in favor of commissionRules
    return this.props.commissionRate(this.duration())
  }

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
  commissionRateFromRules() {
    const duration = this.duration()
    for (let i = 0, len = this.props.commissionRules.length; i < len; i++) {
      let rule = this.props.commissionRules[i]
      if (!rule.durationMax || duration <= rule.durationMax)
        return rule.rate
    }
  }

  commissionAmount() {
    return this.commissionRate() * this.state.amount
  }

  error() {
    if (!this.state.touched)
      return null

    return this.amountError()
  }

  amountError() {
    if (!this.state.amount)
      return this.props.amountEmptyError

    if (!numberUtils.isNumber(this.state.amount)
        || this.state.amount < this.props.amountMin
        || this.state.amount > this.props.amountMax)
      return this.props.amountOutOfBoundsError
  }

  installmentMin() {
    const installmentStep = this.installmentStep()
    const value = this.state.amount / this.props.durationMax
    const min = Math.ceil(value / installmentStep) * installmentStep
    if (min > this.state.amount * 1)
      return this.state.amount
    else
      return min
  }

  installmentMax() {
    return this.state.amount * 1
  }

  installmentStep() {
    if (this.state.installmentAmount > 1000)
      return 100
    if (this.state.installmentAmount > 200)
      return 10
    return 1
  }

  renderCommission() {
    if (!this.props.displayCommission)
      return

    const active = this.sliderIsActive()
    const amount = active
      ? this.toCurrency(this.commissionAmount() * 100)
      : '--'

    const amountToDisplay = ` ${ amount } `

    return (
      <div className="k-LoanSimulator__commission">
        { this.props.commissionLabel }
        <span className={ classNames({ 'k-u-text--active': active,
                                       'k-u-text--inactive': !active }) }>
          { amountToDisplay }
          { this.props.currencySymbol }
        </span>
      </div>
    )
  }

  sliderIsActive() {
    return !this.amountError() &&
           this.state.dragged &&
           this.state.installmentAmount
  }

  renderButton() {
    if (!this.props.actionLabel)
     return

    return (
      <div className="k-LoanSimulator__actions">
        <button className="k-Button k-Button--helium k-Button--big">
          { this.props.actionLabel }
        </button>
      </div>
    )
  }

  render() {
    const { label } = this.props
    const { dragged, touched } = this.state
    const error = this.error()
    const amountValid = !this.amountError()
    const duration = this.duration()
    const showResult = !error && touched && duration
    const installmentMin = amountValid ? this.installmentMin() : 0
    const installmentMax = amountValid ? this.installmentMax() : 0
    const installmentAmount = amountValid ? this.state.installmentAmount : 0
    const installmentPercentage = amountValid ? this.state.installmentPercentage : 0

    let errorClass, errorTag, tooltipClass, tooltipText

    if (error) {
      errorClass = "is-error"
      errorTag = <p className="k-LoanSimulator__amount__error">{ error }</p>
    }

    if (this.sliderIsActive()) {
      const durationSymbol = duration === 1
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
         { installmentText }
        </div>,
        <div key="2" className="k-LoanSimulator__duration">
          { durationText }
        </div>
      ]
    } else {
      tooltipClass = 'is-inactive'
      tooltipText = this.props.sliderPlaceholder
    }

    let durationInput
    if (this.props.durationName)
      durationInput = <input type="hidden"
                             name={ this.props.durationName }
                             value={ this.duration() } />

    return (
      <div className={ classNames('k-LoanSimulator', errorClass) }>
        <div className="k-LoanSimulator__amount">
          <label className="k-Label k-LoanSimulator__label"
                 htmlFor="loan-simulator-amount">
            { this.props.amountLabel }
          </label>
          <div className={ classNames('k-TextInputWithUnit', errorClass) }>
            <input ref="amount"
                   className="k-TextInput k-TextInputWithUnit__input"
                   id="loan-simulator-amount"
                   name={ this.props.amountName }
                   type="number"
                   min={ this.props.amountMin }
                   max={ this.props.amountMax }
                   size="5"
                   defaultValue={ this.props.initialAmount }
                   onFocus={ this.handleFocus }
                   onChange={ this.handleAmountChange }
                   onKeyDown={ this.handleAmountKeyDown }
                   placeholder={ this.props.amountPlaceholder } />
            <span className="k-TextInputWithUnit__unit">
              { this.props.currencySymbol }
            </span>
          </div>
          { errorTag }
        </div>
        <div>
          <label className="k-Label k-LoanSimulator__label"
                 onClick={ this.handleInstallmentLabelClick }>
            { this.props.installmentLabel }
          </label>
          <SliderTooltip className={ tooltipClass }
                         percentage={ installmentPercentage }>
            { tooltipText }
          </SliderTooltip>
          <Slider ref="slider"
                  step={ this.installmentStep() }
                  min={ installmentMin }
                  max={ installmentMax }
                  power={ 2 }
                  name={ this.props.installmentName }
                  value={ installmentAmount }
                  onChange={ this.handleInstallmentChange }
                  onAction={ this.handleInstallmentAction } />

          { this.renderCommission() }
          { durationInput }
        </div>
        { this.renderButton() }
      </div>
    )
  }
}

LoanSimulator.propTypes = {
  // Label for amount input
  amountLabel: React.PropTypes.string,

  // Name attribute for the amount input (if needed)
  amountName: React.PropTypes.string,

  // Name attribute for the hidden installment input (if needed)
  installmentName: React.PropTypes.string,

  // Name attribute for the hidden duration input (if needed)
  durationName: React.PropTypes.string,

  // Placeholder for amount input
  amountPlaceholder: React.PropTypes.string,

  // Bounds for accepted amount
  amountMin: React.PropTypes.number,
  amountMax: React.PropTypes.number,

  // Default amount
  initialAmount: React.PropTypes.number,

  // Error text when the amount is empty or non-numerical
  amountEmptyError: React.PropTypes.string,

  // Error text when the amount is over or under the min and max
  amountOutOfBoundsError: React.PropTypes.string,

  // Display commission if requested
  displayCommission: React.PropTypes.bool,
  commissionLabel: React.PropTypes.string,
  commissionRules: React.PropTypes.array,

  // DEPRECATED in favor of commissionRules
  commissionRate: React.PropTypes.func,

  // Label before the slider
  installmentLabel: React.PropTypes.string,

  // Text before the computed duration
  durationText: React.PropTypes.string,

  // Bounds for the computed duration
  durationMin: React.PropTypes.number,
  durationMax: React.PropTypes.number,

  // Duration value (months)
  durationSymbol: React.PropTypes.string,
  durationSymbolPlural: React.PropTypes.string,

  // Currency
  currencySymbol: React.PropTypes.string,

  // Installment
  installmentSymbol: React.PropTypes.string,

  // Locale to format amounts correctly
  locale: React.PropTypes.string,

  // Submit button
  actionLabel: React.PropTypes.string,
}

LoanSimulator.defaultProps = {
  amountLabel: 'Amount',
  amountPlaceholder: '',
  amountMin: 1,
  amountMax: 10000,

  initialAmount: null,

  amountEmptyError: 'Amount cannot be empty',
  amountOutOfBoundsError: 'Amount is either too big or too small',

  displayCommission: false,
  commissionLabel: 'Commission:',
  commissionRules: {},

  // DEPRECATED in favor of commissionRules
  commissionRate: function() { return 0 },

  installmentLabel: 'Reimbursing',
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

export default LoanSimulator
