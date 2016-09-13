// TODO description
// TODO animations: https://facebook.github.io/react/docs/animation.html
window.LoanSimulator = React.createClass({
  propTypes: {
    // Label for amount input
    amountLabel: React.PropTypes.string,

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
  },

  getDefaultProps: function() {
    return {
      amountLabel: 'Amount',
      amountPlaceholder: '',
      amountMin: 1,
      amountMax: 10000,
      initialAmount: null,

      amountEmptyError: 'Amount cannot be empty',
      amountOutOfBoundsError: 'Amount is either too big or too small',

      installmentLabel: 'Reimbursing',

      durationText: 'during',
      durationMin: 1,
      durationMax: 36,
      durationSymbol: 'month',
      durationSymbolPlural: 'months',

      currencySymbol: '$',
      installmentSymbol: '$/month',
      locale: 'en',

      actionLabel: 'OK',
    }
  },

  getInitialState: function() {
    return {
      amount: this.props.initialAmount * 1,
      installmentAmount: null,
      installmentPercentage: null,
      dragged: false,
      touched: false,
    }
  },

  handleFocus: function(e) {
    this.setState({
      touched: false,
      installmentAmount: null,
      installmentPercentage: null,
    })
  },

  handleAmountChange: function(e) {
    this.setState({ amount: e.target.value })
  },

  handleAmountKeyDown: function(e) {
    // when pressing enter
    if (e.keyCode == 13) {
      this.refs.slider.focus()
      this.setState({ touched: true })
    }
  },

  // on slider click or on grab change
  handleInstallmentChange: function(value, percentage) {
    this.refs.amount.blur()
    this.setState({
      installmentAmount: value,
      installmentPercentage: percentage,
      dragged: true
    })
  },

  handleInstallmentAction: function() {
    this.setState({ touched: true })
  },

  handleInstallmentLabelClick: function() {
    this.refs.slider.focus()
  },

  duration: function() {
    if (this.state.installmentAmount)
      return Math.ceil(this.state.amount / this.state.installmentAmount)
  },

  toCurrency: function(cents) {
    if (isNaN(cents))
      return null

    return (cents / 100).toLocaleString(this.props.locale)
  },

  error: function() {
    if (!this.state.touched)
      return null

    return this.amountError()
  },

  amountError: function() {
    if (!this.state.amount)
      return this.props.amountEmptyError

    if (!isNumber(this.state.amount)
        || this.state.amount < this.props.amountMin
        || this.state.amount > this.props.amountMax)
      return this.props.amountOutOfBoundsError
  },

  installmentMin: function() {
    const installmentStep = this.installmentStep()
    const value = this.state.amount / this.props.durationMax
    const min = Math.ceil(value / installmentStep) * installmentStep
    if (min > this.state.amount * 1)
      return this.state.amount
    else
      return min
  },

  installmentMax: function() {
    return this.state.amount * 1
  },

  installmentStep: function() {
    if (this.state.installmentAmount > 1000)
      return 100
    if (this.state.installmentAmount > 200)
      return 10
    return 1
  },

  render: function() {
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
    const sliderIsActive = amountValid && dragged && installmentAmount

    let errorClass, errorTag, tooltipClass, tooltipText

    if (error) {
      errorClass = "is-error"
      errorTag = <p className="k-LoanSimulator__amount__error">{error}</p>
    }

    if (sliderIsActive) {
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
        <div className="k-LoanSimulator__installment">{installmentText}</div>,
        <div className="k-LoanSimulator__duration">{durationText}</div>
      ]
    } else {
      tooltipClass = 'is-inactive'
      tooltipText = this.props.sliderPlaceholder
    }

    const durationSymbol = duration === 1
                         ? this.props.durationSymbol
                         : this.props.durationSymbolPlural

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
        <div className="k-LoanSimulator__reimbursing">
          <label className="k-Label k-LoanSimulator__label"
                 onClick={this.handleInstallmentLabelClick}>
            {this.props.installmentLabel}
          </label>
          <SliderTooltip className={tooltipClass}
                         percentage={installmentPercentage}>
            {tooltipText}
          </SliderTooltip>
          <Slider ref="slider"
                  step={this.installmentStep()}
                  min={installmentMin}
                  max={installmentMax}
                  power={2}
                  name={this.props.installmentName}
                  value={installmentAmount}
                  onChange={this.handleInstallmentChange}
                  onAction={this.handleInstallmentAction} />
        </div>
        <div className="k-LoanSimulator__actions">
          <button className="k-Button">{this.props.actionLabel}</button>
        </div>
      </div>
    )
  }
})
