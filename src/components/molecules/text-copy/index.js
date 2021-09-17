"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextCopy = void 0;

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _copyIcon = require("../../graphics/icons/copy-icon");

var _arrowContainer = require("../../molecules/boxes/arrow-container");

var _text = require("../../atoms/typography/text");

var _visuallyHidden = require("../../accessibility/visually-hidden");

var _button = require("../../molecules/buttons/button");

var _textInput = require("../../form/text-input");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fadeInAndOut = (0, _styledComponents.keyframes)(["0%,100%{opacity:0;}10%,90%{opacity:1;}"]);

var Wrapper = _styledComponents.default.button.withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-hjbj35-0"
})(["position:relative;display:flex;width:100%;.k-TextCopy__text{display:flex;align-items:center;justify-content:flex-start;line-height:calc(1.15 * ", ");text-align:left;overflow:hidden;span{max-width:100%;max-height:calc(2 * 1.15 * ", ");overflow:hidden;text-overflow:ellipsis;}&.k-TextCopy__text--forceOneLine span{white-space:nowrap;}}.k-TextCopy__buttonTextButton{min-width:0;flex:1 0 auto;padding:0 ", ";align-self:stretch;box-sizing:border-box;}.k-TextCopy__iconButton{display:flex;cursor:pointer;align-items:center;padding:", ";border:", " solid ", ";align-self:stretch;box-sizing:border-box;}.k-TextCopy__tooltip{position:absolute;left:0;bottom:-", ";animation:3s ", " ease-out;}&.k-TextCopy--andromeda{.k-TextCopy__text{border-right:0;}}&.k-TextCopy--orion{gap:", ";&:hover{.k-Button{border-color:", ";background-color:", ";}}&:active{.k-Button{border-color:", ";background-color:", ";}}@media (max-width:", "){flex-direction:column;}.k-Button.k-Button--orion{border-radius:", ";}}"], (0, _typography.stepToRem)(-1), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(50), fadeInAndOut, (0, _typography.pxToRem)(5), _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary3, _colorsConfig.default.primary3, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(4));

var TextCopy = function TextCopy(_ref) {
  var children = _ref.children,
      textToCopy = _ref.textToCopy,
      alertMessage = _ref.alertMessage,
      description = _ref.description,
      forceOneLine = _ref.forceOneLine,
      buttonText = _ref.buttonText,
      buttonModifier = _ref.buttonModifier,
      variant = _ref.variant;

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
    if (!navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      // IE11
      var hiddenElement = document.createElement('textarea');
      hiddenElement.style.position = 'absolute';
      hiddenElement.style.opacity = 0;
      hiddenElement.value = text;
      document.body.appendChild(hiddenElement);
      hiddenElement.select();
      return new Promise(function (res, rej) {
        document.execCommand('copy') ? res() : rej();
        document.body.removeChild(hiddenElement);
      });
    }
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
    className: (0, _classnames.default)('k-TextCopy', 'k-u-reset-button', "k-TextCopy--" + variant),
    type: "button",
    onClick: copyText
  }, description && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, description), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, {
    as: "div",
    className: (0, _classnames.default)('k-TextCopy__text', 'k-u-reset-button', {
      'k-TextCopy__text--forceOneLine': forceOneLine
    }),
    variant: variant
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: textElement
  }, children)), /*#__PURE__*/_react.default.createElement(_button.Button, {
    as: "span",
    modifier: !!buttonText ? buttonModifier : 'hydrogen',
    className: "k-TextCopy__buttonTextButton",
    variant: variant,
    icon: !buttonText
  }, !!buttonText ? buttonText : /*#__PURE__*/_react.default.createElement(_copyIcon.CopyIcon, null)), alertMessage && isMessageVisible && /*#__PURE__*/_react.default.createElement(_arrowContainer.ArrowContainer, {
    color: _colorsConfig.default.primary1,
    position: "top",
    padding: 10,
    centered: true,
    role: "alert",
    className: "k-TextCopy__tooltip"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "background1",
    weight: "light",
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
  buttonModifier: _propTypes.default.string
};
TextCopy.defaultProps = {
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium'
};