"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _button = require("../../../action/button");

var _textareaAutoResize = require("../textarea-auto-resize");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TextInput = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
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
  const [length, setLength] = (0, _react.useState)((value || defaultValue || '').length);
  const digitsClass = !!digits ? "k-TextInput-hasDigits k-TextInput-hasDigits_" + digits : null;
  const hasClass = !!has ? "k-TextInput--has" + has[0].toUpperCase() + has.slice(1) : null;
  const describedBy = has === 'icon' && iconAccessibilityLabel ? ariaDescribedBy + " " + id + "__iconLabel" : ariaDescribedBy;

  const InputComponent = (() => {
    switch (tag) {
      case 'autoresize':
        return _textareaAutoResize.TextareaAutoResize;

      default:
        return tag;
    }
  })();

  const ButtonComponent = buttonIsInset ? 'button' : _button.Button;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledInputWrapper, (0, _extends2.default)({}, wrapperProps, {
    className: (0, _classnames.default)('k-TextInput__wrapper', "k-TextInput__wrapper--" + size, wrapperProps == null ? void 0 : wrapperProps.className, {
      'k-TextInput__isTextarea': ['textarea', 'autoresize'].includes(tag),
      ["k-TextInput__wrapper--icon_" + iconPosition]: has === 'icon',
      'k-TextInput__wrapper--hasUnit': has === 'unit',
      'k-TextInput__wrapper--hasDigits': !!digits,
      'k-TextInput__wrapper--button_inset': !!buttonIsInset
    })
  }), has === 'icon' && iconAccessibilityLabel && /*#__PURE__*/_react.default.createElement("span", {
    id: id + "__iconLabel",
    className: "k-u-a11y-visuallyHidden"
  }, iconAccessibilityLabel), /*#__PURE__*/_react.default.createElement(InputComponent, (0, _extends2.default)({
    ref: ref || null,
    id: id,
    "aria-describedby": describedBy,
    disabled: disabled,
    name: name,
    className: (0, _classnames.default)('k-TextInput', className, digitsClass, hasClass, {
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
  }, others)), ['textarea', 'autoresize'].includes(tag) && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-TextInput__textareaGradient"
  }), has === 'button' && /*#__PURE__*/_react.default.createElement(ButtonComponent, (0, _extends2.default)({
    type: "button",
    rounded: rounded
  }, buttonProps, {
    className: (0, _classnames.default)('k-TextInput__button', buttonProps == null ? void 0 : buttonProps.className),
    disabled: disabled || (buttonProps == null ? void 0 : buttonProps.disabled),
    size: size
  })), has === 'icon' && /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true",
    className: (0, _classnames.default)('k-TextInput__icon', {
      'k-TextInput__icon--disabled': disabled
    })
  }, icon), has === 'limit' && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-TextInput__limitNumber', {
      'k-TextInput__limitNumber--disabled': disabled,
      'k-TextInput__limitNumber--error': length > limit
    })
  }, limit - length), has === 'unit' && /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-TextInput__unit', {
      'k-TextInput__unit--unitIsWord': unitIsWord
    })
  }, unit));
});

exports.TextInput = TextInput;
TextInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  tag: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string, _propTypes.default.oneOf(['input', 'textarea', 'autoresize'])]),
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge', 'giant']),
  center: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.string,
  digits: _propTypes.default.number,
  rounded: _propTypes.default.bool,
  darkBackground: _propTypes.default.bool,
  has: _propTypes.default.oneOf([null, 'button', 'icon', 'limit', 'unit']),
  buttonProps: _propTypes.default.object,
  buttonIsInset: _propTypes.default.bool,
  icon: _propTypes.default.node,
  iconPosition: _propTypes.default.oneOf(['left', 'right']),
  iconAccessibilityLabel: _propTypes.default.string,
  ['aria-describedby']: _propTypes.default.string,
  onChange: _propTypes.default.func,
  limit: _propTypes.default.number,
  unit: _propTypes.default.node,
  unitIsWord: _propTypes.default.bool,
  wrapperProps: _propTypes.default.object
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