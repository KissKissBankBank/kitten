"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useRewardSummaryCardResizeObserver = exports.RewardSummaryCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("./components");

var _reactElements = require("../../../../helpers/react/react-elements");

var _noImageIcon = require("../../../../components/graphics/icons/no-image-icon");

var _useResizeObserver = require("./hooks/use-resize-observer");

exports.useRewardSummaryCardResizeObserver = _useResizeObserver.useResizeObserver;
var _excluded = ["children", "show", "className", "actionProps", "size"],
    _excluded2 = ["className", "as"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RewardSummaryCard = function RewardSummaryCard(_ref) {
  var children = _ref.children,
      show = _ref.show,
      className = _ref.className,
      actionProps = _ref.actionProps,
      size = _ref.size,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var imageChild = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: RewardSummaryCard.Image
  })[0];
  var wrappedChildren = (0, _reactElements.getReactElementsWithoutType)({
    children: children,
    type: RewardSummaryCard.Image
  });
  var actionClassName = actionProps.className,
      _actionProps$as = actionProps.as,
      actionAs = _actionProps$as === void 0 ? 'a' : _actionProps$as,
      action = (0, _objectWithoutPropertiesLoose2.default)(actionProps, _excluded2);
  var ActionElement = actionAs;
  if (!show) return null;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledRewardSummaryCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-RewardSummaryCard', className, "k-RewardSummaryCard-Wrapper--" + size)
  }, props), /*#__PURE__*/_react.default.createElement(ActionElement, (0, _extends2.default)({
    className: (0, _classnames.default)('k-RewardSummaryCard__action', actionClassName)
  }, action)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-RewardSummaryCard__imageWrapper', 'k-RewardSummaryCard-Wrapper__imageWrapper', {
      'k-u-hidden@s-down': !imageChild
    })
  }, !!imageChild ? /*#__PURE__*/(0, _react.cloneElement)(imageChild) : /*#__PURE__*/_react.default.createElement(_noImageIcon.NoImageIcon, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-RewardSummaryCard__gridWrapper k-RewardSummaryCard-Wrapper__gridWrapper"
  }, wrappedChildren.map(function (item, index) {
    return /*#__PURE__*/(0, _react.cloneElement)(item, {
      key: "RewardSummaryCard-" + index
    });
  })));
};

exports.RewardSummaryCard = RewardSummaryCard;
RewardSummaryCard.Image = _components.Image;
RewardSummaryCard.Title = _components.Title;
RewardSummaryCard.TitleTag = _components.TitleTag;
RewardSummaryCard.Amount = _components.Amount;
RewardSummaryCard.Contribution = _components.Contribution;
RewardSummaryCard.Availability = _components.Availability;
RewardSummaryCard.Options = _components.Options;
RewardSummaryCard.TitleBar = _components.TitleBar;
RewardSummaryCard.defaultProps = {
  show: true,
  actionProps: {},
  size: 'large'
};
RewardSummaryCard.propTypes = {
  show: _propTypes.default.bool,
  actionProps: _propTypes.default.object,
  size: _propTypes.default.oneOf(['large', 'medium', 'tablet', 'small', 'mobile'])
};