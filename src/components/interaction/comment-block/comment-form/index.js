"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CommentForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _button = require("../../../action/button");

var _text = require("../../../typography/text");

var _textareaAutoResize = require("../../../form/input/textarea-auto-resize");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CommentFormWrapper = _styledComponents.default.div.withConfig({
  displayName: "comment-form__CommentFormWrapper",
  componentId: "sc-18rkmct-0"
})(["--commentForm-arrow-size:", ";display:flex;gap:", ";.k-CommentForm__image{width:", ";flex:0 0 ", ";padding-top:", ";img{width:", ";height:", ";overflow:hidden;object-fit:cover;object-position:center center;border-radius:", ";}}.k-CommentForm__form{flex-grow:1;display:flex;flex-direction:column;gap:", ";margin-left:var(--commentForm-arrow-size);position:relative;}.k-CommentForm__textarea{", " background-color:var(--color-grey-000);font-size:", ";color:", ";padding:", ";border-radius:", ";border:var(--border);resize:vertical;line-height:", ";min-height:", ";max-height:", ";::placeholder{color:var(--color-grey-600);}:hover{border-color:var(--color-grey-500);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-500);}}:active{border-color:var(--color-grey-600);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-600);}}:focus{outline:var(--outline-input);outline-offset:var(--outline-offset-input);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-900);&::before{left:", ";}}}:disabled{cursor:not-allowed;color:var(--color-grey-900);border-color:var(--color-grey-500);background-color:var(--color-grey-300);::placeholder{color:var(--color-grey-600);}& + .k-CommentForm__arrow{border-right-color:var(--color-grey-500);&::before{border-right-color:var(--color-grey-300);}}}}.k-CommentForm__arrow{width:0;height:0;position:absolute;left:calc(-1 * var(--commentForm-arrow-size));top:calc(", " - var(--commentForm-arrow-size));border:var(--commentForm-arrow-size) solid transparent;border-left:0;border-right-color:var(--color-grey-400);z-index:1;&::before{content:'';position:absolute;left:", ";right:0;top:calc(-1 * var(--commentForm-arrow-size));width:0;height:0;border:var(--commentForm-arrow-size) solid transparent;border-left:0;border-right-color:var(--color-grey-000);z-index:2;}}.k-CommentForm__submit{display:inline-block;min-height:0;max-height:0;padding:0 ", ";height:var(--Button-dimension);align-self:flex-end;overflow:hidden;transition:max-height var(--transition),padding var(--transition);}.k-CommentForm__submit--is-visible{max-height:", ";padding:", " ", ";}.k-CommentForm__error{margin-top:", ";}"], (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(16), _colorsConfig.default.font1, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(50 - 30), (0, _typography.pxToRem)(20 * 5), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(50 / 2), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(-5));

const CommentForm = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    avatarImgProps,
    placeholder,
    onSubmit,
    error,
    errorMessage,
    disabled,
    buttonText,
    closeButtonText,
    defaultValue,
    commentLabel,
    id,
    className,
    onChange,
    onClose,
    ...props
  } = _ref;
  const [value, setValue] = (0, _react.useState)(defaultValue);

  const handleChange = event => {
    setValue(event.target.value.trim());
    onChange(event.target.value);
  };

  const handleKeyDown = event => {
    if (value === '') return;
    if (event.key !== 'Enter') return;
    if (!event.metaKey && !event.ctrlKey) return;
    onSubmit(value);
  };

  const handleSubmit = () => {
    onSubmit(value);
  };

  return /*#__PURE__*/_react.default.createElement(CommentFormWrapper, {
    className: (0, _classnames.default)('k-CommentForm', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-CommentForm__image"
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: ""
  }, avatarImgProps))), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-CommentForm__form"
  }, /*#__PURE__*/_react.default.createElement(_textareaAutoResize.TextareaAutoResize, {
    ref: ref || null,
    className: "k-CommentForm__textarea",
    id: id,
    defaultValue: defaultValue,
    disabled: disabled,
    placeholder: placeholder,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    minRows: 1,
    maxRows: 5,
    lineHeight: 20,
    "aria-describedby": id + "-description",
    "aria-label": props['aria-label'] || commentLabel
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-CommentForm__arrow"
  }), error && /*#__PURE__*/_react.default.createElement(_text.Text, {
    id: id + "-description",
    color: "error",
    size: "micro",
    weight: "500",
    className: "k-CommentForm__error"
  }, errorMessage), onClose ? /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-flex k-u-flex-justifyContent-end k-u-flex-gap-single"
  }, /*#__PURE__*/_react.default.createElement(_button.Button, {
    type: "button",
    size: "small",
    fit: "content",
    disabled: disabled,
    onClick: onClose
  }, closeButtonText), /*#__PURE__*/_react.default.createElement(_button.Button, {
    type: "button",
    modifier: "beryllium",
    size: "small",
    fit: "content",
    disabled: disabled,
    onClick: handleSubmit
  }, buttonText)) : (value.length > 0 || !!defaultValue) && /*#__PURE__*/_react.default.createElement(_button.Button, {
    type: "button",
    modifier: "beryllium",
    size: "small",
    fit: "content",
    disabled: disabled,
    className: (0, _classnames.default)('k-CommentForm__submit', {
      'k-CommentForm__submit--is-visible': value.length > 0
    }),
    onClick: handleSubmit
  }, buttonText)));
});

exports.CommentForm = CommentForm;
CommentForm.propTypes = {
  avatarImgProps: _propTypes.default.object.isRequired,
  'aria-label': _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  onClose: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  buttonText: _propTypes.default.string,
  closeButtonText: _propTypes.default.string,
  commentButton: (0, _deprecated.default)(_propTypes.default.string, 'Please use buttonText instead.'),
  avatarBadge: (0, _deprecated.default)(_propTypes.default.node, 'Not a feature anymore'),
  isDisabled: (0, _deprecated.default)(_propTypes.default.bool, 'Please use disabled instead'),
  commentLabel: (0, _deprecated.default)(_propTypes.default.string, 'Please use aria-label instead'),
  ariaId: (0, _deprecated.default)(_propTypes.default.string, 'Please use id prop instead.'),
  textareaId: (0, _deprecated.default)(_propTypes.default.string, 'Please use id prop instead.')
};
CommentForm.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  placeholder: '',
  error: false,
  errorMessage: '',
  defaultValue: '',
  id: 'CommentForm',
  disabled: false,
  buttonText: 'Send',
  closeButtonText: 'Close'
};