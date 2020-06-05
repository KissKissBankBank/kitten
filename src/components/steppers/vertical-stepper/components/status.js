"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledStatus = exports.Status = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _checkedIcon = require("../../../../components/icons/checked-icon");

var _warningIcon = require("../../../../components/icons/warning-icon");

var _waitingIcon = require("../../../../components/icons/waiting-icon");

var _lockIcon = require("../../../../components/icons/lock-icon");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

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
          disabled = _this$props.disabled;
      if (valid) return /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
        width: "10",
        title: null
      });
      if (success) return /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
        width: "10",
        title: null
      });
      if (error) return /*#__PURE__*/_react.default.createElement(_warningIcon.WarningIcon, {
        color: _colorsConfig.default.error,
        title: null
      });
      if (waiting) return /*#__PURE__*/_react.default.createElement(_waitingIcon.WaitingIcon, {
        height: "4",
        color: _colorsConfig.default.primary1,
        title: null
      });
      if (disabled) return /*#__PURE__*/_react.default.createElement(_lockIcon.LockIcon, {
        width: "10",
        color: _colorsConfig.default.background1,
        title: null
      });
      return null;
    };

    return _this;
  }

  (0, _createClass2.default)(Status, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["children"]);
      return /*#__PURE__*/_react.default.createElement(StyledStatus, other, this.iconByStatus() || children);
    }
  }]);
  return Status;
}(_react.Component);

exports.Status = Status;
Status.propTypes = {
  valid: _propTypes.default.bool,
  success: _propTypes.default.bool,
  error: _propTypes.default.bool,
  waiting: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false
};
var STATUS_SIZE = 30;

var StyledStatus = _styledComponents.default.span.withConfig({
  displayName: "status__StyledStatus",
  componentId: "sc-17oq9bs-0"
})(["flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";box-sizing:border-box;margin-right:", ";background-color:", ";border:2px solid ", ";", ";font-size:", ";", " ", " ", " ", " ", ""], (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(15), _colorsConfig.default.background1, _colorsConfig.default.line1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14), function (_ref) {
  var success = _ref.success;
  return success && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.valid, _colorsConfig.default.valid);
}, function (_ref2) {
  var valid = _ref2.valid;
  return valid && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.primary1, _colorsConfig.default.primary1);
}, function (_ref3) {
  var error = _ref3.error;
  return error && (0, _styledComponents.css)(["color:", ";border-color:", ";"], _colorsConfig.default.error, _colorsConfig.default.error3);
}, function (_ref4) {
  var waiting = _ref4.waiting;
  return waiting && (0, _styledComponents.css)(["color:", ";border-color:", ";"], _colorsConfig.default.primary1, _colorsConfig.default.primary4);
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled && (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";"], _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2);
});

exports.StyledStatus = StyledStatus;