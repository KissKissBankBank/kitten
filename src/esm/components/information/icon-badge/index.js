import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "empty", "size", "border", "backgroundColor", "status", "hasBorder"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledBadge = styled.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-r56wro-0"
})(["box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:var(--border-radius-rounded);background-color:var(--iconBadge-background-color,var(--color-primary-500));border-color:var(--color-primary-300);&.k-IconBadge--empty{border-color:var(--color-grey-300);background-color:var(--color-grey-000);}&.k-IconBadge--success,&.k-IconBadge--valid{background-color:var(--color-success-500);border-color:var(--color-success-300);}&.k-IconBadge--disabled{background-color:var(--color-grey-600);border-color:var(--color-grey-300);}&.k-IconBadge--danger{background-color:var(--color-danger-500);border-color:var(--color-danger-300);}&.k-IconBadge--warning{background-color:var(--color-warning-500);border-color:var(--color-warning-300);}&.k-IconBadge--pending{background-color:var(--color-grey-900);border-color:var(--color-grey-700);}&.k-IconBadge--micro{min-width:", ";min-height:", ";&,& svg{max-width:", ";max-height:", ";}}&.k-IconBadge--small{min-width:", ";min-height:", ";&,& svg{max-width:", ";}}&.k-IconBadge--large{min-width:", ";min-height:", ";}&.k-IconBadge--huge{min-width:", ";min-height:", ";}svg{flex:0 0 auto;fill:var(--color-grey-000);}&.k-IconBadge--hasBorder{border-width:", ";border-style:solid;box-sizing:content-box;}&.k-IconBadge--hasBorderStyles{border-width:var(--iconBadge-border-width,0);border-color:var(--iconBadge-border-color);border-style:var(--iconBadge-border-style);}"], pxToRem(30), pxToRem(30), pxToRem(16), pxToRem(16), pxToRem(12), pxToRem(12), pxToRem(20), pxToRem(20), pxToRem(14), pxToRem(40), pxToRem(40), pxToRem(50), pxToRem(50), pxToRem(2));
export var IconBadge = function IconBadge(_ref) {
  var _border$style, _border$color;

  var className = _ref.className,
      children = _ref.children,
      empty = _ref.empty,
      size = _ref.size,
      border = _ref.border,
      backgroundColor = _ref.backgroundColor,
      status = _ref.status,
      hasBorder = _ref.hasBorder,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledBadge, _extends({
    className: classNames('k-IconBadge', className, "k-IconBadge--" + size, "k-IconBadge--" + status, {
      'k-IconBadge--empty': empty,
      'k-IconBadge--hasBorderStyles': border.length > 0,
      'k-IconBadge--hasBorder': hasBorder
    }),
    style: {
      '--iconBadge-background-color': backgroundColor != null ? backgroundColor : null,
      '--iconBadge-border-width': 'width' in border ? pxToRem(border.width) : null,
      '--iconBadge-border-style': (_border$style = border == null ? void 0 : border.style) != null ? _border$style : null,
      '--iconBadge-border-color': (_border$color = border == null ? void 0 : border.color) != null ? _border$color : null
    }
  }, others), children);
};
IconBadge.defaultProps = {
  empty: false,
  size: 'medium',
  border: {},
  backgroundColor: null,
  status: 'info',
  hasBorder: false
};
IconBadge.propTypes = {
  empty: PropTypes.bool,
  size: PropTypes.oneOf(['micro', 'small', 'medium', 'large', 'huge']),
  backgroundColor: PropTypes.string,
  border: PropTypes.shape({
    width: PropTypes.number,
    color: PropTypes.node,
    style: PropTypes.string
  }),
  status: PropTypes.oneOf(['info', 'success', 'danger', 'warning', 'disabled', 'pending']),
  hasBorder: PropTypes.bool
};