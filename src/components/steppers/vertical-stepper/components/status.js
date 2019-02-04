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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _checkedIcon = require("../../../../components/icons/checked-icon");

var _warningIcon = require("../../../../components/icons/warning-icon");

var Status =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Status, _Component);

  function Status() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Status);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Status)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.iconByStatus = function () {
      var _this$props = _this.props,
          valid = _this$props.valid,
          error = _this$props.error;
      if (valid) return _react.default.createElement(_checkedIcon.CheckedIcon, {
        width: "10",
        title: null
      });
      if (error) return _react.default.createElement(_warningIcon.WarningIcon, {
        height: "20",
        color: _colorsConfig.default.error,
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
      return _react.default.createElement(StyledStatus, other, this.iconByStatus() || children);
    }
  }]);
  return Status;
}(_react.Component);

exports.Status = Status;
Status.propTypes = {
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool
};
Status.defaultProps = {
  valid: false,
  error: false
};
var STATUS_SIZE = 30;

var StyledStatus = _styledComponents.default.span.withConfig({
  displayName: "status__StyledStatus",
  componentId: "sc-17oq9bs-0"
})(["flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";box-sizing:border-box;margin-right:", ";background-color:", ";border:2px solid ", ";", ";font-size:", ";", " ", ""], (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(15), _colorsConfig.default.background1, _colorsConfig.default.line1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14), function (_ref) {
  var valid = _ref.valid;
  return valid && (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], _colorsConfig.default.valid, _colorsConfig.default.valid);
}, function (_ref2) {
  var error = _ref2.error;
  return error && (0, _styledComponents.css)(["color:", ";border-color:", ";"], _colorsConfig.default.error, _colorsConfig.default.error3);
});

exports.StyledStatus = StyledStatus;