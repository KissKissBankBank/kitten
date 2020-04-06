"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Title = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Title, _Component);

  var _super = _createSuper(Title);

  function Title() {
    (0, _classCallCheck2.default)(this, Title);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Title, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          modifier = _this$props.modifier,
          tag = _this$props.tag,
          margin = _this$props.margin,
          italic = _this$props.italic,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["className", "modifier", "tag", "margin", "italic"]);
      var titleClassNames = (0, _classnames.default)('k-Title', className, "k-Title--".concat(modifier), {
        'k-Title--withoutMargin': !margin,
        'k-Title--italic': italic
      });
      var Tag = tag;
      return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
        className: titleClassNames
      }, other));
    }
  }]);
  return Title;
}(_react.Component);

exports.Title = Title;
Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  children: 'Lorem ipsum dolor sit amet…',
  margin: true,
  italic: false
};