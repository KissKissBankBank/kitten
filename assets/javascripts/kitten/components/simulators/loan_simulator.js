// TODO description
// TODO animations: https://facebook.github.io/react/docs/animation.html
window.LoanSimulator = React.createClass({
  propTypes: {
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
    installmentStep: React.PropTypes.number,

    durationText: React.PropTypes.string,
    durationMin: React.PropTypes.number,
    durationMax: React.PropTypes.number,
    durationSymbol: React.PropTypes.string,
    durationSymbolPlural: React.PropTypes.string,

    feeText: React.PropTypes.string,
    feeForDuration: React.PropTypes.func,

    currencySymbol: React.PropTypes.string,
    locale: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      amountLabel: 'Amount',
      amountPlaceholder: '',
      amountMin: 1,
      amountMax: 10000,
      initialAmount: null,

      amountEmptyError: 'Amount cannot be empty',
      amountOutOfBoundsError: 'Amount should be lower',

      installmentLabel: 'Reimbursing',
      installmentName: 'installment',

      durationText: 'Duration',
      durationMin: 1,
      durationMax: 36,
      durationSymbol: 'month',
      durationSymbolPlural: 'months',

      feeText: 'Fee',
      feeForDuration: function() { return 0 },

      currencySymbol: '$',
      locale: 'en',
    }
  },

  getInitialState: function() {
    return {
      amount: this.props.initialAmount * 1,
      installmentAmount: null,
      dragged: false,
      touched: false,
    }
  },

  handleFocus: function(e) {
    this.setState({ touched: false, installmentAmount: 0 })
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
  handleInstallmentChange: function(value) {
    this.refs.amount.blur()
    this.setState({ installmentAmount: value, dragged: true })
  },

  // on slider click or on grab end
  handleInstallmentChangeEnd: function() {
    this.setState({ touched: true })
  },

  handleInstallmentLabelClick: function() {
    this.refs.slider.focus()
  },

  duration: function() {
    return Math.ceil(this.state.amount / this.state.installmentAmount)
  },

  feeCents: function() {
    if (!this.state.amount)
      return null

    const cents = this.state.amount * 100
    return Math.round(cents * this.props.feeForDuration(this.state.duration))
  },

  toCurrency: function(cents) {
    if (isNaN(cents))
      return null

    return (cents / 100).toLocaleString(this.props.locale)
  },

  error: function() {
    if (!this.state.touched)
      return null

    if (!this.state.amount)
      return this.props.amountEmptyError

    if (!isNumber(this.state.amount)
        || this.state.amount < this.props.amountMin
        || this.state.amount > this.props.amountMax)
      return this.props.amountOutOfBoundsError
  },

  installmentMin: function() {
    const { installmentStep, durationMax } = this.props
    const value = this.state.amount / durationMax
    const min = Math.ceil(value / installmentStep) * installmentStep
    if (min > this.state.amount * 1)
      return this.state.amount
    else
      return min
  },

  installmentMax: function() {
    return this.state.amount * 1
  },

  render: function() {
    const { label } = this.props
    const { installmentAmount } = this.state

    const { dragged, touched } = this.state
    const resultCents = null
    const error = this.error()
    const showResult = !error && touched

    let errorClass, errorTag, installmentString, infoClass, resultTag

    if (error) {
      errorClass = "is-error"
      errorTag = <p className="k-LoanSimulator__error">{error}</p>
    }

    if (!error && dragged && installmentAmount) {
      installmentString = this.toCurrency(installmentAmount * 100)
      infoClass = "is-active"
    } else {
      installmentString = "--"
      infoClass = "is-inactive"
    }

    const durationSymbol = this.duration() === 1
                         ? this.props.durationSymbol
                         : this.props.durationSymbolPlural

    if (showResult) {
      const results = [
        {
          label: this.props.durationText,
          value: this.duration() + ' ' + durationSymbol
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
        <div>
          <div>
            <label className="k-Label k-LoanSimulator__label" htmlFor="amount">
              {this.props.amountLabel}
            </label>
          </div>
          <div className={classNames('k-TextInputWithUnit', errorClass)}>
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
                step={this.props.installmentStep}
                min={this.installmentMin()}
                max={this.installmentMax()}
                name={this.props.installmentName}
                value={this.state.installmentAmount}
                onChange={this.handleInstallmentChange}
                onChangeEnd={this.handleInstallmentChangeEnd} />
      </div>
    )
  }
})
