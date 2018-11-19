"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoanSimulator = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _number = require("kitten/helpers/utils/number");

var _sliderWithTooltipAndPower = require("kitten/components/sliders/slider-with-tooltip-and-power");

var _textInputWithUnit = require("kitten/components/form/text-input-with-unit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var LoanSimulator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoanSimulator, _React$Component);

  function LoanSimulator(props) {
    var _this;

    _classCallCheck(this, LoanSimulator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoanSimulator).call(this, props));
    _this.state = {
      amount: props.initialAmount * 1,
      installmentAmount: props.initialInstallment,
      dragged: !!props.initialInstallment,
      touched: props.initialTouched
    };
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleAmountChange = _this.handleAmountChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleEnter = _this.handleEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInstallmentLabelClick = _this.handleInstallmentLabelClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInstallmentChange = _this.handleInstallmentChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInstallmentAction = _this.handleInstallmentAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LoanSimulator, [{
    key: "handleFocus",
    value: function handleFocus(e) {
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
    value: function handleEnter(e) {
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
      return _react.default.createElement(LoanSimulatorContent, _extends({
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

var LoanSimulatorContent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(LoanSimulatorContent, _React$Component2);

  function LoanSimulatorContent(props) {
    var _this2;

    _classCallCheck(this, LoanSimulatorContent);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(LoanSimulatorContent).call(this, props));
    _this2.handleAmountKeyDown = _this2.handleAmountKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    _this2.handleInstallmentChange = _this2.handleInstallmentChange.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  } // Allow parents to focus the slider


  _createClass(LoanSimulatorContent, [{
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
        exemptionText = _react.default.createElement("span", {
          className: "k-LoanSimulator__feesExemption"
        }, text);
      }

      commissionAmount += " ".concat(this.props.currencySymbol);
      return _react.default.createElement("div", {
        className: "k-LoanSimulator__commission"
      }, this.props.commissionLabel, _react.default.createElement("span", {
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
      return _react.default.createElement("span", {
        className: "k-LoanSimulator__durationError"
      }, this.props.requiredDurationError);
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (!this.props.actionLabel) return;
      return _react.default.createElement("div", {
        className: "k-LoanSimulator__actions"
      }, _react.default.createElement("button", {
        className: "k-Button k-Button--helium k-Button--big"
      }, this.props.actionLabel));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          label = _this$props2.label,
          dragged = _this$props2.dragged,
          touched = _this$props2.touched,
          duration = _this$props2.duration,
          error = _this$props2.error;
      var amountValid = !this.props.amountError;
      var showResult = !error && touched && duration;
      var installmentMin = amountValid ? this.props.installmentMin : 0;
      var installmentMax = amountValid ? this.props.installmentMax : 0;
      var installmentAmount = amountValid ? this.props.installmentAmount : 0;
      var installmentPercentage = amountValid ? this.props.installmentPercentage : 0;
      var errorClass, errorTag, tooltipClass, tooltipText;

      if (error) {
        errorClass = 'is-error';
        errorTag = _react.default.createElement("p", {
          className: "k-LoanSimulator__amount__error"
        }, error);
      }

      if (this.sliderIsActive()) {
        var durationSymbol = duration === 1 ? this.props.durationSymbol : this.props.durationSymbolPlural;
        var installmentText = "\n        ".concat(this.toCurrency(installmentAmount * 100), "\n        ").concat(this.props.installmentSymbol, "\n      ");
        var durationText = "\n        ".concat(this.props.durationText, "\n        ").concat(duration, "\n        ").concat(durationSymbol, "\n      ");
        tooltipClass = null;
        tooltipText = [_react.default.createElement("div", {
          key: "1",
          className: "k-LoanSimulator__installment"
        }, installmentText), _react.default.createElement("div", {
          key: "2",
          className: "k-LoanSimulator__duration"
        }, durationText)];
      } else {
        tooltipClass = 'is-inactive';
        tooltipText = this.props.sliderPlaceholder;
      }

      var durationInput;
      if (this.props.durationName) durationInput = _react.default.createElement("input", {
        type: "hidden",
        name: this.props.durationName,
        value: this.props.duration || ''
      });
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-LoanSimulator', errorClass)
      }, _react.default.createElement("div", {
        className: "k-LoanSimulator__amount"
      }, _react.default.createElement("label", {
        className: "k-Label k-LoanSimulator__label",
        htmlFor: "loan-simulator-amount"
      }, this.props.amountLabel), _react.default.createElement(_textInputWithUnit.TextInputWithUnit, {
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
      }), errorTag), _react.default.createElement("div", null, _react.default.createElement("label", {
        className: "k-Label k-LoanSimulator__label",
        onClick: this.props.onInstallmentLabelClick
      }, this.props.installmentLabel), _react.default.createElement(_sliderWithTooltipAndPower.SliderWithTooltipAndPower, {
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
  actionLabel: null // DEPRECATED: do not use default export.

};
var _default = LoanSimulator;
exports.default = _default;