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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _buttonQuestionMarkIcon = require("../../components/buttons/button-question-mark-icon");

var Tooltip =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Tooltip, _Component);

  function Tooltip() {
    (0, _classCallCheck2.default)(this, Tooltip);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tooltip).apply(this, arguments));
  }

  (0, _createClass2.default)(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          place = _this$props.place,
          children = _this$props.children,
          id = _this$props.id,
          buttonQuestionMarkIconProps = (0, _objectWithoutProperties2.default)(_this$props, ["place", "children", "id"]);
      return _react.default.createElement("div", {
        className: "k-Tooltip"
      }, _react.default.createElement(_buttonQuestionMarkIcon.ButtonQuestionMarkIcon, (0, _extends2.default)({
        "data-tip": true,
        "data-for": id,
        "data-event": "click",
        "data-dismiss": id,
        "aria-describedby": id
      }, buttonQuestionMarkIconProps)), _react.default.createElement(_reactTooltip.default, {
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