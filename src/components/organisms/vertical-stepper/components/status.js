"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Status = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _checkedIcon = require("../../../../components/graphics/icons/checked-icon");

var _warningIcon = require("../../../../components/graphics/icons/warning-icon");

var _dotIcon = require("../../../../components/graphics/icons/dot-icon");

var _screenConfig = require("../../../../constants/screen-config");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "valid", "success", "error", "waiting", "disabled", "bridge"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Status = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Status, _Component);

  function Status() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.iconByStatus = function () {
      var _this$props = _this.props,
          valid = _this$props.valid,
          success = _this$props.success,
          error = _this$props.error;
      if (success) return /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
        width: "10",
        title: null
      });
      if (error) return /*#__PURE__*/_react.default.createElement(_warningIcon.WarningIcon, {
        color: _colorsConfig.default.error,
        title: null
      });
      if (valid) return /*#__PURE__*/_react.default.createElement(_dotIcon.DotIcon, {
        width: "6",
        color: _colorsConfig.default.primary1,
        title: null
      });
      return null;
    };

    return _this;
  }

  var _proto = Status.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        valid = _this$props2.valid,
        success = _this$props2.success,
        error = _this$props2.error,
        waiting = _this$props2.waiting,
        disabled = _this$props2.disabled,
        bridge = _this$props2.bridge,
        other = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, _excluded);
    return /*#__PURE__*/_react.default.createElement(StyledContainerStatus, {
      className: (0, _classnames.default)('k-Steppers--VerticalStepper__statusContainer')
    }, /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, other, {
      className: (0, _classnames.default)('k-Steppers--VerticalStepper__status', {
        'k-Steppers--VerticalStepper__status--valid': valid,
        'k-Steppers--VerticalStepper__status--success': success,
        'k-Steppers--VerticalStepper__status--error': error,
        'k-Steppers--VerticalStepper__status--waiting': waiting,
        'k-Steppers--VerticalStepper__status--disabled': disabled,
        'k-Steppers--VerticalStepper__status--bridge': bridge
      })
    }), this.iconByStatus() || children));
  };

  return Status;
}(_react.Component);

exports.Status = Status;
var STATUS_SIZE = 30;
var MOBILE_STATUS_SIZE = 24;
var INACTIVE_STATUS_SIZE = 16;
var MOBILE_INACTIVE_STATUS_SIZE = 12;

var StyledContainerStatus = _styledComponents.default.div.withConfig({
  displayName: "status__StyledContainerStatus",
  componentId: "sc-trpumn-0"
})(["border-width:", ";border-style:solid;border-color:", ";@media (min-width:", "px){border-width:", ";}.k-Steppers--VerticalStepper__status{flex-shrink:0;display:flex;align-items:center;justify-content:center;box-sizing:border-box;margin-right:", ";z-index:1;padding:", ";width:", ";height:", ";border:", " solid ", ";border-radius:var(--border-radius-rounded);background-color:", ";", ";font-size:", ";@media (min-width:", "px){width:", ";height:", ";border-radius:var(--border-radius-rounded);margin-right:", ";}&.k-Steppers--VerticalStepper__status--success{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--valid{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--error{color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--waiting{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--disabled{background-color:", ";border-color:", ";border-width:", ";width:", ";height:", ";border-radius:var(--border-radius-rounded);margin-left:", ";margin-right:", ";@media (min-width:", "px){width:", ";height:", ";border-radius:var(--border-radius-rounded);margin-right:", ";border-width:", ";}}&.k-Steppers--VerticalStepper__status--bridge{height:", ";position:relative;border:0;&::before{width:", ";content:'';position:absolute;height:100%;border-left:", " dotted ", ";margin-left:", ";}}}"], (0, _typography.pxToRem)(4), _colorsConfig.default.background1, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(11), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(MOBILE_STATUS_SIZE), (0, _typography.pxToRem)(MOBILE_STATUS_SIZE), (0, _typography.pxToRem)(3), _colorsConfig.default.background1, _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(15), _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.error, _colorsConfig.default.error, _colorsConfig.default.background1, _colorsConfig.default.line1, _colorsConfig.default.background1, _colorsConfig.default.line1, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(MOBILE_INACTIVE_STATUS_SIZE), (0, _typography.pxToRem)(MOBILE_INACTIVE_STATUS_SIZE), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(15), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(INACTIVE_STATUS_SIZE), (0, _typography.pxToRem)(INACTIVE_STATUS_SIZE), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(3), _colorsConfig.default.line1, (0, _typography.pxToRem)(3));

Status.propTypes = {
  valid: _propTypes.default.bool,
  success: _propTypes.default.bool,
  error: _propTypes.default.bool,
  waiting: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  bridge: _propTypes.default.bool
};
Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  bridge: false
};