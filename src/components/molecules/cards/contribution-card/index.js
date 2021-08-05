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

var _closeButton = require("../../../../components/molecules/buttons/close-button");

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _components = require("./components");

var _context = require("./context");

var _reactElements = require("../../../../helpers/react/react-elements");

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
      onClose = _ref.onClose,
      largeInput = _ref.largeInput,
      largeTitle = _ref.largeTitle,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "closeButtonLabel", "children", "show", "style", "borderWidth", "borderRadius", "imageBorderRadius", "borderColor", "borderStyle", "onClose", "largeInput", "largeTitle"]);
  var imageChild = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: ContributionCard.Image
  })[0];
  var wrappedChildren = (0, _reactElements.getReactElementsWithoutType)({
    children: children,
    type: ContributionCard.Image
  });

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isInputEmpty = _useState2[0],
      setEmptyInput = _useState2[1];

  if (!show) return null;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledContributionCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContributionCard', className),
    style: (0, _extends2.default)({}, style, {
      '--contributionCard--border-width': (0, _typography.pxToRem)(borderWidth),
      '--contributionCard--border-radius': (0, _typography.pxToRem)(borderRadius),
      '--contributionCard--image-border-radius': (0, _typography.pxToRem)(imageBorderRadius),
      '--contributionCard--border-color': borderColor,
      '--contributionCard--border-style': borderStyle
    })
  }, props), onClose && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    className: "k-ContributionCard__close",
    size: "micro",
    closeButtonLabel: closeButtonLabel,
    onClick: onClose
  }), imageChild && (0, _react.cloneElement)(imageChild), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ContributionCard__gridWrapper', {
      'k-ContributionCard__gridWrapper--largeInput': largeInput
    })
  }, /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: {
      isInputEmpty: isInputEmpty,
      setEmptyInput: setEmptyInput
    }
  }, wrappedChildren.map(function (item, index) {
    return (0, _react.cloneElement)(item, {
      key: "ContributionCard-".concat(index)
    });
  }))));
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
  closeButtonLabel: 'Close',
  borderColor: _colorsConfig.default.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5,
  onClose: undefined,
  largeInput: false,
  largeTitle: false
};
ContributionCard.propTypes = {
  show: _propTypes.default.bool,
  closeButtonLabel: _propTypes.default.string,
  onClose: _propTypes.default.func,
  borderColor: _propTypes.default.string,
  borderRadius: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  borderStyle: _propTypes.default.string,
  borderWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  imageBorderRadius: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  largeInput: _propTypes.default.bool,
  largeTitle: _propTypes.default.bool
};