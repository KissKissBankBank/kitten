"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoanSimulator = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _number = require("../../helpers/utils/number");

var _sliderWithTooltipAndPower = require("../../components/sliders/slider-with-tooltip-and-power");

var _textInputWithUnit = require("../../components/form/text-input-with-unit");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LoanSimulator = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(LoanSimulator, _React$Component);

  var _super = _createSuper(LoanSimulator);

  function LoanSimulator(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LoanSimulator);
    _this = _super.call(this, props);
    _this.state = {
      amount: props.initialAmount * 1,
      installmentAmount: props.initialInstallment,
      dragged: !!props.initialInstallment,
      touched: props.initialTouched
    };
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleAmountChange = _this.handleAmountChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEnter = _this.handleEnter.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInstallmentLabelClick = _this.handleInstallmentLabelClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInstallmentChange = _this.handleInstallmentChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInstallmentAction = _this.handleInstallmentAction.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(LoanSimulator, [{
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        touched: false,
        installmentAmount: null
      });
    }
  }, {
    key: "handleAmountChange",
    value: function handleAmountChange(e) {
      this.setState({
        amount: e.target.value
      });
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      this.setState({
        touched: true
      });
    }
  }, {
    key: "handleInstallmentLabelClick",
    value: function handleInstallmentLabelClick() {
      this.refs.content.focusSlider();
    } // on slider click or on grab change

  }, {
    key: "handleInstallmentChange",
    value: function handleInstallmentChange(value) {
      this.setState({
        installmentAmount: value,
        dragged: true
      });
    }
  }, {
    key: "handleInstallmentAction",
    value: function handleInstallmentAction() {
      this.setState({
        touched: true
      });
    }
  }, {
    key: "duration",
    value: function duration() {
      if (this.state.installmentAmount) return Math.ceil(this.state.amount / this.state.installmentAmount);
    }
  }, {
    key: "commissionRate",
    value: function commissionRate() {
      var duration = this.duration();

      for (var i = 0, len = this.props.commissionRules.length; i < len; i++) {
        var rule = this.props.commissionRules[i];
        if (!rule.durationMax || duration <= rule.durationMax) return rule.rate;
      }
    }
  }, {
    key: "commissionAmount",
    value: function commissionAmount() {
      return this.commissionRate() * this.state.amount;
    }
  }, {
    key: "installmentMin",
    value: function installmentMin() {
      var installmentStep = this.installmentStep();
      var value = this.state.amount / this.props.durationMax;
      var min = Math.ceil(value / installmentStep) * installmentStep;
      if (min > this.state.amount * 1) return this.state.amount;else return min;
    }
  }, {
    key: "installmentMax",
    value: function installmentMax() {
      return this.state.amount * 1;
    }
  }, {
    key: "installmentStep",
    value: function installmentStep() {
      if (this.state.installmentAmount > 1000) return 100;
      if (this.state.installmentAmount > 200) return 10;
      return 1;
    }
  }, {
    key: "error",
    value: function error() {
      if (!this.state.touched) return null;
      return this.amountError();
    }
  }, {
    key: "amountError",
    value: function amountError() {
      if (!this.state.amount) return this.props.amountEmptyError;
      if (!_number.numberUtils.isNumber(this.state.amount) || this.state.amount < this.props.amountMin || this.state.amount > this.props.amountMax) return this.props.amountOutOfBoundsError;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(LoanSimulatorContent, (0, _extends2.default)({
        ref: "content"
      }, this.props, this.state, {
        onFocus: this.handleFocus,
        onAmountChange: this.handleAmountChange,
        onEnter: this.handleEnter,
        onInstallmentLabelClick: this.handleInstallmentLabelClick,
        onInstallmentChange: this.handleInstallmentChange,
        onInstallmentAction: this.handleInstallmentAction,
        duration: this.duration(),
        commissionAmount: this.commissionAmount(),
        commissionRate: this.commissionRate(),
        installmentMin: this.installmentMin(),
        installmentMax: this.installmentMax(),
        installmentStep: this.installmentStep(),
        error: this.error(),
        amountError: this.amountError()
      }));
    }
  }]);
  return LoanSimulator;
}(_react.default.Component);

exports.LoanSimulator = LoanSimulator;

var LoanSimulatorContent = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2.default)(LoanSimulatorContent, _React$Component2);

  var _super2 = _createSuper(LoanSimulatorContent);

  function LoanSimulatorContent(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, LoanSimulatorContent);
    _this2 = _super2.call(this, props);
    _this2.handleAmountKeyDown = _this2.handleAmountKeyDown.bind((0, _assertThisInitialized2.default)(_this2));
    _this2.handleInstallmentChange = _this2.handleInstallmentChange.bind((0, _assertThisInitialized2.default)(_this2));
    return _this2;
  } // Allow parents to focus the slider


  (0, _createClass2.default)(LoanSimulatorContent, [{
    key: "focusSlider",
    value: function focusSlider() {
      this.slider.focus();
    }
  }, {
    key: "handleAmountKeyDown",
    value: function handleAmountKeyDown(e) {
      // when pressing enter
      if (e.keyCode == 13) {
        this.focusSlider();
        this.props.onEnter();
      }
    }
  }, {
    key: "handleInstallmentChange",
    value: function handleInstallmentChange(value, ratio) {
      this.amount.blur();
      this.props.onInstallmentChange(value, ratio);
    }
  }, {
    key: "toCurrency",
    value: function toCurrency(cents) {
      if (isNaN(cents)) return null;
      return (cents / 100).toLocaleString(this.props.locale);
    }
  }, {
    key: "sliderIsActive",
    value: function sliderIsActive() {
      return !this.props.amountError && this.props.dragged && this.props.installmentAmount;
    }
  }, {
    key: "renderCommission",
    value: function renderCommission() {
      if (!this.props.displayCommission) return;
      var active = this.sliderIsActive();
      var amount = active ? this.toCurrency(this.props.commissionAmount * 100) : '--';
      var commissionAmount = ' 0 ';
      var exemptionText = null;

      if (!this.props.feesExemption) {
        commissionAmount = " ".concat(amount, " ");
      } else {
        var text = "\n        (".concat(this.props.feesExemptionLabel, "\n        ").concat(amount, "\n        ").concat(this.props.currencySymbol, ")\n      ");
        exemptionText = /*#__PURE__*/_react.default.createElement("span", {
          className: "k-LoanSimulator__feesExemption"
        }, text);
      }

      commissionAmount += " ".concat(this.props.currencySymbol);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-LoanSimulator__commission"
      }, this.props.commissionLabel, /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _classnames.default)({
          'k-u-text--active': active,
          'k-u-text--inactive': !active
        })
      }, commissionAmount), exemptionText);
    }
  }, {
    key: "renderDurationError",
    value: function renderDurationError() {
      var _this$props = this.props,
          duration = _this$props.duration,
          touched = _this$props.touched,
          requiredDurationError = _this$props.requiredDurationError;
      if (!touched || duration > 0 || !requiredDurationError) return;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: "k-LoanSimulator__durationError"
      }, this.props.requiredDurationError);
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (!this.props.actionLabel) return;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-LoanSimulator__actions"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "k-Button k-Button--helium k-Button--big"
      }, this.props.actionLabel));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          label = _this$props2.label,
          duration = _this$props2.duration,
          error = _this$props2.error;
      var amountValid = !this.props.amountError;
      var installmentMin = amountValid ? this.props.installmentMin : 0;
      var installmentMax = amountValid ? this.props.installmentMax : 0;
      var installmentAmount = amountValid ? this.props.installmentAmount : 0;
      var errorClass, errorTag, tooltipClass, tooltipText;

      if (error) {
        errorClass = 'is-error';
        errorTag = /*#__PURE__*/_react.default.createElement("p", {
          className: "k-LoanSimulator__amount__error"
        }, error);
      }

      if (this.sliderIsActive()) {
        var durationSymbol = duration === 1 ? this.props.durationSymbol : this.props.durationSymbolPlural;
        var installmentText = "\n        ".concat(this.toCurrency(installmentAmount * 100), "\n        ").concat(this.props.installmentSymbol, "\n      ");
        var durationText = "\n        ".concat(this.props.durationText, "\n        ").concat(duration, "\n        ").concat(durationSymbol, "\n      ");
        tooltipClass = null;
        tooltipText = [/*#__PURE__*/_react.default.createElement("div", {
          key: "1",
          className: "k-LoanSimulator__installment"
        }, installmentText), /*#__PURE__*/_react.default.createElement("div", {
          key: "2",
          className: "k-LoanSimulator__duration"
        }, durationText)];
      } else {
        tooltipClass = 'is-inactive';
        tooltipText = this.props.sliderPlaceholder;
      }

      var durationInput;
      if (this.props.durationName) durationInput = /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: this.props.durationName,
        value: this.props.duration || ''
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('k-LoanSimulator', errorClass)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-LoanSimulator__amount"
      }, /*#__PURE__*/_react.default.createElement("label", {
        className: "k-Label k-LoanSimulator__label",
        htmlFor: "loan-simulator-amount"
      }, this.props.amountLabel), /*#__PURE__*/_react.default.createElement(_textInputWithUnit.TextInputWithUnit, {
        ref: function ref(input) {
          return _this3.amount = input;
        },
        error: error,
        id: "loan-simulator-amount",
        name: this.props.amountName,
        type: "number",
        min: this.props.amountMin,
        max: this.props.amountMax,
        defaultValue: this.props.initialAmount,
        onFocus: this.props.onFocus,
        onChange: this.props.onAmountChange,
        onKeyDown: this.props.onAmountKeyDown,
        placeholder: this.props.amountPlaceholder,
        unit: this.props.currencySymbol
      }), errorTag), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
        className: "k-Label k-LoanSimulator__label",
        onClick: this.props.onInstallmentLabelClick
      }, this.props.installmentLabel), /*#__PURE__*/_react.default.createElement(_sliderWithTooltipAndPower.SliderWithTooltipAndPower, {
        ref: function ref(input) {
          return _this3.slider = input;
        },
        step: this.props.installmentStep,
        min: installmentMin,
        max: installmentMax,
        power: 2,
        name: this.props.installmentName,
        value: installmentAmount,
        onChange: this.handleInstallmentChange,
        onAction: this.props.onInstallmentAction,
        tooltipClass: tooltipClass,
        tooltipText: tooltipText
      }), this.renderCommission(), durationInput, this.renderDurationError()), this.renderButton());
    }
  }]);
  return LoanSimulatorContent;
}(_react.default.Component);

LoanSimulator.propTypes = {
  // Label for amount input
  amountLabel: _propTypes.default.string,
  // Name attribute for the amount input (if needed)
  amountName: _propTypes.default.string,
  // Name attribute for the hidden installment input (if needed)
  installmentName: _propTypes.default.string,
  // Name attribute for the hidden duration input (if needed)
  durationName: _propTypes.default.string,
  // Placeholder for amount input
  amountPlaceholder: _propTypes.default.string,
  // Bounds for accepted amount
  amountMin: _propTypes.default.number,
  amountMax: _propTypes.default.number,
  // Default amount
  initialAmount: _propTypes.default.number,
  // Set this to true to show errors on first use
  initialTouched: _propTypes.default.bool,
  // Error text when the amount is empty or non-numerical
  amountEmptyError: _propTypes.default.string,
  // Error text when the amount is over or under the min and max
  amountOutOfBoundsError: _propTypes.default.string,
  // Error text when the duration has not been set
  requiredDurationError: _propTypes.default.string,
  // Display commission if requested
  displayCommission: _propTypes.default.bool,
  commissionLabel: _propTypes.default.string,
  commissionRules: _propTypes.default.array,
  // Label before the slider
  installmentLabel: _propTypes.default.string,
  // Text before the computed duration
  durationText: _propTypes.default.string,
  // Bounds for the computed duration
  durationMin: _propTypes.default.number,
  durationMax: _propTypes.default.number,
  // Duration value (months)
  durationSymbol: _propTypes.default.string,
  durationSymbolPlural: _propTypes.default.string,
  // Currency
  currencySymbol: _propTypes.default.string,
  // Installment
  installmentSymbol: _propTypes.default.string,
  // Locale to format amounts correctly
  locale: _propTypes.default.string,
  // Submit button
  actionLabel: _propTypes.default.string
};
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
  actionLabel: null
}; // DEPRECATED: do not use default export.

var _default = LoanSimulator;
exports.default = _default;