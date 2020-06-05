"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _buttonQuestionMarkIcon = require("../../components/buttons/button-question-mark-icon");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tooltip = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Tooltip, _Component);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    (0, _classCallCheck2.default)(this, Tooltip);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          place = _this$props.place,
          children = _this$props.children,
          id = _this$props.id,
          buttonQuestionMarkIconProps = (0, _objectWithoutProperties2.default)(_this$props, ["place", "children", "id"]);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Tooltip"
      }, /*#__PURE__*/_react.default.createElement(_buttonQuestionMarkIcon.ButtonQuestionMarkIcon, (0, _extends2.default)({
        "data-tip": true,
        "data-for": id,
        "data-event": "click",
        "data-dismiss": id,
        "aria-describedby": id
      }, buttonQuestionMarkIconProps)), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
        id: id // This is not a mistake, this attribute is called
        // class not className!
        ,
        class: "k-Tooltip__content",
        role: "tooltip",
        effect: "solid",
        place: place,
        event: "none"
      }, children));
    }
  }]);
  return Tooltip;
}(_react.Component);

exports.Tooltip = Tooltip;
Tooltip.defaultProps = {
  id: '',
  place: 'right',
  children: null
}; // DEPRECATED: do not use default export.

var _default = Tooltip;
exports.default = _default;