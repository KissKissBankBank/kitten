"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCopy = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _typography = require("../../helpers/utils/typography");

var _copyIcon = require("../icons/copy-icon");

var _arrowContainer = require("../layout/arrow-container");

var _text = require("../typography/text");

var _visuallyHidden = require("../accessibility/visually-hidden");

var fadeIn = (0, _styledComponents.keyframes)(["0%{opacity:0;}100%{opacity:1;}"]);

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-1ikj7bl-0"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;border:", " solid ", ";background-color:", ";cursor:pointer;"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.background1);

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "text-copy__StyledText",
  componentId: "sc-1ikj7bl-1"
})(["padding:", " ", ";"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15));

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "text-copy__IconWrapper",
  componentId: "sc-1ikj7bl-2"
})(["display:flex;align-items:center;padding:", ";border-left:", " solid ", ";align-self:stretch;box-sizing:border-box;"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), _colorsConfig.default.line1);

var StyledArrowContainer = (0, _styledComponents.default)(_arrowContainer.ArrowContainer).withConfig({
  displayName: "text-copy__StyledArrowContainer",
  componentId: "sc-1ikj7bl-3"
})(["position:absolute;left:0;bottom:-", ";animation:0.5s ", " ease-out;"], (0, _typography.pxToRem)(50), fadeIn);

var TextCopy = function TextCopy(_ref) {
  var children = _ref.children,
      textToCopy = _ref.textToCopy,
      alertMessage = _ref.alertMessage,
      description = _ref.description;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      shouldShowMessage = _useState2[0],
      isMessageShown = _useState2[1];

  var textRef = (0, _react.useRef)(null);
  var copyText = (0, _react.useCallback)(function () {
    isMessageShown(false);

    if (textToCopy) {
      var el = document.createElement('textarea');
      el.value = textToCopy;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      var range = document.createRange();
      range.selectNode(textRef.current);
      window.getSelection().addRange(range);
    } else {
      var _range = document.createRange();

      _range.selectNode(textRef.current);

      window.getSelection().addRange(_range);
      document.execCommand('copy');
    }

    setTimeout(function () {
      return isMessageShown(true);
    }, 1);
  });
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Wrapper, {
    onClick: copyText
  }, description && _react.default.createElement(_visuallyHidden.VisuallyHidden, null, description), _react.default.createElement(StyledText, {
    weight: "light",
    size: "default"
  }, _react.default.createElement("span", {
    ref: textRef
  }, children)), _react.default.createElement(IconWrapper, {
    "aria-hidden": true
  }, _react.default.createElement(_copyIcon.CopyIcon, null)), alertMessage && shouldShowMessage && _react.default.createElement(StyledArrowContainer, {
    color: _colorsConfig.default.primary1,
    position: "top",
    padding: 10,
    centered: true,
    role: "alert"
  }, _react.default.createElement(_text.Text, {
    color: "background1",
    weight: "light",
    size: "micro"
  }, alertMessage))));
};

exports.TextCopy = TextCopy;
TextCopy.propTypes = {
  alertMessage: _propTypes.default.string,
  textToCopy: _propTypes.default.string,
  description: _propTypes.default.string
};
TextCopy.defaultProps = {
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined
};