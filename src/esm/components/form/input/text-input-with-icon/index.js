import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["disabled", "icon", "iconPosition", "accessibilityLabel", "id"];
import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import { TextInput } from '../../../form/input/text-input';
import PropTypes from 'prop-types';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
import classNames from 'classnames';
var StyledTextInputWithIcon = styled.div.withConfig({
  displayName: "text-input-with-icon__StyledTextInputWithIcon",
  componentId: "sc-19uicxb-0"
})(["position:relative;.k-Form-TextInputWithIcon__icon{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;top:0;width:", ";height:100%;&.k-Form-TextInputWithIcon__icon--disabled > svg:not(.k-ColorSvg){&[stroke]:not([stroke='none']),& [stroke]:not([stroke='none']){stroke:var(--color-grey-500);}&[fill]:not([fill='none']),& [fill]:not([fill='none']){fill:var(--color-grey-500);}}}&.k-Form-TextInputWithIcon--icon_left{.k-Form-TextInputWithIcon__input{padding-left:", ";}.k-Form-TextInputWithIcon__icon{left:0;}}&.k-Form-TextInputWithIcon--icon_right{.k-Form-TextInputWithIcon__input{padding-right:", ";}.k-Form-TextInputWithIcon__icon{right:0;}}"], pxToRem(50), pxToRem(50), pxToRem(50));
export var TextInputWithIcon = function TextInputWithIcon(_ref) {
  var disabled = _ref.disabled,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      accessibilityLabel = _ref.accessibilityLabel,
      id = _ref.id,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledTextInputWithIcon, {
    className: classNames('k-Form-TextInputWithIcon', "k-Form-TextInputWithIcon--icon_" + iconPosition)
  }, accessibilityLabel && /*#__PURE__*/React.createElement(VisuallyHidden, {
    id: id + "__iconLabel"
  }, accessibilityLabel), /*#__PURE__*/React.createElement(TextInput, _extends({
    id: id,
    "aria-labelledby": accessibilityLabel ? id + "__iconLabel" : null
  }, others, {
    className: classNames('k-Form-TextInputWithIcon__input', others.className),
    disabled: disabled
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: classNames('k-Form-TextInputWithIcon__icon', {
      'k-Form-TextInputWithIcon__icon--disabled': disabled
    })
  }, icon));
};
TextInputWithIcon.propTypes = {
  disabled: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  icon: PropTypes.node.isRequired,
  iconPosition: PropTypes.oneOf(['left', 'right'])
};
TextInputWithIcon.defaultProps = {
  accessibilityLabel: '',
  disabled: false,
  iconPosition: 'left'
};