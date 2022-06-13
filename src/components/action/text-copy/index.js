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

var _button = require("../../action/button");

var _textInput = require("../../form/input/text-input");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fadeInAndOut = (0, _styledComponents.keyframes)(["0%,100%{opacity:0;}10%,90%{opacity:1;}"]);

var Wrapper = _styledComponents.default.button.withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-1d5z8sz-0"
})(["position:relative;display:flex;gap:", ";width:100%;@media (max-width:", "){flex-direction:column;}.k-TextCopy__text{display:flex;align-items:center;justify-content:flex-start;line-height:calc(1.15 * ", ");text-align:left;overflow:hidden;span{max-width:100%;max-height:calc(2 * 1.15 * ", ");overflow:hidden;text-overflow:ellipsis;}&.k-TextCopy__text--forceOneLine span{white-space:nowrap;}}.k-TextCopy__buttonTextButton{flex:1 0 auto;padding:0 ", ";align-self:stretch;box-sizing:border-box;}.k-TextCopy__iconButton{display:flex;cursor:pointer;align-items:center;padding:", ";border:var(--border);align-self:stretch;box-sizing:border-box;}.k-TextCopy__tooltip{position:absolute;left:50%;transform:translateX(-50%);bottom:-", ";animation:3s ", " ease-out;}&:hover{.k-Button{border-color:", ";background-color:", ";}}&:active{.k-Button{border-color:", ";background-color:", ";}}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.stepToRem)(-1), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(50), fadeInAndOut, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary3, _colorsConfig.default.primary3);

var TextCopy = function TextCopy(_ref) {
  var children = _ref.children,
      textToCopy = _ref.textToCopy,
      alertMessage = _ref.alertMessage,
      description = _ref.description,
      forceOneLine = _ref.forceOneLine,
      buttonText = _ref.buttonText,
      buttonModifier = _ref.buttonModifier,
      size = _ref.size,
      className = _ref.className;

  var _useState = (0, _react.useState)(false),
      isMessageVisible = _useState[0],
      setMessageVisibility = _useState[1];

  var textElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var hideTimeout;

    if (isMessageVisible) {
      hideTimeout = setTimeout(function () {
        return setMessageVisibility(false);
      }, 3000);
    }

    return function () {
      return clearTimeout(hideTimeout);
    };
  }, [isMessageVisible]);

  var copyToClipboard = function copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
  };

  var copyText = (0, _react.useCallback)(function () {
    var _textElement$current;

    setMessageVisibility(false);
    var copyableText = textToCopy || (textElement == null ? void 0 : (_textElement$current = textElement.current) == null ? void 0 : _textElement$current.innerText) || '';
    copyToClipboard(copyableText).then(function () {
      setTimeout(function () {
        return setMessageVisibility(true);
      }, 1);
    });
    var range = document.createRange();
    range.selectNode(textElement.current);
    window.getSelection().addRange(range);
  });
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: (0, _classnames.default)('k-TextCopy', 'k-u-reset-button', className),
    type: "button",
    onClick: copyText
  }, description && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, description), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, {
    as: "div",
    className: (0, _classnames.default)('k-TextCopy__text', 'k-u-reset-button', {
      'k-TextCopy__text--forceOneLine': forceOneLine
    }),
    size: size
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: textElement
  }, children)), /*#__PURE__*/_react.default.createElement(_button.Button, {
    as: "span",
    modifier: !!buttonText ? buttonModifier : 'hydrogen',
    className: "k-TextCopy__buttonTextButton",
    fit: buttonText ? 'content' : 'icon',
    size: size
  }, !!buttonText ? buttonText : /*#__PURE__*/_react.default.createElement(_copyIcon.CopyIcon, null)), alertMessage && isMessageVisible && /*#__PURE__*/_react.default.createElement(_arrowContainer.ArrowContainer, {
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
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium',
  size: 'medium'
};