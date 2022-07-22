"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textareaAutoResize = require("../../../form/input/textarea-auto-resize");

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _button = require("../../../action/button");

var _TextInput$propTypes;

var _excluded = ["id", "valid", "error", "disabled", "name", "digits", "size", "center", "tag", "className", "style", "rounded", "darkBackground", "has", "buttonProps", "buttonIsInset", "icon", "iconPosition", "iconAccessibilityLabel", "aria-describedby", "value", "defaultValue", "onChange", "limit", "unit", "unitIsWord", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
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
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(value || defaultValue || ''),
      textValue = _useState[0];

  var _useState2 = (0, _react.useState)(textValue.length),
      length = _useState2[0],
      setLength = _useState2[1];

  var digitsClass = !!digits ? "k-TextInput-hasDigits k-TextInput-hasDigits_" + digits : null;
  var hasClass = !!has ? "k-TextInput--has" + has[0].toUpperCase() + has.slice(1) : null;
  var describedBy = has === 'icon' && iconAccessibilityLabel ? ariaDescribedBy + " " + id + "__iconLabel" : ariaDescribedBy;

  var InputComponent = function () {
    switch (tag) {
      case 'autoresize':
        return _textareaAutoResize.TextareaAutoResize;

      default:
        return tag;
    }
  }();

  var ButtonComponent = buttonIsInset ? 'button' : _button.Button;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledInputWrapper, (0, _extends2.default)({}, wrapperProps, {
    className: (0, _classnames.default)('k-TextInput__wrapper', "k-TextInput__wrapper--" + size, wrapperProps == null ? void 0 : wrapperProps.className, (_classNames = {
      'k-TextInput__isTextarea': ['textarea', 'autoresize'].includes(tag)
    }, _classNames["k-TextInput__wrapper--icon_" + iconPosition] = has === 'icon', _classNames['k-TextInput__wrapper--hasUnit'] = has === 'unit', _classNames['k-TextInput__wrapper--hasDigits'] = !!digits, _classNames['k-TextInput__wrapper--button_inset'] = !!buttonIsInset, _classNames))
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
    style: !!digits ? (0, _extends2.default)({
      '--input-content-width': digits
    }, style) : style,
    defaultValue: textValue,
    onChange: function onChange(e) {
      var _e$target, _e$target$value;

      setLength((e == null ? void 0 : (_e$target = e.target) == null ? void 0 : (_e$target$value = _e$target.value) == null ? void 0 : _e$target$value.length) || 0);

      _onChange(e);
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
TextInput.propTypes = (_TextInput$propTypes = {
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
  iconAccessibilityLabel: _propTypes.default.string
}, _TextInput$propTypes['aria-describedby'] = _propTypes.default.string, _TextInput$propTypes.onChange = _propTypes.default.func, _TextInput$propTypes.limit = _propTypes.default.number, _TextInput$propTypes.unit = _propTypes.default.node, _TextInput$propTypes.unitIsWord = _propTypes.default.bool, _TextInput$propTypes.wrapperProps = _propTypes.default.object, _TextInput$propTypes);
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