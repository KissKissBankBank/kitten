import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

var _TextInput$propTypes;

var _excluded = ["id", "valid", "error", "disabled", "name", "digits", "size", "center", "tag", "className", "style", "rounded", "darkBackground", "has", "buttonProps", "buttonIsInset", "icon", "iconPosition", "iconAccessibilityLabel", "aria-describedby", "value", "defaultValue", "onChange", "limit", "unit", "unitIsWord", "wrapperProps"];
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextareaAutoResize } from '../../../form/input/textarea-auto-resize';
import classNames from 'classnames';
import { StyledInputWrapper } from './styles';
import { Button } from '../../../action/button';
export var TextInput = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _classNames;

  var id = _ref.id,
      valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      name = _ref.name,
      digits = _ref.digits,
      size = _ref.size,
      center = _ref.center,
      tag = _ref.tag,
      className = _ref.className,
      style = _ref.style,
      rounded = _ref.rounded,
      darkBackground = _ref.darkBackground,
      has = _ref.has,
      buttonProps = _ref.buttonProps,
      buttonIsInset = _ref.buttonIsInset,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      iconAccessibilityLabel = _ref.iconAccessibilityLabel,
      ariaDescribedBy = _ref['aria-describedby'],
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      _onChange = _ref.onChange,
      limit = _ref.limit,
      unit = _ref.unit,
      unitIsWord = _ref.unitIsWord,
      wrapperProps = _ref.wrapperProps,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(value || defaultValue || ''),
      textValue = _useState[0];

  var _useState2 = useState(textValue.length),
      length = _useState2[0],
      setLength = _useState2[1];

  var digitsClass = !!digits ? "k-TextInput-hasDigits k-TextInput-hasDigits_" + digits : null;
  var hasClass = !!has ? "k-TextInput--has" + has[0].toUpperCase() + has.slice(1) : null;
  var describedBy = has === 'icon' && iconAccessibilityLabel ? ariaDescribedBy + " " + id + "__iconLabel" : ariaDescribedBy;

  var InputComponent = function () {
    switch (tag) {
      case 'autoresize':
        return TextareaAutoResize;

      default:
        return tag;
    }
  }();

  var ButtonComponent = buttonIsInset ? 'button' : Button;
  return /*#__PURE__*/React.createElement(StyledInputWrapper, _extends({}, wrapperProps, {
    className: classNames('k-TextInput__wrapper', "k-TextInput__wrapper--" + size, wrapperProps == null ? void 0 : wrapperProps.className, (_classNames = {
      'k-TextInput__isTextarea': ['textarea', 'autoresize'].includes(tag)
    }, _classNames["k-TextInput__wrapper--icon_" + iconPosition] = has === 'icon', _classNames['k-TextInput__wrapper--hasUnit'] = has === 'unit', _classNames['k-TextInput__wrapper--hasDigits'] = !!digits, _classNames['k-TextInput__wrapper--button_inset'] = !!buttonIsInset, _classNames))
  }), has === 'icon' && iconAccessibilityLabel && /*#__PURE__*/React.createElement("span", {
    id: id + "__iconLabel",
    className: "k-u-a11y-visuallyHidden"
  }, iconAccessibilityLabel), /*#__PURE__*/React.createElement(InputComponent, _extends({
    ref: ref || null,
    id: id,
    "aria-describedby": describedBy,
    disabled: disabled,
    name: name,
    className: classNames('k-TextInput', className, digitsClass, hasClass, {
      'k-TextInput--valid': valid,
      'k-TextInput--error': error,
      'k-TextInput--disabled': disabled,
      'k-TextInput--alignCenter': center,
      'k-TextInput--rounded': rounded,
      'k-TextInput--darkBackground': darkBackground
    }),
    style: !!digits ? _extends({
      '--input-content-width': digits
    }, style) : style,
    defaultValue: textValue,
    onChange: function onChange(e) {
      var _e$target, _e$target$value;

      setLength((e == null ? void 0 : (_e$target = e.target) == null ? void 0 : (_e$target$value = _e$target.value) == null ? void 0 : _e$target$value.length) || 0);

      _onChange(e);
    }
  }, others)), ['textarea', 'autoresize'].includes(tag) && /*#__PURE__*/React.createElement("div", {
    className: "k-TextInput__textareaGradient"
  }), has === 'button' && /*#__PURE__*/React.createElement(ButtonComponent, _extends({
    type: "button",
    rounded: rounded
  }, buttonProps, {
    className: classNames('k-TextInput__button', buttonProps == null ? void 0 : buttonProps.className),
    disabled: disabled || (buttonProps == null ? void 0 : buttonProps.disabled),
    size: size
  })), has === 'icon' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: classNames('k-TextInput__icon', {
      'k-TextInput__icon--disabled': disabled
    })
  }, icon), has === 'limit' && /*#__PURE__*/React.createElement("div", {
    className: classNames('k-TextInput__limitNumber', {
      'k-TextInput__limitNumber--disabled': disabled,
      'k-TextInput__limitNumber--error': length > limit
    })
  }, limit - length), has === 'unit' && /*#__PURE__*/React.createElement("span", {
    className: classNames('k-TextInput__unit', {
      'k-TextInput__unit--unitIsWord': unitIsWord
    })
  }, unit));
});
TextInput.propTypes = (_TextInput$propTypes = {
  id: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.oneOf(['input', 'textarea', 'autoresize'])]),
  valid: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant']),
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  digits: PropTypes.number,
  rounded: PropTypes.bool,
  darkBackground: PropTypes.bool,
  has: PropTypes.oneOf([null, 'button', 'icon', 'limit', 'unit']),
  buttonProps: PropTypes.object,
  buttonIsInset: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconAccessibilityLabel: PropTypes.string
}, _TextInput$propTypes['aria-describedby'] = PropTypes.string, _TextInput$propTypes.onChange = PropTypes.func, _TextInput$propTypes.limit = PropTypes.number, _TextInput$propTypes.unit = PropTypes.node, _TextInput$propTypes.unitIsWord = PropTypes.bool, _TextInput$propTypes.wrapperProps = PropTypes.object, _TextInput$propTypes);
TextInput.defaultProps = {
  tag: 'input',
  valid: false,
  error: false,
  size: 'medium',
  center: false,
  disabled: false,
  name: 'text',
  digits: null,
  rounded: false,
  darkBackground: false,
  has: null,
  buttonProps: {},
  buttonIsInset: false,
  icon: null,
  iconPosition: 'left',
  onChange: function onChange() {},
  limit: 80,
  unit: 'ƒ',
  unitIsWord: false,
  wrapperProps: {}
};