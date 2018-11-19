"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlPaymentButtons = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radioButton = require("kitten/components/form/radio-button");

var _tagButton = require("kitten/components/buttons/tag-button");

var _visaIcon = require("kitten/components/icons/visa-icon");

var _mastercardIcon = require("kitten/components/icons/mastercard-icon");

var _cbIcon = require("kitten/components/icons/cb-icon");

var _line = require("kitten/components/layout/line");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var paymentButtonWrapper = function paymentButtonWrapper(WrappedComponent, props) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(PaymentButtonWrapper, _Component);

      function PaymentButtonWrapper() {
        _classCallCheck(this, PaymentButtonWrapper);

        return _possibleConstructorReturn(this, _getPrototypeOf(PaymentButtonWrapper).apply(this, arguments));
      }

      _createClass(PaymentButtonWrapper, [{
        key: "render",
        value: function render() {
          var text = _react.default.createElement(_tagButton.TagButton, {
            icon: true,
            big: true,
            tag: "span"
          }, _react.default.createElement(WrappedComponent, {
            className: "k-TagButton__icon"
          }));

          return _react.default.createElement(_radioButton.RadioButton, _extends({
            text: text
          }, props));
        }
      }]);

      return PaymentButtonWrapper;
    }(_react.Component)
  );
};

var KarlPaymentButtons = function KarlPaymentButtons() {
  return _react.default.createElement("div", null, _react.default.createElement(KarlPaymentButtonVisa, null), _react.default.createElement(KarlPaymentButtonMasterCard, null), _react.default.createElement(KarlPaymentButtonCb, null), _react.default.createElement(KarlPaymentButtonBankTransfer, null));
};

exports.KarlPaymentButtons = KarlPaymentButtons;
var KarlPaymentButtonVisa = paymentButtonWrapper(_visaIcon.VisaIcon, {
  name: 'payment-button-1',
  width: '36'
});
var KarlPaymentButtonMasterCard = paymentButtonWrapper(_mastercardIcon.MasterCardIcon, {
  name: 'payment-button-1',
  defaultChecked: true,
  width: '36'
});
var KarlPaymentButtonCb = paymentButtonWrapper(_cbIcon.CbIcon, {
  name: 'payment-button-1',
  width: '36'
});

var KarlPaymentButtonBankTransfer = function KarlPaymentButtonBankTransfer(props) {
  var text = _react.default.createElement(_tagButton.TagButton, {
    big: true,
    tag: "span"
  }, "Virement");

  return _react.default.createElement(_radioButton.RadioButton, {
    text: text,
    name: "payment-button-1"
  });
};