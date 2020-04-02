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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RewardCardRow = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(RewardCardRow, _Component);

  var _super = _createSuper(RewardCardRow);

  function RewardCardRow() {
    (0, _classCallCheck2.default)(this, RewardCardRow);
    return _super.apply(this, arguments);
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