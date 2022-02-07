"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AlertBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _statusIconNext = require("../../../components/graphics/icons-next/status-icon-next");

var _iconBadge = require("../../../components/atoms/icon-badge");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className", "children", "icon", "status", "displayIcon", "iconPosition", "size", "fit"];

var AlertBoxWrapper = _styledComponents.default.div.withConfig({
  displayName: "alert-box__AlertBoxWrapper",
  componentId: "sc-5bsgtr-0"
})(["", ";border-radius:var(--border-radius-s,", ");overflow:hidden;background-color:", ";color:", ";gap:var(--alertBox-gap);padding:", " var(--alertBox-gap);&.k-AlertBox--content{display:inline-flex;}&.k-AlertBox--fluid{display:flex;}&.k-AlertBox--icon-start{align-items:flex-start;}&.k-AlertBox--icon-center{align-items:center;}.k-AlertBox__icon{flex:0 0 auto;border-radius:var(--border-radius-rounded,", ");}.k-AlertBox__text{flex:1 1 auto;font-size:", ";line-height:", ";}&.k-AlertBox--normal{gap:", ";padding:", ";.k-AlertBox__icon{width:", ";height:", ";flex-basis:", ";}}&.k-AlertBox--big{gap:", ";padding:", ";.k-AlertBox__icon{width:", ";height:", ";flex-basis:", ";}}&.k-AlertBox--small{gap:", ";padding:", ";.k-AlertBox__text{font-size:", ";line-height:", ";}}.k-u-link,a{", ";text-decoration:none;}&.k-AlertBox--info{background-color:var(--color-primary-100);.k-u-link,a{color:var(--color-primary-500);}}&.k-AlertBox--success{background-color:var(--color-success-100);.k-u-link,a{color:var(--color-success-500);}}&.k-AlertBox--danger{background-color:var(--color-danger-100);.k-u-link,a{color:var(--color-danger-500);}}&.k-AlertBox--warning{background-color:var(--color-warning-100);.k-u-link,a{color:var(--color-warning-500);}}&.k-AlertBox--disabled{background-color:var(--color-grey-200);.k-u-link,a{color:var(--color-grey-600);}}"], _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(6), _colorsConfig.default.primary5, _colorsConfig.default.font1, (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(9999), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles.bold);

var AlertBox = function AlertBox(_ref) {
  var className = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      status = _ref.status,
      displayIcon = _ref.displayIcon,
      iconPosition = _ref.iconPosition,
      size = _ref.size,
      fit = _ref.fit,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var internalIcon = function () {
    if (icon) return icon;
    return /*#__PURE__*/_react.default.createElement(_statusIconNext.StatusIconNext, {
      status: status
    });
  }();

  var role = function () {
    switch (status) {
      case 'danger':
        return 'alert';

      case 'warning':
      case 'success':
        return 'status';

      default:
        return null;
    }
  }();

  return /*#__PURE__*/_react.default.createElement(AlertBoxWrapper, (0, _extends2.default)({
    role: role,
    className: (0, _classnames.default)('k-AlertBox', className, "k-AlertBox--" + status, "k-AlertBox--" + size, "k-AlertBox--" + fit, "k-AlertBox--icon-" + iconPosition, {
      'k-AlertBox--hasIcon': displayIcon
    })
  }, others), displayIcon && /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    className: "k-AlertBox__icon",
    children: internalIcon,
    status: status,
    size: size === 'big' ? 'normal' : 'tiny'
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-AlertBox__text"
  }, children));
};

exports.AlertBox = AlertBox;
AlertBox.propTypes = {
  status: _propTypes.default.oneOf(['info', 'success', 'danger', 'warning', 'disabled']),
  displayIcon: _propTypes.default.bool,
  iconPosition: _propTypes.default.oneOf(['start', 'center']),
  icon: _propTypes.default.node,
  size: _propTypes.default.oneOf(['normal', 'big', 'small']),
  fit: _propTypes.default.oneOf(['content', 'fluid'])
};
AlertBox.defaultProps = {
  status: 'info',
  displayIcon: true,
  icon: null,
  size: 'normal',
  fit: 'fluid',
  iconPosition: 'start'
};