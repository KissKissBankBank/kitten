"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCopy = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _typography = require("../../helpers/utils/typography");

var _copyIcon = require("../icons/copy-icon");

var _arrowContainer = require("../layout/arrow-container");

var _text = require("../typography/text");

var _visuallyHidden = require("../accessibility/visually-hidden");

var _modifierStyles = require("../../components/buttons/button/helpers/modifier-styles");

var StyledButton = (0, _styledComponents.default)(function (_ref) {
  var buttonModifier = _ref.buttonModifier,
      others = (0, _objectWithoutProperties2.default)(_ref, ["buttonModifier"]);
  return /*#__PURE__*/_react.default.createElement("button", others);
}).withConfig({
  displayName: "text-copy__StyledButton",
  componentId: "sc-1ikj7bl-0"
})(["", ";font-size:", ";line-height:1.3;flex:1 0 auto;outline:none;appearance:none;cursor:pointer;padding:0 ", ";border-radius:0;align-self:stretch;box-sizing:border-box;", ";"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(30), function (_ref2) {
  var buttonModifier = _ref2.buttonModifier;
  return (0, _modifierStyles.modifierStyles)(buttonModifier);
});
var fadeInAndOut = (0, _styledComponents.keyframes)(["0%,100%{opacity:0;}10%,90%{opacity:1;}"]);
var Wrapper = (0, _styledComponents.default)(function (_ref3) {
  var buttonText = _ref3.buttonText,
      others = (0, _objectWithoutProperties2.default)(_ref3, ["buttonText"]);
  return /*#__PURE__*/_react.default.createElement("div", others);
}).withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-1ikj7bl-1"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;", ""], function (_ref4) {
  var buttonText = _ref4.buttonText;
  return !buttonText && (0, _styledComponents.css)(["border:", " solid ", ";background-color:", ";"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.background1);
});
var StyledText = (0, _styledComponents.default)(function (_ref5) {
  var buttonText = _ref5.buttonText,
      forceOneLine = _ref5.forceOneLine,
      className = _ref5.className,
      children = _ref5.children,
      others = (0, _objectWithoutProperties2.default)(_ref5, ["buttonText", "forceOneLine", "className", "children"]);
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    className: className
  }, others), children);
}).withConfig({
  displayName: "text-copy__StyledText",
  componentId: "sc-1ikj7bl-2"
})(["padding:", " ", ";width:100%;", " ", ""], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), function (_ref6) {
  var buttonText = _ref6.buttonText;
  return buttonText && (0, _styledComponents.css)(["border:", " solid ", ";background-color:", ";border-right:0;"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.background1);
}, function (_ref7) {
  var forceOneLine = _ref7.forceOneLine;
  return forceOneLine && (0, _styledComponents.css)(["overflow:hidden;white-space:nowrap;"]);
});

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "text-copy__IconWrapper",
  componentId: "sc-1ikj7bl-3"
})(["display:flex;cursor:pointer;align-items:center;padding:", ";border-left:", " solid ", ";align-self:stretch;box-sizing:border-box;"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), _colorsConfig.default.line1);

var StyledArrowContainer = (0, _styledComponents.default)(_arrowContainer.ArrowContainer).withConfig({
  displayName: "text-copy__StyledArrowContainer",
  componentId: "sc-1ikj7bl-4"
})(["position:absolute;left:0;bottom:-", ";animation:3s ", " ease-out;"], (0, _typography.pxToRem)(50), fadeInAndOut);

var TextCopy = function TextCopy(_ref8) {
  var children = _ref8.children,
      textToCopy = _ref8.textToCopy,
      alertMessage = _ref8.alertMessage,
      description = _ref8.description,
      forceOneLine = _ref8.forceOneLine,
      buttonText = _ref8.buttonText,
      buttonModifier = _ref8.buttonModifier;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      shouldShowMessage = _useState2[0],
      isMessageShown = _useState2[1];

  var textRef = (0, _react.useRef)(null);
  var selectText = (0, _react.useCallback)(function () {
    var range = document.createRange();
    range.selectNode(textRef.current);
    window.getSelection().addRange(range);
  });
  (0, _react.useEffect)(function () {
    var hideTimeout;

    if (shouldShowMessage) {
      hideTimeout = setTimeout(function () {
        return isMessageShown(false);
      }, 3000);
    }

    return function () {
      return clearTimeout(hideTimeout);
    };
  }, [shouldShowMessage]);
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
      selectText();
      document.execCommand('copy');
    }

    setTimeout(function () {
      return isMessageShown(true);
    }, 1);
  });

  var Action = function Action(_ref9) {
    var copyText = _ref9.copyText,
        buttonText = _ref9.buttonText,
        buttonModifier = _ref9.buttonModifier,
        buttonProps = _ref9.buttonProps;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !buttonText && /*#__PURE__*/_react.default.createElement(IconWrapper, {
      "aria-hidden": true,
      onClick: copyText
    }, /*#__PURE__*/_react.default.createElement(_copyIcon.CopyIcon, null)), buttonText && /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
      type: "button",
      buttonModifier: buttonModifier,
      onClick: copyText,
      "aria-label": copyText
    }, buttonProps), buttonText));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Wrapper, {
    buttonText: buttonText
  }, description && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, description), /*#__PURE__*/_react.default.createElement(StyledText, {
    weight: "light",
    size: "micro",
    lineHeight: "normal",
    forceOneLine: forceOneLine,
    onClick: selectText,
    buttonText: buttonText
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: textRef
  }, children)), /*#__PURE__*/_react.default.createElement(Action, {
    copyText: copyText,
    buttonText: buttonText,
    buttonModifier: buttonModifier
  }), alertMessage && shouldShowMessage && /*#__PURE__*/_react.default.createElement(StyledArrowContainer, {
    color: _colorsConfig.default.primary1,
    position: "top",
    padding: 10,
    centered: true,
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "background1",
    weight: "light",
    size: "micro"
  }, alertMessage))));
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