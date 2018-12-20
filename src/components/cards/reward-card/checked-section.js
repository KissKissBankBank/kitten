"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardCheckedSection = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _checkedIconLine = require("../../../components/cards/reward-card/checked-icon-line");

var _typography = require("../../../helpers/utils/typography");

var RewardCardCheckedSection =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RewardCardCheckedSection, _Component);

  function RewardCardCheckedSection() {
    (0, _classCallCheck2.default)(this, RewardCardCheckedSection);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardCheckedSection).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardCheckedSection, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_checkedIconLine.RewardCardCheckedIconLine, null), _react.default.createElement("div", {
        style: styles
      }, children));
    }
  }]);
  return RewardCardCheckedSection;
}(_react.Component);

exports.RewardCardCheckedSection = RewardCardCheckedSection;
RewardCardCheckedSection.propTypes = {
  children: _propTypes.default.node.isRequired
};
var styles = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: "0 ".concat((0, _typography.pxToRem)(15)),
  marginTop: (0, _typography.pxToRem)(10),
  marginBottom: (0, _typography.pxToRem)(5)
};