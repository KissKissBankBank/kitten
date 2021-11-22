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

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledBadge = _styledComponents.default.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-1nhhmea-0"
})(["box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:", ";background-color:var(--background-color,", ");&.k-IconBadge--empty{border:var(--border);background-color:", ";}&.k-IconBadge--valid{background-color:", ";}&.k-IconBadge--disabled{background-color:", ";}&.k-IconBadge--tiny{min-width:", ";min-height:", ";border-radius:", ";.k-IconBadge__content{font-size:", ";&,& svg{max-width:", ";}}}&.k-IconBadge--big{min-width:", ";min-height:", ";border-radius:", ";.k-IconBadge__content{font-size:", ";}}&.k-IconBadge--huge{min-width:", ";min-height:", ";border-radius:", ";.k-IconBadge__content{font-size:", ";}}.k-IconBadge__content{flex-basis:", ";color:", ";text-align:center;font-weight:bold;font-size:", ";line-height:0;}svg{fill:", ";}&.k-IconBadge--hasBorderStyles{border-width:var(--border-width,0);border-color:var(--border-color);border-style:var(--border-style);}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.valid, _colorsConfig.default.line2, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(11), _colorsConfig.default.background1, (0, _typography.stepToRem)(-2), _colorsConfig.default.background1);

var IconBadge = function IconBadge(_ref) {
  var _border$style, _border$color;

  var className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      valid = _ref.valid,
      empty = _ref.empty,
      big = _ref.big,
      huge = _ref.huge,
      size = _ref.size,
      border = _ref.border,
      backgroundColor = _ref.backgroundColor,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "disabled", "valid", "empty", "big", "huge", "size", "border", "backgroundColor"]);
  return /*#__PURE__*/_react.default.createElement(StyledBadge, (0, _extends2.default)({
    className: (0, _classnames.default)('k-IconBadge', className, "k-IconBadge--".concat(size), {
      'k-IconBadge--disabled': disabled,
      'k-IconBadge--valid': valid,
      'k-IconBadge--empty': empty,
      'k-IconBadge--big': big,
      'k-IconBadge--huge': huge
    }, 'k-IconBadge--hasBorderStyles'),
    style: {
      '--background-color': backgroundColor,
      '--border-width': 'width' in border ? (0, _typography.pxToRem)(border.width) : null,
      '--border-style': (_border$style = border === null || border === void 0 ? void 0 : border.style) !== null && _border$style !== void 0 ? _border$style : null,
      '--border-color': (_border$color = border === null || border === void 0 ? void 0 : border.color) !== null && _border$color !== void 0 ? _border$color : null
    }
  }, others), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-IconBadge__content"
  }, children));
};

exports.IconBadge = IconBadge;
IconBadge.defaultProps = {
  disabled: false,
  valid: false,
  empty: false,
  size: 'normal',
  border: {},
  backgroundColor: _colorsConfig.default.primary1
};
IconBadge.propTypes = {
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  empty: _propTypes.default.bool,
  big: (0, _deprecated.default)(_propTypes.default.bool, 'Use `size` prop instead.'),
  huge: (0, _deprecated.default)(_propTypes.default.bool, 'Use `size` prop instead.'),
  size: _propTypes.default.oneOf(['tiny', 'normal', 'big', 'huge']),
  backgroundColor: _propTypes.default.node,
  border: _propTypes.default.shape({
    width: _propTypes.default.number,
    color: _propTypes.default.node,
    style: _propTypes.default.string
  })
};