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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _checkbox = require("../../components/form/checkbox");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CheckboxSet = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CheckboxSet, _React$Component);

  var _super = _createSuper(CheckboxSet);

  function CheckboxSet(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CheckboxSet);
    _this = _super.call(this, props);
    _this.renderCheckbox = _this.renderCheckbox.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(CheckboxSet, [{
    key: "renderCheckbox",
    value: function renderCheckbox(item, index) {
      var className = item.className,
          itemProps = (0, _objectWithoutProperties2.default)(item, ["className"]);
      var checkboxClassName = (0, _classnames.default)('k-CheckboxSet__checkbox', className);
      return /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, (0, _extends2.default)({
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
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
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