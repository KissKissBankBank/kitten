"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckableButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../action/button");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _checkedCircleIcon = require("../../graphics/icons/checked-circle-icon");

var _encodeSvg = require("../../../helpers/utils/encode-svg");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["checkPosition", "isChecked", "className", "children", "error"];

var getCircleIcon = function getCircleIcon(color) {
  return (0, _encodeSvg.encodeSvgString)((0, _checkedCircleIcon.checkedCircleIconAsString)({
    circleColor: color,
    checkedColor: _colorsConfig.default.background1
  }));
};

var StyledCheckableButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "checkable-button__StyledCheckableButton",
  componentId: "sc-1j2xgxx-0"
})(["gap:0;&::after{flex-shrink:0;content:'';box-sizing:border-box;border-radius:var(--border-radius-rounded);width:var(--CheckableButton-dimension);height:var(--CheckableButton-dimension);background-repeat:no-repeat;background-position:50% 50%;background-size:var(--CheckableButton-dimension) var(--CheckableButton-dimension);}&.k-CheckableButton--bottom,&.k-CheckableButton--left[aria-checked]{&::after{background-image:url(", ");}&.k-Button--copper::after{background-image:url(", ");}&:disabled::after{background-image:url(", ");}}&.k-CheckableButton--bottom{&::after{position:absolute;bottom:-", ";bottom:calc((var(--CheckableButton-dimension) / 2 + ", ") * -1);opacity:0;transform-origin:50% 50%;transition:opacity var(--transition),transform var(--transition-duration) cubic-bezier(0.3,-0.5,0.8,1);transform:scale(0);}&[aria-checked]::after{opacity:1;transform:scale(1);transition-timing-function:ease,cubic-bezier(0.2,2,0.7,1);}}&.k-CheckableButton--left{display:flex;flex-direction:row-reverse;justify-content:flex-end;padding-left:0;text-align:left;&::after{margin:0 ", ";margin:0 var(--CheckableButton-checkMargin);border:var(--border);background-color:", ";transition:border-color var(--transition),background-color var(--transition);}&[aria-checked]::after{border-color:", ";background-color:", ";}&.k-Button--copper::after{border-color:", ";background-color:", ";}&:disabled::after{border-color:", ";background-color:", ";}}&.k-Button--micro,&.k-Button--tiny,&.k-Button--small{--CheckableButton-dimension:", ";--CheckableButton-checkMargin:", ";}&.k-Button--regular,&.k-Button--medium{--CheckableButton-dimension:", ";--CheckableButton-checkMargin:", ";}&.k-Button--big,&.k-Button--large,&.k-Button--huge,&.k-Button--giant{--CheckableButton-dimension:", ";--CheckableButton-checkMargin:", ";}"], getCircleIcon(_colorsConfig.default.primary1), getCircleIcon(_colorsConfig.default.error), getCircleIcon(_colorsConfig.default.font3), (0, _typography.pxToRem)(20 / 2 + 1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(15), _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.error, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.line2, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(20));

var CheckableButton = function CheckableButton(_ref) {
  var checkPosition = _ref.checkPosition,
      isChecked = _ref.isChecked,
      className = _ref.className,
      children = _ref.children,
      error = _ref.error,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

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
    className: (0, _classnames.default)('k-CheckableButton', className, "k-CheckableButton--" + checkPosition)
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