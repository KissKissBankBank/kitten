"use strict";

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _checkedCircleIcon = require("../../icons/checked-circle-icon");

var _encodeSvg = require("../../../helpers/utils/encode-svg");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var getCircleIcon = function getCircleIcon(color) {
  return (0, _encodeSvg.encodeSvgString)((0, _checkedCircleIcon.checkedCircleIconAsString)({
    circleColor: color,
    checkedColor: _colorsConfig.default.background1
  }));
};

var StyledCheckableButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "checkable-button__StyledCheckableButton",
  componentId: "b6e3u-0"
})(["&::after{flex-shrink:0;content:'';box-sizing:border-box;border-radius:50%;width:", ";height:", ";width:var(--CheckableButton-radius);height:var(--CheckableButton-radius);background-repeat:no-repeat;background-position:50% 50%;background-size:var(--CheckableButton-radius) var(--CheckableButton-radius);}&.k-CheckableButton--bottom,&.k-CheckableButton--left[aria-checked]{&::after{background-image:url(", ");}&.k-Button--copper::after{background-image:url(", ");}&:disabled::after{background-image:url(", ");}}&.k-CheckableButton--bottom{&::after{position:absolute;bottom:-", ";bottom:calc((var(--CheckableButton-radius) / 2 + ", ") * -1);opacity:0;transform-origin:50% 50%;transition:opacity 0.2s ease,transform 0.2s cubic-bezier(0.3,-0.5,0.8,1);transform:scale(0);}&[aria-checked]::after{opacity:1;transform:scale(1);transition-timing-function:ease,cubic-bezier(0.2,2,0.7,1);}}&.k-CheckableButton--left{display:flex;flex-direction:row-reverse;justify-content:flex-end;padding-left:0;text-align:left;&::after{margin:0 ", ";margin:0 var(--CheckableButton-checkMargin);border:", " solid ", ";background-color:", ";transition:border-color 0.2s ease,background 0.2s ease;}&[aria-checked]::after{border-color:", ";background-color:", ";}&.k-Button--copper::after{border-color:", ";background-color:", ";}&:disabled::after{border-color:", ";background-color:", ";}}&.k-Button--micro,&.k-Button--tiny{--CheckableButton-radius:", ";--CheckableButton-checkMargin:", ";}&.k-Button--regular{--CheckableButton-radius:", ";--CheckableButton-checkMargin:", ";}&.k-Button--big,&.k-Button--huge,&.k-Button--giant{--CheckableButton-radius:", ";--CheckableButton-checkMargin:", ";}&.k-Button--andromeda{&.k-Button--lithium,&.k-Button--hydrogen{&:not(:disabled){&:hover,&:focus{border-color:", ";background-color:", ";color:", ";&:not([aria-checked])::after{border-color:", ";}}&:active{border-color:", ";background-color:", ";color:", ";}}}&:focus{outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&[aria-checked]:focus{outline:", " solid ", ";border-color:", ";color:", ";}}&.k-Button--orion{&.k-Button--lithium,&.k-Button--hydrogen{&:not(:disabled){&:hover{border-color:", ";background-color:", ";color:", ";&:not([aria-checked])::after{border-color:", ";}}&:focus{border-color:", ";background-color:", ";color:", ";}&[aria-checked]{border-color:", ";color:", ";}&:active{border-color:", ";background-color:", ";}}}&[aria-checked]:focus{border-color:", ";}}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), getCircleIcon(_colorsConfig.default.primary1), getCircleIcon(_colorsConfig.default.error), getCircleIcon(_colorsConfig.default.line2), (0, _typography.pxToRem)(20 / 2 + 1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2), _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.error, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.line2, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(20), _colorsConfig.default.primary4, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary4, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.primary2, (0, _typography.pxToRem)(-2), _colorsConfig.default.primary4, _colorsConfig.default.primary1, (0, _typography.pxToRem)(2), _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary4, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.primary4, _colorsConfig.default.line1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.primary1, _colorsConfig.default.font1, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.primary1);

var CheckableButton = function CheckableButton(_ref) {
  var checkPosition = _ref.checkPosition,
      isChecked = _ref.isChecked,
      className = _ref.className,
      children = _ref.children,
      error = _ref.error,
      props = (0, _objectWithoutProperties2.default)(_ref, ["checkPosition", "isChecked", "className", "children", "error"]);

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

  return /*#__PURE__*/_react.default.createElement(StyledCheckableButton, (0, _extends2.default)({
    className: (0, _classnames.default)('k-CheckableButton', className, "k-CheckableButton--".concat(checkPosition))
  }, props, {
    "aria-checked": isChecked || null,
    modifier: checkedModifier
  }), children);
};

exports.CheckableButton = CheckableButton;
CheckableButton.propTypes = {
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  isChecked: _propTypes.default.bool,
  checkPosition: _propTypes.default.oneOf(['bottom', 'left'])
};
CheckableButton.defaultProps = {
  disabled: false,
  error: false,
  isChecked: false,
  checkPosition: 'bottom'
};