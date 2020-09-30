"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InformationBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _title = require("../../../components/typography/title");

var _marger = require("../../../components/layout/marger");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var InformationBox = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(InformationBox, _Component);

  var _super = _createSuper(InformationBox);

  function InformationBox() {
    (0, _classCallCheck2.default)(this, InformationBox);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(InformationBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["title", "children"]);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        className: "k-InformationBox"
      }, other), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-InformationBox__container"
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: "1"
      }, /*#__PURE__*/_react.default.createElement(_title.Title, {
        tag: "p",
        margin: false,
        modifier: "quaternary"
      }, title)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1"
      }, children)));
    }
  }]);
  return InformationBox;
}(_react.Component);

exports.InformationBox = InformationBox;
InformationBox.defaultProps = {
  title: null,
  children: null
};