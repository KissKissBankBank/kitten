"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../components/typography/text");

var Checkbox =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Checkbox, _Component);

  function Checkbox() {
    (0, _classCallCheck2.default)(this, Checkbox);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
  }

  (0, _createClass2.default)(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          children = _this$props.children,
          inputClassName = _this$props.inputClassName,
          error = _this$props.error,
          textProps = _this$props.textProps,
          onLabelClick = _this$props.onLabelClick,
          inputProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "id", "children", "inputClassName", "error", "textProps", "onLabelClick"]);
      var checkboxInputClassNames = (0, _classnames.default)('k-Checkbox__input', inputClassName, {
        'is-error': error
      });
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-Checkbox', className)
      }, _react.default.createElement("input", (0, _extends2.default)({
        id: id,
        type: "checkbox",
        className: checkboxInputClassNames
      }, inputProps)), _react.default.createElement("label", {
        htmlFor: id,
        className: "k-Checkbox__label",
        onClick: onLabelClick
      }, _react.default.createElement(_text.Text, textProps, children)));
    }
  }]);
  return Checkbox;
}(_react.Component);

exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
  children: 'Filter 1',
  textProps: {}
};