"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.RewardCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _legacyRewardCardContainer = require("kitten/components/cards/reward-card/legacy-reward-card-container");

var _text = require("kitten/components/typography/text");

var _typography = require("kitten/helpers/utils/typography");

var _title = require("kitten/components/cards/reward-card/title");

var _row = require("kitten/components/cards/reward-card/row");

var _rowContent = require("kitten/components/cards/reward-card/row-content");

var _rowSide = require("kitten/components/cards/reward-card/row-side");

var _starredBadge = require("kitten/components/cards/reward-card/starred-badge");

var _checkedSection = require("kitten/components/cards/reward-card/checked-section");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Text = (0, _radium.default)(_text.Text); // TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.

var RewardCardInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(RewardCardInfo, _Component);

  function RewardCardInfo() {
    _classCallCheck(this, RewardCardInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(RewardCardInfo).apply(this, arguments));
  }

  _createClass(RewardCardInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          withMarginBottom = _this$props.withMarginBottom,
          disabled = _this$props.disabled;
      var infoStyles = [style.info, withMarginBottom && style.infoWithMargin, disabled && style.disabled];
      return _react.default.createElement(Text, {
        size: "tiny",
        color: "font1",
        weight: "regular",
        style: infoStyles
      }, "".concat(label, " "), _react.default.createElement(Text, {
        weight: "light"
      }, value));
    }
  }]);

  return RewardCardInfo;
}(_react.Component); // TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.


_defineProperty(RewardCardInfo, "propTypes", {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  withMarginBottom: _propTypes.default.bool,
  disabled: _propTypes.default.bool
});

_defineProperty(RewardCardInfo, "defaultProps", {
  value: null,
  withMarginBottom: true,
  disabled: false
});

var RewardCardImage =
/*#__PURE__*/
function (_Component2) {
  _inherits(RewardCardImage, _Component2);

  function RewardCardImage() {
    _classCallCheck(this, RewardCardImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(RewardCardImage).apply(this, arguments));
  }

  _createClass(RewardCardImage, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          alt = _this$props2.alt,
          disabled = _this$props2.disabled,
          others = _objectWithoutProperties(_this$props2, ["alt", "disabled"]);

      var imageStyles = [{
        width: '100%'
      }, disabled && styles.disabled];
      return _react.default.createElement("img", _extends({}, others, {
        alt: alt || '',
        style: imageStyles
      }));
    }
  }]);

  return RewardCardImage;
}(_react.Component);

_defineProperty(RewardCardImage, "propTypes", {
  disabled: _propTypes.default.bool
});

_defineProperty(RewardCardImage, "defaultProps", {
  disabled: false
});

var RewardCard =
/*#__PURE__*/
function (_Component3) {
  _inherits(RewardCard, _Component3);

  function RewardCard() {
    _classCallCheck(this, RewardCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(RewardCard).apply(this, arguments));
  }

  _createClass(RewardCard, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          others = _objectWithoutProperties(_this$props3, ["children"]);

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_legacyRewardCardContainer.LegacyRewardCardContainer, this.props), children && _react.default.createElement("div", _extends({}, others, {
        style: style.card
      }), children));
    }
  }]);

  return RewardCard;
}(_react.Component);

exports.RewardCard = RewardCard;

_defineProperty(RewardCard, "Row", _row.RewardCardRow);

_defineProperty(RewardCard, "RowContent", _rowContent.RewardCardRowContent);

_defineProperty(RewardCard, "RowSide", _rowSide.RewardCardRowSide);

_defineProperty(RewardCard, "Title", _title.RewardCardTitle);

_defineProperty(RewardCard, "Image", (0, _radium.default)(RewardCardImage));

_defineProperty(RewardCard, "Info", RewardCardInfo);

_defineProperty(RewardCard, "CheckedSection", _checkedSection.RewardCardCheckedSection);

_defineProperty(RewardCard, "StarredBadge", _starredBadge.RewardCardStarredBadge);

_defineProperty(RewardCard, "propTypes", {
  titleAmount: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Title` instead.'),
  titleTag: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Title` instead.'),
  subtitle: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  subtitleTag: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  description: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  manageContributionDescription: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard` sub-component instead.'),
  manageContributionLinkLabel: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard` sub-component instead.'),
  manageContributionLinkHref: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard` sub-component instead.'),
  buttonLabel: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  buttonOnMouseEnter: (0, _deprecated.default)(_propTypes.default.func, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  buttonOnMouseLeave: (0, _deprecated.default)(_propTypes.default.func, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  buttonOnClick: (0, _deprecated.default)(_propTypes.default.func, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  imageProps: (0, _deprecated.default)(_propTypes.default.object, 'Use `RewardCard.Image` instead.'),
  isDisabled: (0, _deprecated.default)(_propTypes.default.bool, 'You should handle the disabled state direcly on your component.'),
  starred: (0, _deprecated.default)(_propTypes.default.bool, 'Use `RewardCard` sub-component instead.'),
  starLabel: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard` sub-component instead.'),
  version: (0, _deprecated.default)(_propTypes.default.oneOf(['default', 'tiny']), '`RewardCard` is no longer handled with media-queries. The version of the component now is handled by the size of the parent container.'),
  // Deprecated props
  titleDescription: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  textDescription: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  textTag: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  myContribution: (0, _deprecated.default)(_propTypes.default.string, 'Use `manageContributionDescription` prop instead.'),
  manageContribution: (0, _deprecated.default)(_propTypes.default.string, 'Use `manageContributionLinkLabel` prop instead.'),
  manageContributionLink: (0, _deprecated.default)(_propTypes.default.string, 'Use `manageContributionLinkHref` prop instead.'),
  button: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  titleContributors: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  titleDelivery: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  titleAvailability: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  valueContributors: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  valueDelivery: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  valueAvailability: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.')
});

var style = {
  card: {
    backgroundColor: _colorsConfig.default.background1,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: _colorsConfig.default.line1,
    width: '100%',
    padding: "".concat((0, _typography.pxToRem)(15), " 0")
  },
  image: {
    width: '100%'
  },
  info: {
    display: 'block',
    lineHeight: (0, _typography.pxToRem)(20)
  },
  infoWithMargin: {
    marginBottom: (0, _typography.pxToRem)(10)
  },
  disabled: {
    color: _colorsConfig.default.font2,
    cursor: 'not-allowed'
  } // This export handles retro-compatibility.
  // TODO: remove this export when deleting all deprecated components.

};
var styles = _legacyRewardCardContainer.styles;
exports.styles = styles;