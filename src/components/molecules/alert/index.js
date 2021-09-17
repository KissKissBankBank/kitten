"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Alert = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

require("core-js/modules/es.string.bold.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _closeButton = require("../../../components/molecules/buttons/close-button");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className", "show", "error", "success", "warning", "closeButton", "closeButtonLabel", "children", "onAfterClose"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fadeOut = (0, _styledComponents.keyframes)(["0%{opacity:1;}100%{opacity:0;}"]);

var AlertWrapper = _styledComponents.default.div.withConfig({
  displayName: "alert__AlertWrapper",
  componentId: "sc-1nkifwv-0"
})(["", ";position:relative;overflow:hidden;background-color:", ";color:", ";display:flex;align-items:flex-start;.k-Alert__text{padding:", " ", ";flex:1 0 0;font-size:", ";@media (min-width:", "){text-align:center;}}.k-Alert__button{flex:0 0 auto;transition:all 0.2s ease;svg,svg path{transition:fill 0.2s ease;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}a{", ";color:inherit;text-decoration:underline;}&.k-Alert--success{color:", ";background-color:", ";}&.k-Alert--error{color:", ";background-color:", ";}&.k-Alert--warning{color:", ";background-color:", ";}&.k-Alert--hasCloseButton{.k-Alert__text{@media (min-width:", "){margin-left:", ";}}}&.k-Alert--shouldHide{pointer-events:none;animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;}"], _typographyConfig.default.fontStyles.light, _colorsConfig.default.primary5, _colorsConfig.default.primary1, (0, _typography.pxToRem)(13), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(-4), _colorsConfig.default.primary4, _typographyConfig.default.fontStyles.bold, _colorsConfig.default.valid, _colorsConfig.default.tertiary1, _colorsConfig.default.error, _colorsConfig.default.error2, _colorsConfig.default.warning, _colorsConfig.default.warning2, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), fadeOut);

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
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      isTrashed = _useState[0],
      trashIt = _useState[1];

  var _useState2 = (0, _react.useState)(true),
      isMounted = _useState2[0],
      setMounted = _useState2[1];

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
  }, children), closeButton && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    modifier: "carbon",
    closeButtonLabel: closeButtonLabel,
    className: "k-Alert__button",
    onClick: function onClick() {
      return setMounted(false);
    }
  })));
};

exports.Alert = Alert;
Alert.propTypes = {
  show: _propTypes.default.bool,
  error: _propTypes.default.bool,
  success: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  closeButton: _propTypes.default.bool,
  closeButtonLabel: _propTypes.default.string,
  onAfterClose: _propTypes.default.func
};
Alert.defaultProps = {
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: function onAfterClose() {}
};