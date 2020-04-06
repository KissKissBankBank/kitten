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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RewardCardCheckedSection = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(RewardCardCheckedSection, _Component);

  var _super = _createSuper(RewardCardCheckedSection);

  function RewardCardCheckedSection() {
    (0, _classCallCheck2.default)(this, RewardCardCheckedSection);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RewardCardCheckedSection, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_checkedIconLine.RewardCardCheckedIconLine, null), /*#__PURE__*/_react.default.createElement("div", {
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