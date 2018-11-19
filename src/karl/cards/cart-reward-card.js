"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlCartRewardCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cartRewardCard = require("kitten/components/cards/cart-reward-card");

var _container = require("kitten/components/grid/container");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/karl/examples/title");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KarlCartRewardCard =
/*#__PURE__*/
function (_Component) {
  _inherits(KarlCartRewardCard, _Component);

  function KarlCartRewardCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, KarlCartRewardCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(KarlCartRewardCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAfterClose", function () {
      alert('Card removed!');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseClick", function () {
      if (confirm('Want you remove this card?')) {
        _this.card.close();
      }
    });

    return _this;
  }

  _createClass(KarlCartRewardCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_title.KarlExampleTitle, null, "Cart Reward Card custom amount"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
        bottom: "2"
      }, _react.default.createElement(_cartRewardCard.CartRewardCard, {
        titleAmount: "100 \u20AC",
        subtitle: "Reward",
        textDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont",
        updateAmountTitle: "Update amount"
      }))), _react.default.createElement(_title.KarlExampleTitle, null, "Cart Reward Card (without close animation)"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
        bottom: "2"
      }, _react.default.createElement(_cartRewardCard.CartRewardCard, {
        ref: function ref(node) {
          _this2.card = node;
        },
        titleAmount: "100 \u20AC",
        textDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont",
        onAfterClose: this.handleAfterClose,
        onCloseClick: this.handleCloseClick
      }, _react.default.createElement(_cartRewardCard.CartRewardCard.Information, {
        title: "Shipping:",
        value: "January 2018"
      })))));
    }
  }]);

  return KarlCartRewardCard;
}(_react.Component);

exports.KarlCartRewardCard = KarlCartRewardCard;