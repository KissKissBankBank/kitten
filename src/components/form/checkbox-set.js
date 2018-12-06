"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxSet = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _checkbox = require("../../components/form/checkbox");

var CheckboxSet =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(CheckboxSet, _React$Component);

  function CheckboxSet(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CheckboxSet);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CheckboxSet).call(this, props));
    _this.renderCheckbox = _this.renderCheckbox.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(CheckboxSet, [{
    key: "renderCheckbox",
    value: function renderCheckbox(item, index) {
      var className = item.className,
          itemProps = (0, _objectWithoutProperties2.default)(item, ["className"]);
      var checkboxClassName = (0, _classnames.default)('k-CheckboxSet__checkbox', className);
      return _react.default.createElement(_checkbox.Checkbox, (0, _extends2.default)({
        className: checkboxClassName,
        error: this.props.error,
        name: this.props.name,
        key: item.id
      }, itemProps));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          className = _this$props.className,
          name = _this$props.name,
          error = _this$props.error,
          checkboxSetProps = (0, _objectWithoutProperties2.default)(_this$props, ["items", "className", "name", "error"]);
      var checkboxSetClassName = (0, _classnames.default)('k-CheckboxSet', className);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: checkboxSetClassName
      }, checkboxSetProps), this.props.items.map(this.renderCheckbox));
    }
  }]);
  return CheckboxSet;
}(_react.default.Component);

exports.CheckboxSet = CheckboxSet;
CheckboxSet.defaultProps = {
  name: 'checkboxSet[]',
  error: false,
  items: [{
    label: 'filter 1',
    defaultChecked: true,
    id: 'myCheckbox' // Replace by a real value

  }]
};