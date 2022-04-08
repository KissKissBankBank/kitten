"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Alert = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _statusIconNext = require("../../graphics/icons-next/status-icon-next");

var _crossIconNext = require("../../graphics/icons-next/cross-icon-next");

var _iconBadge = require("../../information/icon-badge");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _excluded = ["className", "show", "error", "danger", "success", "warning", "closeButton", "closeButtonLabel", "children", "onAfterClose", "icon", "center", "status", "iconHasBorder", "displayIcon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fadeOut = (0, _styledComponents.keyframes)(["0%{opacity:1;}100%{opacity:0;}"]);

var AlertWrapper = _styledComponents.default.div.withConfig({
  displayName: "alert__AlertWrapper",
  componentId: "sc-zym1gs-0"
})(["--alert-gap:", ";@media ", "{--alert-gap:", ";}", ";margin:", ";border-radius:var(--border-radius-m);overflow:hidden;background-color:var(--color-primary-100);color:var(--color-grey-900);display:flex;align-items:center;gap:var(--alert-gap);padding:", " var(--alert-gap);background-color:var(--color-primary-100);[href]{color:var(--color-primary-700);}.k-Alert__closeButton{svg,svg path{fill:var(--color-primary-700);:hover{fill:var(--color-primary-900);}}}&.k-Alert--hasCloseButton{--alert-close-width:calc(var(--alert-gap) + ", ");}&.k-Alert--hasIcon{--alert-icon-width:calc(var(--alert-gap) + ", ");}&.k-Alert--center{&.k-Alert--hasIcon:not(.k-Alert--hasCloseButton) .k-Alert__text{padding-right:var(--alert-icon-width);}&.k-Alert--hasCloseButton:not(.k-Alert--hasIcon) .k-Alert__text{padding-left:var(--alert-close-width);}&.k-Alert--hasCloseButton.k-Alert--hasIcon .k-Alert__text{padding-right:calc(var(--alert-icon-width) - var(--alert-close-width));}.k-Alert__text{text-align:center;flex-basis:auto;}}.k-Alert__text{flex:1 0 calc(100% - var(--alert-close-width,0px) - var(--alert-icon-width,0px));font-size:", ";line-height:", ";}.k-Alert__iconBadge{min-width:", ";min-height:", ";}.k-Alert__closeButton{flex:0 0 ", ";transition:all 0.2s ease;display:flex;align-self:stretch;align-items:center;margin:", " calc(var(--alert-gap) * -1);padding:", " var(--alert-gap);border-top-right-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);outline-offset:", ";svg,svg path{transition:fill 0.2s ease;fill:var(--color-primary-700);:hover{fill:var(--color-primary-900);}}}a{", ";color:var(--color-primary-500);text-decoration:underline;}&.k-Alert--success{background-color:var(--color-success-100);[href]{color:var(--color-success-700);}.k-Alert__closeButton{svg,svg path{fill:var(--color-success-700);:hover{fill:var(--color-success-900);}}}}&.k-Alert--error,&.k-Alert--danger{background-color:var(--color-danger-100);[href]{color:var(--color-danger-700);}.k-Alert__closeButton{svg,svg path{fill:var(--color-danger-700);:hover{fill:var(--color-danger-900);}}}}&.k-Alert--warning{background-color:var(--color-warning-100);[href]{color:var(--color-warning-700);}.k-Alert__closeButton{svg,svg path{fill:var(--color-warning-700);:hover{fill:'#A47600';}}}}&.k-Alert--shouldHide{pointer-events:none;animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;}"], (0, _typography.pxToRem)(10), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(20), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(17), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(17), (0, _typography.pxToRem)(-18), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(-2), _typographyConfig.default.fontStyles.bold, fadeOut);

var Alert = function Alert(_ref) {
  var className = _ref.className,
      show = _ref.show,
      error = _ref.error,
      danger = _ref.danger,
      success = _ref.success,
      warning = _ref.warning,
      closeButton = _ref.closeButton,
      closeButtonLabel = _ref.closeButtonLabel,
      children = _ref.children,
      onAfterClose = _ref.onAfterClose,
      icon = _ref.icon,
      center = _ref.center,
      status = _ref.status,
      iconHasBorder = _ref.iconHasBorder,
      displayIcon = _ref.displayIcon,
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

  var internalIcon = icon || /*#__PURE__*/_react.default.createElement(_statusIconNext.StatusIconNext, {
    status: status
  });

  var role = function () {
    switch (true) {
      case danger: //deprecated

      case status === 'danger':
        return 'alert';

      case warning: //deprecated

      case success: //deprecated

      case status === 'warning':
      case status === 'success':
        return 'status';

      default:
        return null;
    }
  }();

  var statusIcon = function () {
    switch (true) {
      case warning:
        return 'warning';

      case success:
        return 'success';

      case danger:
      case error:
        return 'danger';

      default:
        return status;
    }
  }();

  return /*#__PURE__*/_react.default.createElement(AlertWrapper, (0, _extends2.default)({
    ref: alertRef,
    role: role,
    className: (0, _classnames.default)('k-Alert', className, "k-Alert--" + status, {
      'k-Alert--center': center,
      'k-Alert--hasCloseButton': !!closeButton,
      'k-Alert--hasIcon': !!icon || displayIcon,
      'k-Alert--shouldHide': !isMounted,
      // Status classes through deprecated props
      'k-Alert--success': !!success,
      'k-Alert--error': !!error,
      'k-Alert--warning': !!warning
    })
  }, others), displayIcon && /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    className: "k-Alert__iconBadge",
    children: internalIcon,
    status: statusIcon,
    hasBorder: iconHasBorder
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Alert__text"
  }, children), closeButton && /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setMounted(false);
    },
    className: "k-Alert__closeButton k-u-reset-button",
    title: closeButtonLabel,
    "aria-label": closeButtonLabel
  }, /*#__PURE__*/_react.default.createElement(_crossIconNext.CrossIconNext, null)));
};

exports.Alert = Alert;
Alert.propTypes = {
  show: _propTypes.default.bool,
  error: (0, _deprecated.default)(_propTypes.default.bool, 'Use the "status=danger" prop instead'),
  success: (0, _deprecated.default)(_propTypes.default.bool, 'Use the "status=success" prop instead'),
  warning: (0, _deprecated.default)(_propTypes.default.bool, 'Use the "status=warning" prop instead'),
  closeButton: _propTypes.default.bool,
  closeButtonLabel: _propTypes.default.string,
  onAfterClose: _propTypes.default.func,
  icon: _propTypes.default.node,
  iconBadgeBorderColor: (0, _deprecated.default)(_propTypes.default.string, 'Use iconHasBorder prop instead'),
  center: _propTypes.default.bool,
  displayIcon: _propTypes.default.bool,
  iconHasBorder: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['info', 'warning', 'success', 'danger'])
};
Alert.defaultProps = {
  show: true,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: function onAfterClose() {},
  icon: null,
  center: false,
  displayIcon: true,
  iconHasBorder: true,
  status: 'info'
};