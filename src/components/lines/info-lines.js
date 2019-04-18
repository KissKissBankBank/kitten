"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoLines = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var InfoLines =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(InfoLines, _Component);

  function InfoLines(props) {
    var _this;

    (0, _classCallCheck2.default)(this, InfoLines);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InfoLines).call(this, props));
    _this.renderInfo = _this.renderInfo.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(InfoLines, [{
    key: "renderInfos",
    value: function renderInfos() {
      return this.props.infos.map(this.renderInfo);
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(element) {
      var key = element.key,
          value = element.value,
          id = element.id,
          className = element.className,
          style = element.style,
          others = (0, _objectWithoutProperties2.default)(element, ["key", "value", "id", "className", "style"]);
      var infoClassName = (0, _classnames.default)('k-InfoLines__line', className);
      var infoStyle = (0, _extends2.default)({}, style, {
        borderColor: this.props.borderColor
      });
      return _react.default.createElement("div", (0, _extends2.default)({}, others, {
        key: id,
        className: infoClassName,
        style: infoStyle
      }), _react.default.createElement("div", {
        className: "k-InfoLines__line__key"
      }, key), _react.default.createElement("div", {
        className: "k-InfoLines__line__value"
      }, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          borderColor = _this$props.borderColor,
          className = _this$props.className,
          infos = _this$props.infos,
          withBorderRadius = _this$props.withBorderRadius,
          withLeftRightBorder = _this$props.withLeftRightBorder,
          withoutResponsive = _this$props.withoutResponsive,
          withoutTopBottomBorder = _this$props.withoutTopBottomBorder,
          style = _this$props.style,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["borderColor", "className", "infos", "withBorderRadius", "withLeftRightBorder", "withoutResponsive", "withoutTopBottomBorder", "style"]);
      var infoLinesClassName = (0, _classnames.default)('k-InfoLines', {
        'k-InfoLines--withBorderRadius': withBorderRadius,
        'k-InfoLines--withLeftRightBorder': withLeftRightBorder,
        'k-InfoLines--withoutResponsive': withoutResponsive,
        'k-InfoLines--withoutTopBottomBorder': withoutTopBottomBorder
      }, className);
      var infoLinesStyle = (0, _extends2.default)({}, style, {
        borderColor: borderColor
      });
      return _react.default.createElement("div", (0, _extends2.default)({}, others, {
        className: infoLinesClassName,
        style: infoLinesStyle
      }), this.renderInfos());
    }
  }]);
  return InfoLines;
}(_react.Component);

exports.InfoLines = InfoLines;
InfoLines.defaultProps = {
  borderColor: null,
  className: null,
  infos: [],
  // Eg: [{ key: …, value: …, id: … }]
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutResponsive: false,
  withoutTopBottomBorder: false
};