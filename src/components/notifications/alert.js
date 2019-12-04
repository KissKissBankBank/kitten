"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _closeButton = require("../../components/buttons/close-button");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

var _screenConfig = require("../../constants/screen-config");

var _typography = require("../../helpers/utils/typography");

var fadeOut = (0, _styledComponents.keyframes)(["0%{opacity:1;}100%{opacity:0;}"]);

var AlertWrapper = _styledComponents.default.div.withConfig({
  displayName: "alert__AlertWrapper",
  componentId: "j865fd-0"
})(["", ";position:relative;overflow:hidden;padding:", " ", ";font-size:", ";background-color:", ";color:", ";@media (min-width:", "){text-align:center;}a{", ";color:inherit;text-decoration:underline;}", " ", " ", " ", ""], _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(13), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-1), _colorsConfig.default.primary5, _colorsConfig.default.primary1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), _typographyConfig.default.fontStyles.bold, function (props) {
  return props.success && (0, _styledComponents.css)(["color:", ";background-color:", ";"], _colorsConfig.default.valid, _colorsConfig.default.tertiary1);
}, function (props) {
  return props.error && (0, _styledComponents.css)(["color:", ";background-color:", ";"], _colorsConfig.default.error, _colorsConfig.default.error2);
}, function (props) {
  return props.warning && (0, _styledComponents.css)(["color:", ";background-color:", ";"], _colorsConfig.default.warning, _colorsConfig.default.warning2);
}, function (props) {
  return props.shouldHide && (0, _styledComponents.css)(["pointer-events:none;animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;"], fadeOut);
});

var StyledCloseButton = (0, _styledComponents.default)(_closeButton.CloseButton).withConfig({
  displayName: "alert__StyledCloseButton",
  componentId: "j865fd-1"
})(["position:absolute;top:0;right:0;"]);

var Alert = function Alert(_ref) {
  var className = _ref.className,
      show = _ref.show,
      error = _ref.error,
      success = _ref.success,
      warning = _ref.warning,
      closeButton = _ref.closeButton,
      closeButtonLabel = _ref.closeButtonLabel,
      children = _ref.children,
      onAfterClose = _ref.onAfterClose,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "show", "error", "success", "warning", "closeButton", "closeButtonLabel", "children", "onAfterClose"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTrashed = _useState2[0],
      trashIt = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isMounted = _useState4[0],
      setMounted = _useState4[1];

  (0, _react.useEffect)(function () {
    var clearDelayBeforeTrash;

    if (!isMounted) {
      clearDelayBeforeTrash = setTimeout(function () {
        return trashIt(true);
      }, 400);
    }

    return function () {
      return clearTimeout(clearDelayBeforeTrash);
    };
  }, [isMounted]);
  var alertRef = (0, _react.useRef)(null);

  if (isTrashed || !show) {
    return null;
  }

  return _react.default.createElement(AlertWrapper, (0, _extends2.default)({
    ref: alertRef,
    role: "alert",
    success: success,
    error: error,
    warning: warning,
    shouldHide: !isMounted,
    className: className
  }, others), _react.default.createElement(_react.default.Fragment, null, children, closeButton && _react.default.createElement(StyledCloseButton, {
    modifier: "carbon",
    closeButtonLabel: closeButtonLabel,
    onClick: function onClick() {
      return setMounted(false);
    }
  })));
};

exports.Alert = Alert;
Alert.defaultProps = {
  className: null,
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close'
};