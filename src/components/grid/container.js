"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mediaQueries = require("../../helpers/utils/media-queries");

var Container =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Container, _React$PureComponent);

  function Container(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Container);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).call(this, props, context));

    _this.onScreenSizeChange = function (event) {
      _this.setState({
        isBelowScreenSize: event.matches
      });
    };

    _this.mqBelowScreenSize = props.fullWidthBelowScreenSize && (0, _mediaQueries.createMatchMediaMax)(props.fullWidthBelowScreenSize);
    _this.state = {
      isBelowScreenSize: false
    };
    return _this;
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mqBelowScreenSize) {
        this.mqBelowScreenSize.addListener(this.onScreenSizeChange);
        this.onScreenSizeChange(this.mqBelowScreenSize);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mqBelowScreenSize && this.mqBelowScreenSize.removeListener(this.onScreenSizeChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          fullWidthBelowScreenSize = _this$props.fullWidthBelowScreenSize,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "fullWidthBelowScreenSize"]);
      var isBelowScreenSize = this.state.isBelowScreenSize;
      var containerClassName = (0, _classnames.default)('k-Container', className, {
        'k-Container--no-padding': isBelowScreenSize
      });
      return _react.default.createElement("div", (0, _extends2.default)({
        className: containerClassName
      }, props));
    }
  }]);
  return Container;
}(_react.default.PureComponent);

exports.Container = Container;
Container.defaultProps = {
  className: null,
  fullWidthBelowScreenSize: null
};