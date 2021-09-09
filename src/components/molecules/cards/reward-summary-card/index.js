"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useRewardSummaryCardResizeObserver", {
  enumerable: true,
  get: function get() {
    return _useResizeObserver.useResizeObserver;
  }
});
exports.RewardSummaryCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("./components");

var _reactElements = require("../../../../helpers/react/react-elements");

var _noImageIcon = require("../../../../components/graphics/icons/no-image-icon");

var _useResizeObserver = require("./hooks/use-resize-observer");

var RewardSummaryCard = function RewardSummaryCard(_ref) {
  var children = _ref.children,
      show = _ref.show,
      className = _ref.className,
      actionProps = _ref.actionProps,
      size = _ref.size,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "show", "className", "actionProps", "size"]);
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
      action = (0, _objectWithoutProperties2.default)(actionProps, ["className", "as"]);
  var ActionElement = actionAs;
  if (!show) return null;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledRewardSummaryCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-RewardSummaryCard', className, "k-RewardSummaryCard-Wrapper--".concat(size))
  }, props), /*#__PURE__*/_react.default.createElement(ActionElement, (0, _extends2.default)({
    className: (0, _classnames.default)('k-RewardSummaryCard__action', actionClassName)
  }, action)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-RewardSummaryCard__imageWrapper', 'k-RewardSummaryCard-Wrapper__imageWrapper', {
      'k-u-hidden@s-down': !imageChild
    })
  }, !!imageChild ? (0, _react.cloneElement)(imageChild) : /*#__PURE__*/_react.default.createElement(_noImageIcon.NoImageIcon, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-RewardSummaryCard__gridWrapper k-RewardSummaryCard-Wrapper__gridWrapper"
  }, wrappedChildren.map(function (item, index) {
    return (0, _react.cloneElement)(item, {
      key: "RewardSummaryCard-".concat(index)
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