import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Simulator that lets users select an amount and an installment, to start
// simulating a loan.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { numberUtils } from '../../helpers/utils/number';
import { SliderWithTooltipAndPower } from '../../components/sliders/slider-with-tooltip-and-power';
import { TextInputWithUnit } from '../../components/form/text-input-with-unit';
export var LoanSimulator = /*#__PURE__*/function (_React$Component) {
  _inherits(LoanSimulator, _React$Component);

  var _super = _createSuper(LoanSimulator);

  function LoanSimulator(props) {
    var _this;

    _classCallCheck(this, LoanSimulator);

    _this = _super.call(this, props);
    _this.state = {
      amount: props.initialAmount * 1,
      installmentAmount: props.initialInstallment,
      dragged: !!props.initialInstallment,
      touched: props.initialTouched
    };
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleAmountChange = _this.handleAmountChange.bind(_assertThisInitialized(_this));
    _this.handleEnter = _this.handleEnter.bind(_assertThisInitialized(_this));
    _this.handleInstallmentLabelClick = _this.handleInstallmentLabelClick.bind(_assertThisInitialized(_this));
    _this.handleInstallmentChange = _this.handleInstallmentChange.bind(_assertThisInitialized(_this));
    _this.handleInstallmentAction = _this.handleInstallmentAction.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoanSimulator, [{
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
      if (!numberUtils.isNumber(this.state.amount) || this.state.amount < this.props.amountMin || this.state.amount > this.props.amountMax) return this.props.amountOutOfBoundsError;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(LoanSimulatorContent, _extends({
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
}(React.Component);

var LoanSimulatorContent = /*#__PURE__*/function (_React$Component2) {
  _inherits(LoanSimulatorContent, _React$Component2);

  var _super2 = _createSuper(LoanSimulatorContent);

  function LoanSimulatorContent(props) {
    var _this2;

    _classCallCheck(this, LoanSimulatorContent);

    _this2 = _super2.call(this, props);
    _this2.handleAmountKeyDown = _this2.handleAmountKeyDown.bind(_assertThisInitialized(_this2));
    _this2.handleInstallmentChange = _this2.handleInstallmentChange.bind(_assertThisInitialized(_this2));
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
        exemptionText = /*#__PURE__*/React.createElement("span", {
          className: "k-LoanSimulator__feesExemption"
        }, text);
      }

      commissionAmount += " ".concat(this.props.currencySymbol);
      return /*#__PURE__*/React.createElement("div", {
        className: "k-LoanSimulator__commission"
      }, this.props.commissionLabel, /*#__PURE__*/React.createElement("span", {
        className: classNames({
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
      return /*#__PURE__*/React.createElement("span", {
        className: "k-LoanSimulator__durationError"
      }, this.props.requiredDurationError);
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (!this.props.actionLabel) return;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-LoanSimulator__actions"
      }, /*#__PURE__*/React.createElement("button", {
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
        errorTag = /*#__PURE__*/React.createElement("p", {
          className: "k-LoanSimulator__amount__error"
        }, error);
      }

      if (this.sliderIsActive()) {
        var durationSymbol = duration === 1 ? this.props.durationSymbol : this.props.durationSymbolPlural;
        var installmentText = "\n        ".concat(this.toCurrency(installmentAmount * 100), "\n        ").concat(this.props.installmentSymbol, "\n      ");
        var durationText = "\n        ".concat(this.props.durationText, "\n        ").concat(duration, "\n        ").concat(durationSymbol, "\n      ");
        tooltipClass = null;
        tooltipText = [/*#__PURE__*/React.createElement("div", {
          key: "1",
          className: "k-LoanSimulator__installment"
        }, installmentText), /*#__PURE__*/React.createElement("div", {
          key: "2",
          className: "k-LoanSimulator__duration"
        }, durationText)];
      } else {
        tooltipClass = 'is-inactive';
        tooltipText = this.props.sliderPlaceholder;
      }

      var durationInput;
      if (this.props.durationName) durationInput = /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        name: this.props.durationName,
        value: this.props.duration || ''
      });
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('k-LoanSimulator', errorClass)
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-LoanSimulator__amount"
      }, /*#__PURE__*/React.createElement("label", {
        className: "k-Label k-LoanSimulator__label",
        htmlFor: "loan-simulator-amount"
      }, this.props.amountLabel), /*#__PURE__*/React.createElement(TextInputWithUnit, {
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
      }), errorTag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "k-Label k-LoanSimulator__label",
        onClick: this.props.onInstallmentLabelClick
      }, this.props.installmentLabel), /*#__PURE__*/React.createElement(SliderWithTooltipAndPower, {
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
}(React.Component);

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
  actionLabel: PropTypes.string
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

export default LoanSimulator;