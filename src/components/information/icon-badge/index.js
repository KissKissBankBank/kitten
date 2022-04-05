"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IconBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _deprecated = require("../../../helpers/utils/deprecated");

var _excluded = ["className", "children", "empty", "size", "border", "backgroundColor", "status", "hasBorder"];

var StyledBadge = _styledComponents.default.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-r56wro-0"
})(["box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:var(--border-radius-rounded);background-color:var(--iconBadge-background-color,var(--color-primary-500));border-color:var(--color-primary-300);&.k-IconBadge--empty{border-color:var(--color-grey-300);background-color:var(--color-grey-000);}&.k-IconBadge--success,&.k-IconBadge--valid{background-color:var(--color-success-500);border-color:var(--color-success-300);}&.k-IconBadge--disabled{background-color:var(--color-grey-600);border-color:var(--color-grey-300);}&.k-IconBadge--danger{background-color:var(--color-danger-500);border-color:var(--color-danger-300);}&.k-IconBadge--warning{background-color:var(--color-warning-500);border-color:var(--color-warning-300);}&.k-IconBadge--pending{background-color:var(--color-grey-900);border-color:var(--color-grey-700);}&.k-IconBadge--micro{min-width:", ";min-height:", ";&,& svg{max-width:", ";max-height:", ";}}&.k-IconBadge--tiny,&.k-IconBadge--small{min-width:", ";min-height:", ";&,& svg{max-width:", ";}}&.k-IconBadge--big,&.k-IconBadge--large{min-width:", ";min-height:", ";}&.k-IconBadge--huge{min-width:", ";min-height:", ";}svg{flex:0 0 auto;fill:var(--color-grey-000);}&.k-IconBadge--hasBorder{border-width:", ";border-style:solid;}&.k-IconBadge--hasBorderStyles{border-width:var(--iconBadge-border-width,0);border-color:var(--iconBadge-border-color);border-style:var(--iconBadge-border-style);}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2));

var IconBadge = function IconBadge(_ref) {
  var _border$style, _border$color;

  var className = _ref.className,
      children = _ref.children,
      empty = _ref.empty,
      size = _ref.size,
      border = _ref.border,
      backgroundColor = _ref.backgroundColor,
      status = _ref.status,
      hasBorder = _ref.hasBorder,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  (0, _deprecated.checkDeprecatedSizes)(size);
  return /*#__PURE__*/_react.default.createElement(StyledBadge, (0, _extends2.default)({
    className: (0, _classnames.default)('k-IconBadge', className, "k-IconBadge--" + size, "k-IconBadge--" + status, {
      'k-IconBadge--empty': empty,
      'k-IconBadge--hasBorderStyles': border.length > 0,
      'k-IconBadge--hasBorder': hasBorder
    }),
    style: {
      '--iconBadge-background-color': backgroundColor != null ? backgroundColor : null,
      '--iconBadge-border-width': 'width' in border ? (0, _typography.pxToRem)(border.width) : null,
      '--iconBadge-border-style': (_border$style = border == null ? void 0 : border.style) != null ? _border$style : null,
      '--iconBadge-border-color': (_border$color = border == null ? void 0 : border.color) != null ? _border$color : null
    }
  }, others), children);
};

exports.IconBadge = IconBadge;
IconBadge.defaultProps = {
  empty: false,
  size: 'medium',
  border: {},
  backgroundColor: null,
  status: 'info',
  hasBorder: false
};
IconBadge.propTypes = {
  empty: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['micro', 'small', 'medium', 'large', 'huge']),
  backgroundColor: _propTypes.default.string,
  border: _propTypes.default.shape({
    width: _propTypes.default.number,
    color: _propTypes.default.node,
    style: _propTypes.default.string
  }),
  status: _propTypes.default.oneOf(['info', 'success', 'danger', 'warning', 'disabled', 'pending']),
  hasBorder: _propTypes.default.bool
};