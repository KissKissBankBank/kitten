"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _checkedIcon = require("../../../../components/icons/checked-icon");

var _warningIcon = require("../../../../components/icons/warning-icon");

var _waitingIcon = require("../../../../components/icons/waiting-icon");

var _dotIcon = require("../../../../components/icons/dot-icon");

var _lockIcon = require("../../../../components/icons/lock-icon");

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Status = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Status, _Component);

  var _super = _createSuper(Status);

  function Status() {
    var _this;

    (0, _classCallCheck2.default)(this, Status);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.iconByStatus = function () {
      var _this$props = _this.props,
          valid = _this$props.valid,
          success = _this$props.success,
          error = _this$props.error,
          waiting = _this$props.waiting,
          disabled = _this$props.disabled,
          variant = _this$props.variant;
      if (success) return /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
        width: "10",
        title: null
      });
      if (error) return /*#__PURE__*/_react.default.createElement(_warningIcon.WarningIcon, {
        color: _colorsConfig.default.error,
        title: null
      });
      if (waiting && variant === 'andromeda') return /*#__PURE__*/_react.default.createElement(_waitingIcon.WaitingIcon, {
        height: "4",
        color: _colorsConfig.default.primary1,
        title: null
      });
      if (disabled && variant === 'andromeda') return /*#__PURE__*/_react.default.createElement(_lockIcon.LockIcon, {
        width: "10",
        color: _colorsConfig.default.background1,
        title: null
      });

      if (valid && variant === 'orion') {
        return /*#__PURE__*/_react.default.createElement(_dotIcon.DotIcon, {
          width: "6",
          color: _colorsConfig.default.primary1,
          title: null
        });
      } else if (variant === 'andromeda') {
        return /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
          width: "10",
          color: _colorsConfig.default.background1,
          title: null
        });
      }

      return null;
    };

    return _this;
  }

  (0, _createClass2.default)(Status, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          valid = _this$props2.valid,
          success = _this$props2.success,
          error = _this$props2.error,
          waiting = _this$props2.waiting,
          disabled = _this$props2.disabled,
          bridge = _this$props2.bridge,
          variant = _this$props2.variant,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "valid", "success", "error", "waiting", "disabled", "bridge", "variant"]);
      return /*#__PURE__*/_react.default.createElement(StyledContainerStatus, {
        className: (0, _classnames.default)('k-Steppers--VerticalStepper__statusContainer', "k-Steppers--VerticalStepper__statusContainer--".concat(variant))
      }, /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, other, {
        className: (0, _classnames.default)('k-Steppers--VerticalStepper__status', "k-Steppers--VerticalStepper__status--".concat(variant), {
          'k-Steppers--VerticalStepper__status--valid': valid,
          'k-Steppers--VerticalStepper__status--success': success,
          'k-Steppers--VerticalStepper__status--error': error,
          'k-Steppers--VerticalStepper__status--waiting': waiting,
          'k-Steppers--VerticalStepper__status--disabled': disabled,
          'k-Steppers--VerticalStepper__status--bridge': bridge
        })
      }), this.iconByStatus() || children));
    }
  }]);
  return Status;
}(_react.Component);

exports.Status = Status;
var STATUS_SIZE = 30;
var INACTIVE_STATUS_SIZE = 15;

var StyledContainerStatus = _styledComponents.default.div.withConfig({
  displayName: "status__StyledContainerStatus",
  componentId: "sc-17oq9bs-0"
})(["&.k-Steppers--VerticalStepper__statusContainer--orion{border:", " solid ", ";}.k-Steppers--VerticalStepper__status{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";box-sizing:border-box;margin-right:", ";background-color:", ";border:", " solid ", ";", ";font-size:", ";&.k-Steppers--VerticalStepper__status--success{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--valid{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--error{color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--waiting{color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--disabled{color:", ";border-color:", ";background-color:", ";}&.k-Steppers--VerticalStepper__status--orion{box-sizing:border-box;width:100%;border:", " solid ", ";z-index:1;padding:", ";width:", ";height:", ";border-radius:", ";&.k-Steppers--VerticalStepper__status--success{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--valid{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--waiting{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--disabled{background-color:", ";border-color:", ";width:", ";height:", ";border-radius:", ";margin-left:", ";margin-right:", ";}&.k-Steppers--VerticalStepper__status--bridge{height:", ";position:relative;border:0;&::before{width:", ";content:\"\";position:absolute;height:100%;border-left:", " dotted ", ";}}}}"], (0, _typography.pxToRem)(6), _colorsConfig.default.background1, (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(15), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14), _colorsConfig.default.valid, _colorsConfig.default.valid, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.error, _colorsConfig.default.error3, _colorsConfig.default.primary1, _colorsConfig.default.primary4, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, (0, _typography.pxToRem)(3), _colorsConfig.default.background1, (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.line1, _colorsConfig.default.background1, _colorsConfig.default.line1, (0, _typography.pxToRem)(INACTIVE_STATUS_SIZE), (0, _typography.pxToRem)(INACTIVE_STATUS_SIZE), (0, _typography.pxToRem)(INACTIVE_STATUS_SIZE), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(3), _colorsConfig.default.line1);

Status.propTypes = {
  valid: _propTypes.default.bool,
  success: _propTypes.default.bool,
  error: _propTypes.default.bool,
  waiting: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  bridge: _propTypes.default.bool,
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};
Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  bridge: false,
  variant: 'andromeda'
};