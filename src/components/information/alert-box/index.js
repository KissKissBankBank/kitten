"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AlertBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _statusIconNext = require("../../graphics/icons-next/status-icon-next");

var _iconBadge = require("../../information/icon-badge");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

const AlertBoxWrapper = _styledComponents.default.div.withConfig({
  displayName: "alert-box__AlertBoxWrapper",
  componentId: "sc-225a7x-0"
})(["", ";border-radius:var(--border-radius-s,", ");overflow:hidden;background-color:var(--color-primary-100);color:var(--color-grey-900);gap:var(--alertBox-gap);padding:", " var(--alertBox-gap);&.k-AlertBox--content{display:inline-flex;}&.k-AlertBox--fluid{display:flex;}&.k-AlertBox--icon-start{align-items:flex-start;}&.k-AlertBox--icon-center{align-items:center;}.k-AlertBox__icon{flex:0 0 auto;border-radius:var(--border-radius-rounded,", ");}.k-AlertBox__text{flex:1 1 auto;font-size:", ";line-height:", ";}&.k-AlertBox--medium{gap:", ";padding:", ";.k-AlertBox__icon{width:", ";height:", ";flex-basis:", ";}}&.k-AlertBox--large{gap:", ";padding:", ";.k-AlertBox__icon{width:", ";height:", ";flex-basis:", ";}}&.k-AlertBox--small{gap:", ";padding:", ";.k-AlertBox__text{font-size:", ";line-height:", ";}.k-AlertBox__icon{width:", ";height:", ";flex-basis:", ";}}.k-u-link,a{", ";text-decoration:none;}&.k-AlertBox--info{background-color:var(--color-primary-100);.k-u-link,a{color:var(--color-primary-500);}}&.k-AlertBox--success{background-color:var(--color-success-100);.k-u-link,a{color:var(--color-success-500);}}&.k-AlertBox--danger{background-color:var(--color-danger-100);.k-u-link,a{color:var(--color-danger-500);}}&.k-AlertBox--warning{background-color:var(--color-warning-100);.k-u-link,a{color:var(--color-warning-500);}}&.k-AlertBox--pending{background-color:var(--color-grey-300);.k-u-link,a{color:var(--color-primary-500);}}&.k-AlertBox--disabled{background-color:var(--color-grey-200);.k-u-link,a{color:var(--color-grey-600);}}"], _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(9999), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), _typographyConfig.default.fontStyles['700']);

const AlertBox = _ref => {
  let {
    className,
    children,
    icon,
    status,
    displayIcon,
    iconPosition,
    size,
    fit,
    iconHasBorder,
    ...others
  } = _ref;

  const internalIcon = (() => {
    if (icon) return icon;
    return /*#__PURE__*/_react.default.createElement(_statusIconNext.StatusIconNext, {
      status: status
    });
  })();

  const role = (() => {
    switch (status) {
      case 'danger':
        return 'alert';

      case 'warning':
      case 'success':
        return 'status';

      default:
        return null;
    }
  })();

  const iconSize = (() => {
    switch (size) {
      case 'large':
        return 'medium';

      case 'medium':
        return 'small';

      case 'small':
        return 'micro';
    }
  })();

  return /*#__PURE__*/_react.default.createElement(AlertBoxWrapper, (0, _extends2.default)({
    role: role,
    className: (0, _classnames.default)('k-AlertBox', className, "k-AlertBox--" + status, "k-AlertBox--" + size, "k-AlertBox--" + fit, "k-AlertBox--icon-" + iconPosition, {
      'k-AlertBox--hasIcon': displayIcon
    })
  }, others), displayIcon && /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    className: "k-AlertBox__icon",
    children: internalIcon,
    status: status,
    size: iconSize,
    hasBorder: iconHasBorder
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-AlertBox__text"
  }, children));
};

exports.AlertBox = AlertBox;
AlertBox.propTypes = {
  status: _propTypes.default.oneOf(['info', 'success', 'danger', 'warning', 'disabled', 'pending']),
  displayIcon: _propTypes.default.bool,
  iconPosition: _propTypes.default.oneOf(['start', 'center']),
  icon: _propTypes.default.node,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  fit: _propTypes.default.oneOf(['content', 'fluid']),
  iconHasBorder: _propTypes.default.bool
};
AlertBox.defaultProps = {
  status: 'info',
  displayIcon: true,
  icon: null,
  size: 'medium',
  fit: 'fluid',
  iconPosition: 'start',
  iconHasBorder: true
};