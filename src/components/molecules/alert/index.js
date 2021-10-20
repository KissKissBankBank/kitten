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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _crossIconNext = require("../../../components/graphics/icons-next/cross-icon-next");

var _iconBadge = require("../../../components/atoms/icon-badge");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var fadeOut = (0, _styledComponents.keyframes)(["0%{opacity:1;}100%{opacity:0;}"]);

var AlertWrapper = _styledComponents.default.div.withConfig({
  displayName: "alert__AlertWrapper",
  componentId: "sc-1nkifwv-0"
})(["", ";margin:", ";border-radius:", ";overflow:hidden;background-color:", ";color:", ";display:flex;[href]{color:", ";}.k-Alert__text{padding:", " ", ";flex:1 0 0;font-size:", ";display:flex;justify-content:center;align-items:center;@media (min-width:", "){padding:", " ", ";}}.k-Alert__iconBadge{margin-right:", ";background-color:", ";border-color:", ";min-width:", ";min-height:", ";border-radius:", ";@media (min-width:", "){margin-right:", ";}}button{display:flex;flex:0 0 auto;transition:all 0.2s ease;align-self:stretch;align-items:center;padding-right:", ";@media (min-width:", "){padding-right:", ";}svg,svg path{transition:fill 0.2s ease;fill:", ";:hover{fill:", ";}}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}a{", ";color:inherit;text-decoration:underline;}&.k-Alert--success{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}button{svg,svg path{fill:", ";:hover{fill:", ";}}}}&.k-Alert--error{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}button{svg,svg path{fill:", ";:hover{fill:", ";}}}}&.k-Alert--warning{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}button{svg,svg path{fill:", ";:hover{fill:'#A47600';}}}}&.k-Alert--hasCloseButton{.k-Alert__text{@media (min-width:", "){margin-left:", ";}}}&.k-Alert--shouldHide{pointer-events:none;animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;}"], _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8), _colorsConfig.default.primary5, _colorsConfig.default.font1, _colorsConfig.default.primary1, (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.primary1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(20), _colorsConfig.default.primary1, _colorsConfig.default.primary3, _colorsConfig.default.background1, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(-4), _colorsConfig.default.primary4, _typographyConfig.default.fontStyles.bold, _colorsConfig.default.tertiary1, _colorsConfig.default.valid, _colorsConfig.default.valid, _colorsConfig.default.tertiary2, _colorsConfig.default.valid, _colorsConfig.default.tertiary2, _colorsConfig.default.error2, _colorsConfig.default.error, _colorsConfig.default.error, _colorsConfig.default.error3, _colorsConfig.default.error, _colorsConfig.default.error4, _colorsConfig.default.warning2, _colorsConfig.default.orange3, _colorsConfig.default.orange3, _colorsConfig.default.orange, _colorsConfig.default.warning, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), fadeOut);

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
      icon = _ref.icon,
      iconBadgeBorderColor = _ref.iconBadgeBorderColor,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "show", "error", "success", "warning", "closeButton", "closeButtonLabel", "children", "onAfterClose", "icon", "iconBadgeBorderColor"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTrashed = _useState2[0],
      trashIt = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isMounted = _useState4[0],
      setMounted = _useState4[1];

  var alertRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var clearDelayBeforeTrash;

    if (!isMounted) {
      clearDelayBeforeTrash = setTimeout(function () {
        trashIt(true);
        onAfterClose();
      }, 400);
    }

    return function () {
      return clearTimeout(clearDelayBeforeTrash);
    };
  }, [isMounted]);
  if (isTrashed || !show) return null;
  return /*#__PURE__*/_react.default.createElement(AlertWrapper, (0, _extends2.default)({
    ref: alertRef,
    role: "alert",
    className: (0, _classnames.default)('k-Alert', className, {
      'k-Alert--success': success,
      'k-Alert--error': error,
      'k-Alert--warning': warning,
      'k-Alert--hasCloseButton': closeButton,
      'k-Alert--shouldHide': !isMounted
    })
  }, others), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Alert__text"
  }, icon && /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    className: "k-Alert__iconBadge",
    children: icon,
    border: {
      width: 2,
      color: iconBadgeBorderColor,
      style: 'solid'
    }
  }), children), closeButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "k-u-reset-button"
  }, /*#__PURE__*/_react.default.createElement(_crossIconNext.CrossIconNext, {
    onClick: function onClick() {
      return setMounted(false);
    },
    title: closeButtonLabel
  }))));
};

exports.Alert = Alert;
Alert.propTypes = {
  show: _propTypes.default.bool,
  error: _propTypes.default.bool,
  success: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  closeButton: _propTypes.default.bool,
  closeButtonLabel: _propTypes.default.string,
  onAfterClose: _propTypes.default.func,
  icon: _propTypes.default.node,
  iconBadgeBorderColor: _propTypes.default.string
};
Alert.defaultProps = {
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: function onAfterClose() {},
  icon: '',
  iconBadgeBorderColor: _colorsConfig.default.primary4
};