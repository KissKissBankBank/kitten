"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartRewardCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _garbageIcon = require("kitten/components/icons/garbage-icon");

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _title = require("kitten/components/typography/title");

var _text = require("kitten/components/typography/text");

var _paragraph = require("kitten/components/typography/paragraph");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _screenConfig = require("kitten/constants/screen-config");

var _mediaQueries = require("kitten/hoc/media-queries");

var _elementHelper = require("kitten/helpers/dom/element-helper");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Marger = (0, _radium.default)(_marger.Marger);

var CartRewardCardComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CartRewardCardComponent, _Component);

  function CartRewardCardComponent(props) {
    var _this;

    _classCallCheck(this, CartRewardCardComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CartRewardCardComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseClick", function () {
      if (_this.props.onCloseClick) {
        _this.props.onCloseClick();
      } else {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAnimationEnd", function () {
      _this.props.onAfterClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
      _this.setState({
        isHidden: true,
        // The css animation on the garbage button requires a fixed height.
        height: _elementHelper.domElementHelper.getComputedHeight(_this.container)
      });
    });

    _this.state = {
      isHidden: false,
      height: 'auto'
    };
    return _this;
  }

  _createClass(CartRewardCardComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var cartRewardStyles = [styles.card, this.state.isHidden && styles.card.hidden, {
        height: this.state.height
      }];
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", {
        ref: function ref(div) {
          _this2.container = div;
        },
        style: cartRewardStyles,
        onAnimationEnd: this.handleAnimationEnd
      }, this.renderGarbage(), this.renderDescription()));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var _this$props = this.props,
          titleTag = _this$props.titleTag,
          titleAmount = _this$props.titleAmount,
          subtitle = _this$props.subtitle,
          textDescription = _this$props.textDescription,
          viewportIsMobile = _this$props.viewportIsMobile;
      return _react.default.createElement(Marger, {
        bottom: "4",
        style: styles.description
      }, _react.default.createElement(Marger, {
        bottom: viewportIsMobile && !subtitle ? 1 : 2
      }, _react.default.createElement(_title.Title, {
        italic: true,
        modifier: "quinary",
        margin: false,
        tag: titleTag
      }, titleAmount)), subtitle && _react.default.createElement(Marger, {
        top: "2",
        bottom: "1"
      }, _react.default.createElement(_text.Text, {
        weight: "bold",
        size: "default"
      }, subtitle)), _react.default.createElement(Marger, {
        top: viewportIsMobile && !subtitle ? 1 : 2,
        bottom: "2"
      }, _react.default.createElement(_paragraph.Paragraph, {
        margin: false,
        modifier: "quaternary"
      }, textDescription)), this.renderBottomContent());
    }
  }, {
    key: "renderGarbage",
    value: function renderGarbage() {
      return _react.default.createElement("div", {
        style: styles.cart
      }, _react.default.createElement(_buttonIcon.ButtonIcon, {
        type: "button",
        title: "Garbage Button",
        "aria-label": "Garbage Button",
        modifier: "beryllium",
        size: "tiny",
        onClick: this.handleCloseClick,
        style: styles.garbage
      }, _react.default.createElement(_garbageIcon.GarbageIcon, {
        className: "k-ButtonIcon__svg"
      })));
    }
  }, {
    key: "renderBottomContent",
    value: function renderBottomContent() {
      var _this$props2 = this.props,
          shippingTitle = _this$props2.shippingTitle,
          shippingValue = _this$props2.shippingValue,
          updateAmountTitle = _this$props2.updateAmountTitle,
          updateAmountLink = _this$props2.updateAmountLink,
          children = _this$props2.children;

      var informationElements = _react.default.Children.toArray(children).filter(function (child) {
        return child.type === CartRewardCard.Information;
      });

      return _react.default.createElement(_react.Fragment, null, shippingTitle && shippingValue && _react.default.createElement(Marger, {
        top: "2"
      }, _react.default.createElement(CartRewardCard.Information, {
        title: shippingTitle,
        value: shippingValue
      })), informationElements, updateAmountTitle && _react.default.createElement(Marger, {
        top: "2"
      }, _react.default.createElement(_text.Text, {
        tag: "a",
        href: updateAmountLink,
        color: "primary1",
        decoration: "none",
        weight: "regular",
        size: "tiny"
      }, updateAmountTitle)));
    }
  }]);

  return CartRewardCardComponent;
}(_react.Component);

_defineProperty(CartRewardCardComponent, "propTypes", {
  titleAmount: _propTypes.default.string.isRequired,
  textDescription: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  updateAmountTitle: _propTypes.default.string,
  updateAmountLink: _propTypes.default.string,
  onAfterClose: _propTypes.default.func,
  onCloseClick: _propTypes.default.func,
  // Deprecated.
  shippingTitle: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use <CartRewardCard.Information />'),
  shippingValue: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use <CartRewardCard.Information />')
});

_defineProperty(CartRewardCardComponent, "defaultProps", {
  titleTag: 'h1',
  subtitle: '',
  updateAmountTitle: '',
  updateAmountLink: '',
  onAfterClose: function onAfterClose() {},
  onCloseClick: null
});

var garbageButtonKeyframes = _radium.default.keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0,
    height: 0
  }
});

var cartRewardAnimationClass = {
  animation: 'x .4s cubic-bezier(.895, .03, .685, .22) forwards',
  animationName: garbageButtonKeyframes,
  pointerEvents: 'none',
  opacity: 1
};
var borderWidth = 2;
var styles = {
  card: {
    borderWidth: borderWidth,
    borderStyle: 'solid',
    borderColor: _colorsConfig.default.line1,
    hidden: cartRewardAnimationClass
  },
  description: _defineProperty({
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 500
  }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
    marginLeft: 40,
    marginRight: 40
  }),
  cart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  garbage: {
    position: 'relative',
    top: "-".concat(borderWidth, "px"),
    right: "-".concat(borderWidth, "px")
  }
};
var CartRewardCard = (0, _mediaQueries.mediaQueries)(CartRewardCardComponent, {
  viewportIsMobile: true,
  exposedMethods: ['close']
});
exports.CartRewardCard = CartRewardCard;

CartRewardCard.Information = function (_ref) {
  var title = _ref.title,
      value = _ref.value;
  return _react.default.createElement("div", null, _react.default.createElement(_text.Text, {
    weight: "regular",
    size: "tiny"
  }, title, " ", _react.default.createElement(_text.Text, {
    weight: "light"
  }, value)));
};

CartRewardCard.Information.propTypes = {
  title: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};