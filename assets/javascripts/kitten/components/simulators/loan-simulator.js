import React from 'react'

// TODO description
// TODO animations: https://facebook.github.io/react/docs/animation.html
class LoanSimulator extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      amount: this.props.initialAmount * 1,
      installmentAmount: null,
      dragged: false,
      touched: false,
    }
  }

  handleFocus(e) {
    this.setState({ touched: false, installmentAmount: null })
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
  handleInstallmentChange(value) {
    this.refs.amount.blur()
    this.setState({ installmentAmount: value, dragged: true })
  }

  // on slider click or on grab end
  handleInstallmentChangeEnd() {
    this.setState({ touched: true })
  }

  handleInstallmentLabelClick() {
    this.refs.slider.focus()
  }

  duration() {
    if (this.state.installmentAmount)
      return Math.ceil(this.state.amount / this.state.installmentAmount)
  }

  feeCents() {
    if (!this.state.amount || !this.state.installmentAmount)
      return null

    const cents = this.state.amount * 100
    return Math.round(cents * this.props.feeForDuration(this.duration()))
  }

  toCurrency(cents) {
    if (isNaN(cents))
      return null

    return (cents / 100).toLocaleString(this.props.locale)
  }

  error() {
    if (!this.state.touched)
      return null

    if (!this.state.amount)
      return this.props.amountEmptyError

    if (!isNumber(this.state.amount)
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

  render() {
    const { label } = this.props
    const { installmentAmount, dragged, touched } = this.state
    const error = this.error()
    const duration = this.duration()
    const showResult = !error && touched && duration

    let errorClass, errorTag, installmentString, infoClass, resultTag

    if (error) {
      errorClass = "is-error"
      errorTag = <p className="k-LoanSimulator__amount__error">{error}</p>
    }

    if (!error && dragged && installmentAmount) {
      installmentString = this.toCurrency(installmentAmount * 100)
      infoClass = "is-active"
    } else {
      installmentString = "--"
      infoClass = "is-inactive"
    }

    const durationSymbol = duration === 1
                         ? this.props.durationSymbol
                         : this.props.durationSymbolPlural

    if (showResult) {
      const results = [
        {
          label: this.props.durationText,
          value: duration + ' ' + durationSymbol
        },
        {
          label: this.props.feeText,
          value: this.toCurrency(this.feeCents())
                 + ' '
                 + this.props.currencySymbol
        }
      ]
      resultTag = <SimulatorResult className="k-LoanSimulator__result"
                                   results={results} />
    }

    return (
      <div className="k-LoanSimulator">
        <div className="k-LoanSimulator__amount">
          <label className="k-Label k-LoanSimulator__label" htmlFor="amount">
            {this.props.amountLabel}
          </label>
          <div className={classNames('k-TextInputWithUnit',
                                     'k-TextInputWithUnit--large',
                                     errorClass)}>
            <input ref="amount"
                   className="k-TextInputWithUnit__input"
                   id="amount"
                   type="number"
                   min={this.props.amountMin}
                   max={this.props.amountMax}
                   size="5"
                   defaultValue={this.props.initialAmount}
                   onFocus={this.handleFocus}
                   onChange={this.handleAmountChange}
                   onKeyDown={this.handleAmountKeyDown}
                   placeholder={this.props.amountPlaceholder} />
            <span className="k-TextInputWithUnit__unit">
              {this.props.currencySymbol}
            </span>
          </div>
          {errorTag}
        </div>
        {resultTag}
        <div className="k-LoanSimulator__reimbursing">
          <div className="k-LabelWithInfo">
            <label className="k-Label
                              k-LabelWithInfo__label
                              k-LoanSimulator__label"
                   onClick={this.handleInstallmentLabelClick}>
              {this.props.installmentLabel}
            </label>
            <div className={classNames('k-LabelWithInfo__info', infoClass)}>
              {installmentString}
              {' '}
              {this.props.currencySymbol}
              /
              {this.props.durationSymbol}
            </div>
          </div>
          <Slider ref="slider"
                  step={this.installmentStep()}
                  min={this.installmentMin()}
                  max={this.installmentMax()}
                  power={2}
                  name={this.props.installmentName}
                  value={this.state.installmentAmount}
                  onChange={this.handleInstallmentChange}
                  onChangeEnd={this.handleInstallmentChangeEnd} />
        </div>
        <div className="k-LoanSimulator__actions">
          <button className="k-Button">{this.props.actionLabel}</button>
        </div>
      </div>
    )
  }
}

LoanSimulator.propTypes = {
  // Label for amount input
  amountLabel: React.PropTypes.string,

  // Placeholder for amount input
  amountPlaceholder: React.PropTypes.string,

  // Minimum accepted amount
  amountMin: React.PropTypes.number,

  // Maximum accepted amount
  amountMax: React.PropTypes.number,

  // Default amount
  initialAmount: React.PropTypes.number,

  // Error to show when the amount is empty or non-numerical
  amountEmptyError: React.PropTypes.string,
  amountOutOfBoundsError: React.PropTypes.string,

  installmentLabel: React.PropTypes.string,
  installmentName: React.PropTypes.string,

  durationText: React.PropTypes.string,
  durationMin: React.PropTypes.number,
  durationMax: React.PropTypes.number,
  durationSymbol: React.PropTypes.string,
  durationSymbolPlural: React.PropTypes.string,

  feeText: React.PropTypes.string,
  feeForDuration: React.PropTypes.func,

  currencySymbol: React.PropTypes.string,
  locale: React.PropTypes.string,

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

  installmentLabel: 'Reimbursing',
  installmentName: 'installment',

  durationText: 'Duration',
  durationMin: 1,
  durationMax: 36,
  durationSymbol: 'month',
  durationSymbolPlural: 'months',

  feeText: 'Fee',
  feeForDuration: function() { return 0.1 },

  currencySymbol: '$',
  locale: 'en',

  actionLabel: 'OK',
}
