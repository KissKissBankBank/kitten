"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledBadge = _styledComponents.default.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-1nhhmea-0"
})(["display:inline-flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:", ";background-color:", ";&.k-IconBadge--valid{background-color:", ";}&.k-IconBadge--disabled{background-color:", ";}&.k-IconBadge--big{min-width:", ";min-height:", ";border-radius:", ";.k-IconBadge__content{font-size:", ";}}&.k-IconBadge--huge{min-width:", ";min-height:", ";border-radius:", ";.k-IconBadge__content{font-size:", ";}}.k-IconBadge__content{flex-basis:", ";color:", ";text-align:center;font-weight:bold;font-size:", ";line-height:0;}svg{fill:", ";}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _colorsConfig.default.primary1, _colorsConfig.default.valid, _colorsConfig.default.line2, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(11), _colorsConfig.default.background1, (0, _typography.stepToRem)(-2), _colorsConfig.default.background1);

var IconBadge = function IconBadge(_ref) {
  var className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      valid = _ref.valid,
      big = _ref.big,
      huge = _ref.huge,
      size = _ref.size,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "disabled", "valid", "big", "huge", "size"]);
  return /*#__PURE__*/_react.default.createElement(StyledBadge, (0, _extends2.default)({
    className: (0, _classnames.default)('k-IconBadge', className, "k-IconBadge--".concat(size), {
      'k-IconBadge--disabled': disabled,
      'k-IconBadge--valid': valid,
      'k-IconBadge--big': big,
      'k-IconBadge--huge': huge
    })
  }, others), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-IconBadge__content"
  }, children));
};

exports.IconBadge = IconBadge;
IconBadge.defaultProps = {
  disabled: false,
  valid: false,
  size: 'normal'
};
IconBadge.propTypes = {
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  big: _propTypes.default.bool,
  huge: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['normal', 'big', 'huge'])
};