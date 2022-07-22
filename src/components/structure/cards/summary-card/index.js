"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useSummaryCardResizeObserver = exports.SummaryCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("./components");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

var _noImageIcon = require("../../../graphics/icons/no-image-icon");

var _useResizeObserver = require("./hooks/use-resize-observer");

exports.useSummaryCardResizeObserver = _useResizeObserver.useResizeObserver;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SummaryCard = _ref => {
  var _imageChild$props;

  let {
    children,
    show,
    className,
    actionProps,
    size,
    type,
    ...props
  } = _ref;
  const imageChild = (0, _getReactElements.getReactElementsByType)({
    children,
    type: SummaryCard.Image
  })[0];
  const wrappedChildren = (0, _getReactElements.getReactElementsWithoutType)({
    children,
    type: SummaryCard.Image
  });
  const {
    className: actionClassName,
    as: actionAs = 'a',
    ...action
  } = actionProps;
  const ActionElement = actionAs;
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
  }, wrappedChildren.map((item, index) => /*#__PURE__*/(0, _react.cloneElement)(item, {
    key: "SummaryCard-" + index
  }))));
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
  size: _propTypes.default.oneOf(['huge', 'large', 'medium', 'tablet', 'small', 'mobile']),
  type: _propTypes.default.oneOf(['ownerContribution', 'ownerSubscription', 'contributorContribution', 'contributorSubscription'])
};