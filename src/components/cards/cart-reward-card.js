"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartRewardCard = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../components/layout/marger");

var _garbageIcon = require("../../components/icons/garbage-icon");

var _buttonIcon = require("../../components/buttons/button-icon");

var _title = require("../../components/typography/title");

var _text = require("../../components/typography/text");

var _paragraph = require("../../components/typography/paragraph");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _screenConfig = require("../../constants/screen-config");

var _mediaQueries = require("../../hoc/media-queries");

var _elementHelper = require("../../helpers/dom/element-helper");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var Marger = (0, _radium.default)(_marger.Marger);

var CartRewardCardComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CartRewardCardComponent, _Component);

  function CartRewardCardComponent(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CartRewardCardComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CartRewardCardComponent).call(this, props));

    _this.handleCloseClick = function () {
      if (_this.props.onCloseClick) {
        _this.props.onCloseClick();
      } else {
        _this.close();
      }
    };

    _this.handleAnimationEnd = function () {
      _this.props.onAfterClose();
    };

    _this.close = function () {
      _this.setState({
        isHidden: true,
        // The css animation on the garbage button requires a fixed height.
        height: _elementHelper.domElementHelper.getComputedHeight(_this.container)
      });
    };

    _this.state = {
      isHidden: false,
      height: 'auto'
    };
    return _this;
  }

  (0, _createClass2.default)(CartRewardCardComponent, [{
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
          descriptionTag = _this$props.descriptionTag,
          children = _this$props.children,
          viewportIsMobile = _this$props.viewportIsMobile,
          textDescription = _this$props.textDescription;

      var description = _react.default.Children.toArray(children).filter(function (child) {
        return child.type === CartRewardCard.Description;
      });

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
        tag: descriptionTag,
        margin: false,
        modifier: "quaternary"
      }, textDescription, description)), this.renderBottomContent());
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

CartRewardCardComponent.propTypes = {
  titleAmount: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  descriptionTag: _propTypes.default.string,
  updateAmountTitle: _propTypes.default.string,
  updateAmountLink: _propTypes.default.string,
  onAfterClose: _propTypes.default.func,
  onCloseClick: _propTypes.default.func,
  // Deprecated.
  shippingTitle: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use <CartRewardCard.Information />'),
  shippingValue: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use <CartRewardCard.Information />'),
  textDescription: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use <CartRewardCard.Description />')
};
CartRewardCardComponent.defaultProps = {
  titleTag: 'h1',
  subtitle: '',
  descriptionTag: 'p',
  updateAmountTitle: '',
  updateAmountLink: '',
  onAfterClose: function onAfterClose() {},
  onCloseClick: null
};

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
  description: (0, _defineProperty2.default)({
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

CartRewardCard.Description = function (_ref2) {
  var children = _ref2.children;
  return _react.default.createElement(_react.Fragment, null, children);
};