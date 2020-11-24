"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalStepper = exports.LINK_CLASSNAME = exports.STEP_CLASSNAME = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _step = require("./components/step");

var _title = require("./components/title");

var _link = require("./components/link");

var _list = require("./components/list");

var _classnames = _interopRequireDefault(require("classnames"));

var STEP_CLASSNAME = 'VerticalStepper__step';
exports.STEP_CLASSNAME = STEP_CLASSNAME;
var LINK_CLASSNAME = 'VerticalStepper__link';
exports.LINK_CLASSNAME = LINK_CLASSNAME;

var VerticalStepper = function VerticalStepper(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "variant"]);
  return /*#__PURE__*/_react.default.createElement(StyledNav, {
    variant: variant
  }, /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    role: "tablist",
    className: (0, _classnames.default)('k-Steppers--VerticalStepper', "k-Steppers--VerticalStepper__".concat(variant))
  }, props), children));
};

exports.VerticalStepper = VerticalStepper;

var StyledNav = _styledComponents.default.nav.withConfig({
  displayName: "vertical-stepper__StyledNav",
  componentId: "sc-1uso67w-0"
})(["position:relative;padding:1px 0;.k-Steppers--VerticalStepper{margin:0;padding:0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;content:'';border-left:", " dashed ", ";}&.k-Steppers--VerticalStepper__orion{:before{border-left:none;}li:not(:last-of-type){position:relative;&::after{content:'';position:absolute;left:", ";top:", ";background-color:", ";width:", ";height:100%;z-index:-1;}}li.k-Steppers--VerticalStepper__item--hasActiveLine:not(:last-of-type)::after{background-color:", ";}}}"], (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(19), (0, _typography.pxToRem)(30), _colorsConfig.default.line1, (0, _typography.pxToRem)(3), _colorsConfig.default.primary1);

VerticalStepper.Step = _step.Step;
VerticalStepper.Title = _title.Title;
VerticalStepper.List = _list.List;
VerticalStepper.Link = _link.Link;
VerticalStepper.propTypes = {
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};
VerticalStepper.defaultProps = {
  variant: 'andromeda'
};