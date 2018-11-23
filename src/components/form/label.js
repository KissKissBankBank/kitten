"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = _interopRequireDefault(require("kitten/helpers/dom/element-helper"));

var Label =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Label, _Component);

  function Label(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Label);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Label).call(this, props));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Label, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (_elementHelper.default.canUseDom() && this.props.focusId) {
        e.preventDefault();
        document.getElementById(this.props.focusId).focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          tag = _this$props.tag,
          className = _this$props.className,
          children = _this$props.children,
          focusId = _this$props.focusId,
          size = _this$props.size,
          withoutPointerEvents = _this$props.withoutPointerEvents,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["tag", "className", "children", "focusId", "size", "withoutPointerEvents"]);
      var Tag = tag;
      var labelClassName = (0, _classnames.default)('k-Label', className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-Label--".concat(size), size), (0, _defineProperty2.default)(_classNames, 'k-Label--withoutPointerEvents', withoutPointerEvents), _classNames));
      var htmlFor = tag == 'label' && focusId ? focusId : null;
      return _react.default.createElement(Tag, (0, _extends2.default)({
        className: labelClassName,
        htmlFor: htmlFor,
        onClick: this.handleClick
      }, other), children);
    }
  }]);
  return Label;
}(_react.Component);

exports.Label = Label;
Label.defaultProps = {
  tag: 'label',
  className: null,
  children: 'Label',
  focusId: null,
  size: null,
  // `tiny`
  withoutPointerEvents: false
};