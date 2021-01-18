import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ButtonItem } from './components/button-item';
import classNames from 'classnames';
var StyledList = styled.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1ns0hml-0"
})(["list-style:none;margin:0;padding:0;", " ", ""], function (_ref) {
  var radiusValue = _ref.radiusValue;
  return radiusValue > 0 && css(["& li:last-child .k-List__button{border-bottom-left-radius:", ";border-bottom-right-radius:", ";}"], pxToRem(radiusValue), pxToRem(radiusValue));
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});
export var List = function List(_ref3) {
  var children = _ref3.children,
      style = _ref3.style,
      className = _ref3.className,
      bottomBorderRadiusValue = _ref3.bottomBorderRadiusValue,
      withBottomBorderRadius = _ref3.withBottomBorderRadius,
      props = _objectWithoutProperties(_ref3, ["children", "style", "className", "bottomBorderRadiusValue", "withBottomBorderRadius"]);

  var radiusValue = bottomBorderRadiusValue > 0 ? bottomBorderRadiusValue : withBottomBorderRadius;
  return /*#__PURE__*/React.createElement(StyledList, _extends({}, props, {
    className: classNames('k-List', className),
    styles: style,
    radiusValue: radiusValue
  }), React.Children.map(children, function (child) {
    if (!React.isValidElement(child)) return null;
    return /*#__PURE__*/React.createElement("li", null, child);
  }));
};
List.ButtonItem = ButtonItem;
List.defaultProps = {
  bottomBorderRadiusValue: 0
};
List.propTypes = {
  bottomBorderRadiusValue: PropTypes.number,
  withBottomBorderRadius: deprecated(PropTypes.number, 'This prop is deprecated, please use `bottomBorderRadiusValue instead.')
};