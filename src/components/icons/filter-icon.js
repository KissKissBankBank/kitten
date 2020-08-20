"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FilterIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(FilterIcon, _Component);

  var _super = _createSuper(FilterIcon);

  function FilterIcon() {
    (0, _classCallCheck2.default)(this, FilterIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FilterIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, this.renderAnimation());
    }
  }, {
    key: "renderAnimation",
    value: function renderAnimation() {
      var _this$props = this.props,
          color = _this$props.color,
          duration = _this$props.duration,
          type = _this$props.type,
          name = _this$props.name,
          begin = _this$props.begin,
          animated = _this$props.animated,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["color", "duration", "type", "name", "begin", "animated"]);
      var dur = animated ? duration : 0;
      return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "20px",
        height: "24px",
        viewBox: "0 0 20 24",
        fill: color
      }, others), /*#__PURE__*/_react.default.createElement("title", null, "Filter icon"), /*#__PURE__*/_react.default.createElement("rect", {
        x: "2",
        width: "2",
        height: "10"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeType: type,
        attributeName: name,
        values: "-4; 0; -4",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "2",
        y: "14",
        width: "2",
        height: "10"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeType: type,
        attributeName: name,
        values: "14; 18; 14",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("path", {
        d: "M4,9v2H2V9H4 M6,7H0v6h6V7L6,7z"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeType: type,
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 4; 0 0",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "9",
        width: "2",
        height: "14"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeType: type,
        attributeName: name,
        values: "0; -12; 0",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "9",
        y: "22",
        width: "2",
        height: "14"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeType: type,
        attributeName: name,
        values: "22; 10; 22",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("path", {
        d: "M11,17v2H9v-2H11 M13,15H7v6h6V15L13,15z"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeType: type,
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 -12; 0 0",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "16",
        width: "2",
        height: "12"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeType: type,
        attributeName: name,
        values: "-8; 0; -8",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "16",
        y: "12",
        width: "2",
        height: "12"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeType: type,
        attributeName: name,
        values: "12; 20; 12",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("path", {
        d: "M18,7v2h-2V7H18 M20,5h-6v6h6V5L20,5z"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeType: type,
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 8; 0 0",
        begin: begin,
        dur: dur,
        repeatCount: "indefinite"
      })));
    }
  }]);
  return FilterIcon;
}(_react.Component);

exports.FilterIcon = FilterIcon;
FilterIcon.defaultProps = {
  color: null,
  duration: '1.5s',
  animated: false,
  type: 'xml',
  name: 'y',
  begin: '0'
};