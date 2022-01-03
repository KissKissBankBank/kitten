import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "style", "className", "bottomBorderRadiusValue", "withBottomBorderRadius", "markerElement", "gap"];
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ButtonItem } from './components/button-item';
import classNames from 'classnames';
var StyledList = styled.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-14838o0-0"
})(["list-style:none;margin:0;padding:0;&.k-List--hasBottomRadius .k-List__item:last-child .k-List__button{border-bottom-left-radius:var(--list-bottomRadiusValue,0);border-bottom-right-radius:var(--list-bottomRadiusValue,0);}.k-List__item{display:flex;gap:", ";align-items:center;&:not(:first-child){margin-bottom:var(--list-gap);}&:not(:last-child){margin-bottom:var(--list-gap);}}.k-List__marker{display:inline-flex;align-items:center;}", ""], pxToRem(10), function (_ref) {
  var styles = _ref.styles;
  return styles;
});
export var List = function List(_ref2) {
  var children = _ref2.children,
      style = _ref2.style,
      className = _ref2.className,
      bottomBorderRadiusValue = _ref2.bottomBorderRadiusValue,
      withBottomBorderRadius = _ref2.withBottomBorderRadius,
      markerElement = _ref2.markerElement,
      gap = _ref2.gap,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  var radiusValue = bottomBorderRadiusValue > 0 ? bottomBorderRadiusValue : withBottomBorderRadius;
  return /*#__PURE__*/React.createElement(StyledList, _extends({}, props, {
    className: classNames('k-List', className, {
      'k-List--hasBottomRadius': bottomBorderRadiusValue > 0 || withBottomBorderRadius
    }),
    style: _extends({
      '--list-gap': pxToRem(gap),
      '--list-bottomRadiusValue': pxToRem(radiusValue || 0)
    }, style)
  }), React.Children.map(children, function (child, index) {
    if (! /*#__PURE__*/React.isValidElement(child)) return null;
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: "k-List__item"
    }, markerElement && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      className: "k-List__marker"
    }, markerElement), child);
  }));
};
List.ButtonItem = ButtonItem;
List.defaultProps = {
  markerElement: null,
  bottomBorderRadiusValue: 0,
  gap: 0
};
List.propTypes = {
  markerElement: PropTypes.node,
  bottomBorderRadiusValue: PropTypes.number,
  gap: PropTypes.number,
  withBottomBorderRadius: deprecated(PropTypes.number, 'This prop is deprecated, please use `bottomBorderRadiusValue instead.')
};