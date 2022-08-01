import _extends from "@babel/runtime/helpers/extends";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from '../../../action/button';
import { TextareaAutoResize } from '../textarea-auto-resize';
import { StyledInputWrapper } from './styles';
export const TextInput = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    id,
    valid,
    error,
    disabled,
    name,
    digits,
    size,
    center,
    tag,
    className,
    style,
    rounded,
    darkBackground,
    has,
    buttonProps,
    buttonIsInset,
    icon,
    iconPosition,
    iconAccessibilityLabel,
    ['aria-describedby']: ariaDescribedBy,
    value,
    defaultValue,
    onChange,
    limit,
    unit,
    unitIsWord,
    wrapperProps,
    ...others
  } = _ref;
  const [length, setLength] = useState((value || defaultValue || '').length);
  const digitsClass = !!digits ? "k-TextInput-hasDigits k-TextInput-hasDigits_" + digits : null;
  const hasClass = !!has ? "k-TextInput--has" + has[0].toUpperCase() + has.slice(1) : null;
  const describedBy = has === 'icon' && iconAccessibilityLabel ? ariaDescribedBy + " " + id + "__iconLabel" : ariaDescribedBy;

  const InputComponent = (() => {
    switch (tag) {
      case 'autoresize':
        return TextareaAutoResize;

      default:
        return tag;
    }
  })();

  const ButtonComponent = buttonIsInset ? 'button' : Button;
  return /*#__PURE__*/React.createElement(StyledInputWrapper, _extends({}, wrapperProps, {
    className: classNames('k-TextInput__wrapper', "k-TextInput__wrapper--" + size, wrapperProps == null ? void 0 : wrapperProps.className, {
      'k-TextInput__isTextarea': ['textarea', 'autoresize'].includes(tag),
      ["k-TextInput__wrapper--icon_" + iconPosition]: has === 'icon',
      'k-TextInput__wrapper--hasUnit': has === 'unit',
      'k-TextInput__wrapper--hasDigits': !!digits,
      'k-TextInput__wrapper--button_inset': !!buttonIsInset
    })
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
    style: !!digits ? {
      '--input-content-width': digits,
      ...style
    } : style
  }, defaultValue && {
    defaultValue
  }, value && {
    value
  }, {
    onChange: e => {
      var _e$target, _e$target$value;

      setLength((e == null ? void 0 : (_e$target = e.target) == null ? void 0 : (_e$target$value = _e$target.value) == null ? void 0 : _e$target$value.length) || 0);
      onChange(e);
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
TextInput.propTypes = {
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
  iconAccessibilityLabel: PropTypes.string,
  ['aria-describedby']: PropTypes.string,
  onChange: PropTypes.func,
  limit: PropTypes.number,
  unit: PropTypes.node,
  unitIsWord: PropTypes.bool,
  wrapperProps: PropTypes.object
};
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
  onChange: () => {},
  limit: 80,
  unit: 'ƒ',
  unitIsWord: false,
  wrapperProps: {}
};