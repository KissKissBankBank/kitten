"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContributionCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _closeButton = require("../../../components/buttons/close-button");

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _components = require("./components");

var ContributionCard = function ContributionCard(_ref) {
  var className = _ref.className,
      closeButtonLabel = _ref.closeButtonLabel,
      children = _ref.children,
      show = _ref.show,
      style = _ref.style,
      borderWidth = _ref.borderWidth,
      borderRadius = _ref.borderRadius,
      imageBorderRadius = _ref.imageBorderRadius,
      borderColor = _ref.borderColor,
      borderStyle = _ref.borderStyle,
      closeButton = _ref.closeButton,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "closeButtonLabel", "children", "show", "style", "borderWidth", "borderRadius", "imageBorderRadius", "borderColor", "borderStyle", "closeButton"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTrashed = _useState2[0],
      trashIt = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isMounted = _useState4[0],
      setMounted = _useState4[1];

  var contributionRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var clearDelayBeforeTrash;

    if (!isMounted) {
      clearDelayBeforeTrash = setTimeout(function () {
        trashIt(true);
        onAfterClose();
      }, 400);
    }

    return function () {
      return clearTimeout(clearDelayBeforeTrash);
    };
  }, [isMounted]);
  if (isTrashed || !show) return null;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledContributionCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContributionCard', className, {
      'k-contributionCard--shouldHide': !isMounted
    }),
    style: (0, _extends2.default)({}, style, {
      '--contributionCard--border-width': (0, _typography.pxToRem)(borderWidth),
      '--contributionCard--border-radius': (0, _typography.pxToRem)(borderRadius),
      '--contributionCard--image-border-radius': (0, _typography.pxToRem)(imageBorderRadius),
      '--contributionCard--border-color': borderColor,
      '--contributionCard--border-style': borderStyle
    }),
    ref: contributionRef,
    role: "dialog"
  }, props), closeButton && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    className: "k-ContributionCard__close",
    size: "micro",
    closeButtonLabel: closeButtonLabel,
    onClick: function onClick() {
      return setMounted(false);
    }
  }), _react.default.Children.map(children, function (child) {
    if (!child) return null;
    return child.props.__TYPE === 'Image' ? child : null;
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ContributionCard__gridWrapper"
  }, _react.default.Children.map(children, function (child) {
    if (!child) return null;
    return ['Image'].includes(child.props.__TYPE) ? null : child;
  })));
};

exports.ContributionCard = ContributionCard;
ContributionCard.Image = _components.Image;
ContributionCard.Title = _components.Title;
ContributionCard.Description = _components.Description;
ContributionCard.PillNumber = _components.PillNumber;
ContributionCard.Amount = _components.Amount;
ContributionCard.Input = _components.Input;
ContributionCard.Action = _components.Action;
ContributionCard.defaultProps = {
  show: true,
  closeButton: true,
  closeButtonLabel: 'Close',
  borderColor: _colorsConfig.default.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5
};
ContributionCard.propTypes = {
  show: _propTypes.default.bool,
  closeButton: _propTypes.default.bool,
  closeButtonLabel: _propTypes.default.string,
  borderColor: _propTypes.default.string,
  borderRadius: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  borderStyle: _propTypes.default.string,
  borderWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  imageBorderRadius: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};