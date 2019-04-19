"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButtonSet = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radioButton = require("../../components/form/radio-button");

var RadioButtonSet =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RadioButtonSet, _React$Component);

  function RadioButtonSet(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RadioButtonSet);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadioButtonSet).call(this, props));
    _this.renderRadioButton = _this.renderRadioButton.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(RadioButtonSet, [{
    key: "renderRadioButton",
    value: function renderRadioButton(item, index) {
      var className = item.className,
          itemProps = (0, _objectWithoutProperties2.default)(item, ["className"]);
      var radioButtonClassName = (0, _classnames.default)('k-RadioButtonSet__radioButton', className);
      return _react.default.createElement(_radioButton.RadioButton, (0, _extends2.default)({
        className: radioButtonClassName,
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
          radioButtonSetProps = (0, _objectWithoutProperties2.default)(_this$props, ["items", "className", "name", "error"]);
      var radioButtonSetClassName = (0, _classnames.default)('k-RadioButtonSet', className);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: radioButtonSetClassName
      }, radioButtonSetProps), this.props.items.map(this.renderRadioButton));
    }
  }]);
  return RadioButtonSet;
}(_react.default.Component);

exports.RadioButtonSet = RadioButtonSet;
RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  items: [{
    text: 'filter 1',
    children: 'lorem ipsum dolor',
    defaultChecked: true,
    id: 'myRadioButton' // Replace by a real value

  }]
};