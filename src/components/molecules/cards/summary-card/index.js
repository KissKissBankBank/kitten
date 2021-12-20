"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useSummaryCardResizeObserver = exports.SummaryCard = void 0;

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

exports.useSummaryCardResizeObserver = _useResizeObserver.useResizeObserver;
var _excluded = ["children", "show", "className", "actionProps", "size", "type"],
    _excluded2 = ["className", "as"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SummaryCard = function SummaryCard(_ref) {
  var _imageChild$props;

  var children = _ref.children,
      show = _ref.show,
      className = _ref.className,
      actionProps = _ref.actionProps,
      size = _ref.size,
      type = _ref.type,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var imageChild = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: SummaryCard.Image
  })[0];
  var wrappedChildren = (0, _reactElements.getReactElementsWithoutType)({
    children: children,
    type: SummaryCard.Image
  });
  var actionClassName = actionProps.className,
      _actionProps$as = actionProps.as,
      actionAs = _actionProps$as === void 0 ? 'a' : _actionProps$as,
      action = (0, _objectWithoutPropertiesLoose2.default)(actionProps, _excluded2);
  var ActionElement = actionAs;
  if (!show) return null;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledSummaryCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-SummaryCard', className, "k-SummaryCard-Wrapper--" + size, {
      'k-SummaryCard--hasAction': Object.keys(actionProps).length > 0
    }),
    type: type
  }, props), Object.keys(actionProps).length > 0 && /*#__PURE__*/_react.default.createElement(ActionElement, (0, _extends2.default)({
    className: (0, _classnames.default)('k-SummaryCard__action', actionClassName)
  }, action)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-SummaryCard__imageWrapper', 'k-SummaryCard-Wrapper__imageWrapper', imageChild == null ? void 0 : (_imageChild$props = imageChild.props) == null ? void 0 : _imageChild$props.className, {
      'k-u-hidden@s-down': !imageChild
    })
  }, !!imageChild ? /*#__PURE__*/(0, _react.cloneElement)(imageChild) : /*#__PURE__*/_react.default.createElement(_noImageIcon.NoImageIcon, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SummaryCard__gridWrapper k-SummaryCard-Wrapper__gridWrapper"
  }, wrappedChildren.map(function (item, index) {
    return /*#__PURE__*/(0, _react.cloneElement)(item, {
      key: "SummaryCard-" + index
    });
  })));
};

exports.SummaryCard = SummaryCard;
SummaryCard.Image = _components.Image;
SummaryCard.TitleTag = _components.TitleTag;
SummaryCard.TitleBar = _components.TitleBar;
SummaryCard.Cell = _components.Cell;
SummaryCard.defaultProps = {
  show: true,
  actionProps: {},
  size: 'large',
  type: 'ownerContribution'
};
SummaryCard.propTypes = {
  show: _propTypes.default.bool,
  actionProps: _propTypes.default.object,
  size: _propTypes.default.oneOf(['xlarge', 'large', 'medium', 'tablet', 'small', 'mobile']),
  type: _propTypes.default.oneOf(['ownerContribution', 'ownerSubscription', 'contributorContribution', 'contributorSubscription'])
};