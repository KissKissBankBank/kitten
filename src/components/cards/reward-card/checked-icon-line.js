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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _iconBadge = require("../../../components/notifications/icon-badge");

var _checkedIcon = require("../../../components/icons/checked-icon");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var RewardCardCheckedIconLine =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RewardCardCheckedIconLine, _Component);

  function RewardCardCheckedIconLine() {
    (0, _classCallCheck2.default)(this, RewardCardCheckedIconLine);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardCheckedIconLine).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardCheckedIconLine, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: styles.base
      }, _react.default.createElement(_iconBadge.IconBadge, {
        valid: true,
        style: styles.iconBadge
      }, _react.default.createElement(_checkedIcon.CheckedIcon, {
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