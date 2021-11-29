import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import deprecated from 'prop-types-extra/lib/deprecated';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
var StyledBadge = styled.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-1nhhmea-0"
})(["box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:var(--border-radius-rounded);background-color:var(--iconBadge-background-color,var(--color-primary-500));border-color:var(--color-primary-300);&.k-IconBadge--empty{border-color:var(--color-grey-300);background-color:var(--color-grey-000);}&.k-IconBadge--success,&.k-IconBadge--valid{background-color:var(--color-success-500);border-color:var(--color-success-300);}&.k-IconBadge--disabled{background-color:var(--color-grey-600);border-color:var(--color-grey-300);}&.k-IconBadge--danger{background-color:var(--color-danger-500);border-color:var(--color-danger-300);}&.k-IconBadge--warning{background-color:var(--color-warning-500);border-color:var(--color-warning-300);}&.k-IconBadge--tiny{min-width:", ";min-height:", ";.k-IconBadge__content{font-size:", ";&,& svg{max-width:", ";}}}&.k-IconBadge--big{min-width:", ";min-height:", ";.k-IconBadge__content{font-size:", ";}}&.k-IconBadge--huge{min-width:", ";min-height:", ";.k-IconBadge__content{font-size:", ";}}.k-IconBadge__content{flex-basis:", ";color:var(--color-grey-000);text-align:center;font-weight:bold;font-size:", ";line-height:0;}svg{fill:var(--color-grey-000);}&.k-IconBadge--hasBorder{border-width:", ";border-style:solid;}&.k-IconBadge--hasBorderStyles{border-width:var(--iconBadge-border-width,0);border-color:var(--iconBadge-border-color);border-style:var(--iconBadge-border-style);}"], pxToRem(30), pxToRem(30), pxToRem(20), pxToRem(20), stepToRem(-1), pxToRem(14), pxToRem(40), pxToRem(40), stepToRem(-1), pxToRem(50), pxToRem(50), stepToRem(-1), pxToRem(11), stepToRem(-2), pxToRem(2));
export var IconBadge = function IconBadge(_ref) {
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
      status = _ref.status,
      hasBorder = _ref.hasBorder,
      others = _objectWithoutProperties(_ref, ["className", "children", "disabled", "valid", "empty", "big", "huge", "size", "border", "backgroundColor", "status", "hasBorder"]);

  return /*#__PURE__*/React.createElement(StyledBadge, _extends({
    className: classNames('k-IconBadge', className, "k-IconBadge--".concat(size), "k-IconBadge--".concat(status), {
      'k-IconBadge--disabled': disabled && status === 'info',
      // if default prop
      'k-IconBadge--valid': valid && status === 'info',
      // if default prop
      'k-IconBadge--empty': empty,
      'k-IconBadge--big': big,
      'k-IconBadge--huge': huge,
      'k-IconBadge--hasBorderStyles': border.length > 0,
      'k-IconBadge--hasBorder': hasBorder
    }),
    style: {
      '--iconBadge-background-color': backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : null,
      '--iconBadge-border-width': 'width' in border ? pxToRem(border.width) : null,
      '--iconBadge-border-style': (_border$style = border === null || border === void 0 ? void 0 : border.style) !== null && _border$style !== void 0 ? _border$style : null,
      '--iconBadge-border-color': (_border$color = border === null || border === void 0 ? void 0 : border.color) !== null && _border$color !== void 0 ? _border$color : null
    }
  }, others), /*#__PURE__*/React.createElement("span", {
    className: "k-IconBadge__content"
  }, children));
};
IconBadge.defaultProps = {
  empty: false,
  size: 'normal',
  border: {},
  backgroundColor: null,
  status: 'info',
  hasBorder: false
};
IconBadge.propTypes = {
  disabled: deprecated(PropTypes.bool, 'Use status="disabled" instead'),
  valid: deprecated(PropTypes.bool, 'Use status="success" instead'),
  empty: PropTypes.bool,
  big: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  huge: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  size: PropTypes.oneOf(['tiny', 'normal', 'big', 'huge']),
  backgroundColor: PropTypes.string,
  border: PropTypes.shape({
    width: PropTypes.number,
    color: PropTypes.node,
    style: PropTypes.string
  }),
  status: PropTypes.oneOf(['info', 'success', 'danger', 'warning', 'disabled']),
  hasBorder: PropTypes.bool
};