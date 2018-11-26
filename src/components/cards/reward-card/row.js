"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardRow = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var RewardCardRow =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RewardCardRow, _Component);

  function RewardCardRow() {
    (0, _classCallCheck2.default)(this, RewardCardRow);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardRow).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          style = _this$props.style;
      return _react.default.createElement("div", {
        style: styles
      }, children);
    }
  }]);
  return RewardCardRow;
}(_react.Component);

exports.RewardCardRow = RewardCardRow;
RewardCardRow.propTypes = {
  children: _propTypes.default.node.isRequired
};
var styles = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: "0 ".concat((0, _typography.pxToRem)(15))
};