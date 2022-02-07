"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ModalFooterInput = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../../action/button");

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _textareaAutoResize = require("../../../form/input/textarea-auto-resize");

var _excluded = ["id", "defaultValue", "className", "placeholder", "disabled", "buttonContent", "onChange", "onSubmit"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InputWrapper = _styledComponents.default.div.withConfig({
  displayName: "modal-footer-input__InputWrapper",
  componentId: "sc-n8ch2j-0"
})(["position:relative;width:100%;border-top:var(--border);transition:border var(--transition);:hover{border-top:var(--border-hover);}.k-ModalFooterInput__input{position:relative;display:flex;align-items:center;width:100%;box-sizing:border-box;margin:0;padding:", " ", " ", " ", ";min-height:", ";border:none;", " font-size:", ";line-height:", ";appearance:none;resize:none;transition:font-size var(--transition);@media ", "{padding:", ";padding-right:", ";}:focus{font-size:", ";outline:var(--outline-input);outline-offset:var(--outline-offset-input);}&::placeholder,&:focus::placeholder{font-size:", ";color:var(--color-grey-600);}}.k-ModalFooterInput__button{position:absolute;display:flex;right:", ";bottom:", ";margin:0 !important;}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(50), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(18), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5));

var ModalFooterInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      defaultValue = _ref.defaultValue,
      className = _ref.className,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      buttonContent = _ref.buttonContent,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(defaultValue),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(e) {
    setValue(e.target.value.trim());
    onChange(e.target.value.trim());
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (value === '') return;
    if (event.key !== 'Enter') return;
    if (!event.metaKey && !event.ctrlKey) return;
    onSubmit(value);
  };

  var handleSubmit = function handleSubmit() {
    onSubmit(value);
  };

  return /*#__PURE__*/_react.default.createElement(InputWrapper, {
    className: (0, _classnames.default)('k-ModalFooterInput', className)
  }, /*#__PURE__*/_react.default.createElement(_textareaAutoResize.TextareaAutoResize, {
    ref: ref || null,
    id: id,
    placeholder: placeholder,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    minRows: 1,
    maxRows: 5,
    "aria-label": props['aria-label'],
    className: "k-ModalFooterInput__input",
    defaultValue: defaultValue
  }), /*#__PURE__*/_react.default.createElement(_button.Button, {
    type: "button",
    modifier: "beryllium",
    fit: "icon",
    size: "tiny",
    disabled: disabled || value.length < 1,
    className: "k-ModalFooterInput__button",
    onClick: handleSubmit
  }, buttonContent));
});

exports.ModalFooterInput = ModalFooterInput;
ModalFooterInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  'aria-label': _propTypes.default.string.isRequired,
  defaultValue: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  buttonContent: _propTypes.default.node,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func
};
ModalFooterInput.defaultProps = {
  defaultValue: '',
  placeholder: '',
  disabled: false,
  buttonContent: 'Send',
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
};