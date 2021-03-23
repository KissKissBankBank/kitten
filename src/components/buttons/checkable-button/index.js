"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckableButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../components/buttons/button");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _checkedCircleIcon = require("../../icons/checked-circle-icon");

var _encodeSvg = require("../../../helpers/utils/encode-svg");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var checkedCircleIconStyle = function checkedCircleIconStyle(size) {
  return (0, _styledComponents.css)(["width:", ";height:", ";bottom:-", ";"], (0, _typography.pxToRem)(size), (0, _typography.pxToRem)(size), (0, _typography.pxToRem)(size / 2 + 1));
};

var getCircleIcon = function getCircleIcon(color) {
  return (0, _encodeSvg.encodeSvgString)((0, _checkedCircleIcon.checkedCircleIconAsString)({
    circleColor: color,
    checkedColor: _colorsConfig.default.background1
  }));
};

var StyledCheckableButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "checkable-button__StyledCheckableButton",
  componentId: "b6e3u-0"
})(["&::after{content:'';position:absolute;", " ", " background-repeat:no-repeat;background-position:50% 50%;opacity:0;transform-origin:50% 50%;transition:opacity 0.2s ease,transform 0.2s cubic-bezier(0.3,-0.5,0.8,1);transform:scale(0);}&[aria-checked]::after{opacity:1;transform:scale(1);transition-timing-function:ease,cubic-bezier(0.2,2,0.7,1);}&:focus{outline-offset:", ";}", " &[aria-checked]:focus{outline:", " solid ", ";border-color:", ";}"], function (_ref) {
  var size = _ref.size;
  if (size === 'tiny') return checkedCircleIconStyle(15);
  if (size === 'big') return checkedCircleIconStyle(24);
  return checkedCircleIconStyle(20);
}, function (_ref2) {
  var modifier = _ref2.modifier,
      disabled = _ref2.disabled;
  var color = _colorsConfig.default.primary1;

  if (modifier === 'copper') {
    color = _colorsConfig.default.error;
  }

  if (disabled) {
    color = _colorsConfig.default.line2;
  }

  return (0, _styledComponents.css)(["background-image:url(", ");"], getCircleIcon(color));
}, (0, _typography.pxToRem)(-2), function (_ref3) {
  var modifier = _ref3.modifier;
  return modifier !== 'copper' && (0, _styledComponents.css)([":hover:not(:disabled),:focus:not(:disabled){border-color:", ";background-color:", ";color:", ";}:active:not(:disabled){border-color:", ";background-color:", ";color:", ";}"], _colorsConfig.default.primary4, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.primary2);
}, _colorsConfig.default.primary1, (0, _typography.pxToRem)(2), _colorsConfig.default.primary1);

var CheckableButton = function CheckableButton(_ref4) {
  var isChecked = _ref4.isChecked,
      children = _ref4.children,
      error = _ref4.error,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["isChecked", "children", "error"]);

  var checkedModifier = function () {
    switch (true) {
      case error:
        return 'copper';

      case isChecked:
        return 'lithium';

      default:
        return 'hydrogen';
    }
  }();

  return /*#__PURE__*/_react.default.createElement(StyledCheckableButton, (0, _extends2.default)({}, props, {
    "aria-checked": isChecked || null,
    modifier: checkedModifier
  }), children);
};

exports.CheckableButton = CheckableButton;
CheckableButton.propTypes = {
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  isChecked: _propTypes.default.bool
};
CheckableButton.defaultProps = {
  disabled: false,
  error: false,
  isChecked: false
};