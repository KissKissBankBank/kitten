"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextCopy = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _copyIcon = require("../../graphics/icons/copy-icon");

var _arrowContainer = require("../../information/boxes/arrow-container");

var _text = require("../../typography/text");

var _visuallyHidden = require("../../accessibility/visually-hidden");

var _textInput = require("../../form/input/text-input");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const fadeInAndOut = (0, _styledComponents.keyframes)(["0%,100%{opacity:0;}10%,90%{opacity:1;}"]);

const Wrapper = _styledComponents.default.button.withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-1d5z8sz-0"
})(["position:relative;width:100%;.k-TextInput__wrapper{.k-TextInput{--text-input-height:auto;line-height:1.15;display:flex;align-items:center;}@media ", "{flex-direction:column;}}.k-TextCopy__tooltip{position:absolute;left:50%;transform:translateX(-50%);bottom:-", ";animation:3s ", " ease-out;}&:hover{.k-TextInput{border:var(--border-hover);}.k-Button{border-color:var(--color-primary-700);background-color:var(--color-primary-700);}}&:active{.k-TextInput{border:var(--border-active);}.k-Button{border-color:var(--color-primary-900);background-color:var(--color-primary-900);}}"], _screenConfig.mq.mobile, (0, _typography.pxToRem)(50), fadeInAndOut);

const TextCopy = _ref => {
  let {
    id,
    children,
    textToCopy,
    alertMessage,
    description,
    forceOneLine,
    buttonText,
    buttonModifier,
    size,
    className
  } = _ref;
  const [isMessageVisible, setMessageVisibility] = (0, _react.useState)(false);
  const textElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    let hideTimeout;

    if (isMessageVisible) {
      hideTimeout = setTimeout(() => setMessageVisibility(false), 3000);
    }

    return () => clearTimeout(hideTimeout);
  }, [isMessageVisible]);

  const copyToClipboard = text => {
    return navigator.clipboard.writeText(text);
  };

  const copyText = (0, _react.useCallback)(() => {
    var _textElement$current;

    setMessageVisibility(false);
    const copyableText = textToCopy || (textElement == null ? void 0 : (_textElement$current = textElement.current) == null ? void 0 : _textElement$current.innerText) || '';
    copyToClipboard(copyableText).then(() => {
      setTimeout(() => setMessageVisibility(true), 1);
    });
    const range = document.createRange();
    range.selectNode(textElement.current);
    window.getSelection().addRange(range);
  });
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: (0, _classnames.default)('k-TextCopy', 'k-u-reset-button', className),
    type: "button",
    onClick: copyText
  }, description && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, description), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, {
    id: id,
    tag: "div",
    className: (0, _classnames.default)('k-TextCopy__text', 'k-u-reset-button', {
      'k-TextCopy__text--forceOneLine': forceOneLine
    }),
    size: size,
    has: "button",
    buttonProps: {
      as: 'span',
      modifier: !!buttonText ? buttonModifier : 'hydrogen',
      className: 'k-TextCopy__button',
      fit: buttonText ? 'content' : 'icon',
      children: !!buttonText ? buttonText : /*#__PURE__*/_react.default.createElement(_copyIcon.CopyIcon, null)
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: textElement,
    className: (0, _classnames.default)({
      'k-u-clamp-1': forceOneLine
    })
  }, children)), alertMessage && isMessageVisible && /*#__PURE__*/_react.default.createElement(_arrowContainer.ArrowContainer, {
    color: _colorsConfig.default.primary1,
    position: "top",
    padding: 10,
    centered: true,
    role: "alert",
    className: "k-TextCopy__tooltip",
    borderRadius: "var(--border-radius-s)"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "background1",
    weight: "400",
    size: "micro"
  }, alertMessage)));
};

exports.TextCopy = TextCopy;
TextCopy.propTypes = {
  alertMessage: _propTypes.default.string,
  textToCopy: _propTypes.default.string,
  description: _propTypes.default.string,
  forceOneLine: _propTypes.default.bool,
  buttonText: _propTypes.default.string,
  buttonModifier: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge', 'giant'])
};
TextCopy.defaultProps = {
  id: 'TextCopy',
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium',
  size: 'medium'
};