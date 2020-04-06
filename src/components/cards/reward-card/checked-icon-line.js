"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardCheckedIconLine = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _iconBadge = require("../../../components/notifications/icon-badge");

var _checkedIcon = require("../../../components/icons/checked-icon");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RewardCardCheckedIconLine = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(RewardCardCheckedIconLine, _Component);

  var _super = _createSuper(RewardCardCheckedIconLine);

  function RewardCardCheckedIconLine() {
    (0, _classCallCheck2.default)(this, RewardCardCheckedIconLine);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RewardCardCheckedIconLine, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: styles.base
      }, /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
        valid: true,
        style: styles.iconBadge
      }, /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
        className: "k-IconBadge__svg"
      })));
    }
  }]);
  return RewardCardCheckedIconLine;
}(_react.Component);

exports.RewardCardCheckedIconLine = RewardCardCheckedIconLine;
var styles = {
  base: {
    borderTop: "2px ".concat(_colorsConfig.default.line1, " solid"),
    marginTop: (0, _typography.pxToRem)(20),
    display: 'flex',
    justifyContent: 'center'
  },
  iconBadge: {
    marginTop: "-".concat((0, _typography.pxToRem)(15))
  }
};