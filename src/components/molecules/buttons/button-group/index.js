"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = require("../../../../components/molecules/buttons/button");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var borderRadius = (0, _typography.pxToRem)(4);
var borderSize = (0, _typography.pxToRem)(2);

var StyledButtonGroup = _styledComponents.default.div.withConfig({
  displayName: "button-group__StyledButtonGroup",
  componentId: "gkwk7e-0"
})(["display:flex;justify-content:center;.k-ButtonGroup__button{position:relative;z-index:0;min-width:auto;width:auto;&:not(:last-child){margin-right:-", ";}&:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";}&:last-child{border-top-right-radius:", ";border-bottom-right-radius:", ";}&.k-ButtonGroup__button--isActive{border-radius:", ";z-index:1;}&:active,&:hover,&:focus{border-radius:", ";z-index:2;}}&.k-ButtonGroup--orion{.k-ButtonGroup__button{border-radius:", ";color:", ";border:var(--border);background-color:", ";&:hover,&:focus,&:active{color:", ";border:var(--border-hover);background-color:", ";}&.k-ButtonGroup__button--isActive{color:", ";border:var(--border-active);background-color:", ";}&:first-child{border-top-right-radius:0;border-bottom-right-radius:0;}&:last-child{border-top-left-radius:0;border-bottom-left-radius:0;}}}"], borderSize, borderRadius, borderRadius, borderRadius, borderRadius, borderRadius, borderRadius, (0, _typography.pxToRem)(4), _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.primary5);

var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "variant"]);
  return /*#__PURE__*/_react.default.createElement(StyledButtonGroup, (0, _extends2.default)({
    role: "group"
  }, props, {
    className: (0, _classnames.default)('k-ButtonGroup', className, "k-ButtonGroup--".concat(variant))
  }));
};

exports.ButtonGroup = ButtonGroup;

var ButtonGroupButton = function ButtonGroupButton(_ref2) {
  var className = _ref2.className,
      active = _ref2.active,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "active"]);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ButtonGroup__button', className, {
      'k-ButtonGroup__button--isActive': active
    })
  }));
};

ButtonGroup.Button = ButtonGroupButton;
ButtonGroup.propTypes = {
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};
ButtonGroup.defaultProps = {
  variant: 'orion'
};