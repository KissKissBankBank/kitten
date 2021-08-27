"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartRewardCard = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../../components/layout/marger");

var _garbageIcon = require("../../../../components/graphics/icons/garbage-icon");

var _buttonIcon = require("../../../../components/molecules/buttons/button-icon");

var _title = require("../../../../components/atoms/typography/title");

var _text = require("../../../../components/atoms/typography/text");

var _next = require("../../../../components/atoms/typography/paragraph/next");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _elementHelper = require("../../../../helpers/dom/element-helper");

var _typography = require("../../../../helpers/utils/typography");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var garbageButtonKeyframes = (0, _styledComponents.keyframes)(["0%{opacity:1;}100%{opacity:0;height:0;}"]);
var borderWidth = 2;

var StyledCartRewardCard = _styledComponents.default.div.withConfig({
  displayName: "cart-reward-card__StyledCartRewardCard",
  componentId: "sc-1umd03e-0"
})(["border-width:", ";border-style:solid;border-color:", ";height:", ";&.k-CartRewardCard--hidden{animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;pointer-events:none;opacity:1;}.k-CartRewardCard__description{margin-left:", ";margin-right:", ";max-width:", ";@media (min-width:", "){margin-left:", ";margin-right:", ";}}.k-CartRewardCard__cart{display:flex;flex-direction:row;justify-content:flex-end;}.k-CartRewardCard__garbage{position:relative;top:", ";right:", ";}"], (0, _typography.pxToRem)(borderWidth), _colorsConfig.default.line1, function (_ref) {
  var elementHeight = _ref.elementHeight;
  return (0, _typography.pxToRem)(elementHeight);
}, garbageButtonKeyframes, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(500), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(-borderWidth), (0, _typography.pxToRem)(-borderWidth));

var CartRewardCard = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(CartRewardCard, _Component);

  var _super = _createSuper(CartRewardCard);

  function CartRewardCard(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CartRewardCard);
    _this = _super.call(this, props);

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

  (0, _createClass2.default)(CartRewardCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(StyledCartRewardCard, {
        ref: function ref(div) {
          _this2.container = div;
        },
        onAnimationEnd: this.handleAnimationEnd,
        className: (0, _classnames.default)('k-CartRewardCard', {
          'k-CartRewardCard--hidden': this.state.isHidden
        }),
        elementHeight: this.state.height
      }, this.renderGarbage(), this.renderDescription());
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
          textDescription = _this$props.textDescription;

      var description = _react.default.Children.toArray(children).filter(function (child) {
        return child.type === CartRewardCard.Description;
      });

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-u-margin-bottom-quadruple k-CartRewardCard__description"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('k-u-margin-bottom-double', {
          'k-u-margin-bottom-single@xs-down': !subtitle
        })
      }, /*#__PURE__*/_react.default.createElement(_title.Title, {
        italic: true,
        modifier: "quinary",
        noMargin: true,
        tag: titleTag
      }, titleAmount)), subtitle && /*#__PURE__*/_react.default.createElement("div", {
        className: "k-u-margin-bottom-single k-u-margin-top-double"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, {
        weight: "bold",
        size: "default"
      }, subtitle)), /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('k-u-margin-bottom-double', 'k-u-margin-top-double', {
          'k-u-margin-top-single@xs-down': !subtitle
        })
      }, /*#__PURE__*/_react.default.createElement(_next.Paragraph, {
        tag: descriptionTag,
        noMargin: true,
        modifier: "tertiary"
      }, textDescription, description)), this.renderBottomContent());
    }
  }, {
    key: "renderGarbage",
    value: function renderGarbage() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CartRewardCard__cart"
      }, /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
        type: "button",
        "aria-label": this.props.deleteButtonA11yText,
        modifier: "hydrogen",
        size: "micro",
        onClick: this.handleCloseClick,
        className: "k-CartRewardCard__garbage"
      }, /*#__PURE__*/_react.default.createElement(_garbageIcon.GarbageIcon, {
        "aria-hidden": true,
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

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, shippingTitle && shippingValue && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "2"
      }, /*#__PURE__*/_react.default.createElement(CartRewardCard.Information, {
        title: shippingTitle,
        value: shippingValue
      })), informationElements, updateAmountTitle && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "2"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, {
        tag: "a",
        href: updateAmountLink,
        color: "primary1",
        decoration: "none",
        weight: "regular",
        size: "tiny"
      }, updateAmountTitle)));
    }
  }]);
  return CartRewardCard;
}(_react.Component);

exports.CartRewardCard = CartRewardCard;
CartRewardCard.propTypes = {
  titleAmount: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  descriptionTag: _propTypes.default.string,
  updateAmountTitle: _propTypes.default.string,
  updateAmountLink: _propTypes.default.string,
  onAfterClose: _propTypes.default.func,
  onCloseClick: _propTypes.default.func,
  deleteButtonA11yText: _propTypes.default.string,
  // Deprecated.
  shippingTitle: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use <CartRewardCard.Information />'),
  shippingValue: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use <CartRewardCard.Information />'),
  textDescription: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use <CartRewardCard.Description />')
};
CartRewardCard.defaultProps = {
  titleTag: 'h1',
  subtitle: '',
  descriptionTag: 'p',
  updateAmountTitle: '',
  updateAmountLink: '',
  onAfterClose: function onAfterClose() {},
  onCloseClick: null,
  deleteButtonA11yText: 'Delete'
};

CartRewardCard.Information = function (_ref2) {
  var title = _ref2.title,
      value = _ref2.value;
  return /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "regular",
    size: "tiny",
    tag: "p",
    className: "k-u-margin-none"
  }, title, " ", /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "light"
  }, value));
};

CartRewardCard.Information.propTypes = {
  title: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};

CartRewardCard.Description = function (_ref3) {
  var children = _ref3.children;
  return children;
};