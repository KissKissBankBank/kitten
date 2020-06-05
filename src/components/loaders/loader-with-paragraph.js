"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoaderWithParagraph = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _loader = require("../../components/loaders/loader");

var _paragraph = require("../../components/typography/paragraph");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LoaderWithParagraph = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(LoaderWithParagraph, _Component);

  var _super = _createSuper(LoaderWithParagraph);

  function LoaderWithParagraph() {
    (0, _classCallCheck2.default)(this, LoaderWithParagraph);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(LoaderWithParagraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          loaderPosition = _this$props.loaderPosition,
          loaderProps = _this$props.loaderProps,
          paragraphProps = _this$props.paragraphProps,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "loaderPosition", "loaderProps", "paragraphProps"]);
      var containerClassName = (0, _classnames.default)('k-LoaderWithParagraph', {
        'k-LoaderWithParagraph--column': loaderPosition == 'top' || loaderPosition == 'bottom'
      }, className);
      var loaderClassName = (0, _classnames.default)({
        'k-u-margin-bottom-single': loaderPosition == 'top',
        'k-u-margin-left-single': loaderPosition == 'right',
        'k-u-margin-top-single': loaderPosition == 'bottom',
        'k-u-margin-right-single': loaderPosition == 'left'
      }, loaderProps.className);

      var loader = /*#__PURE__*/_react.default.createElement(_loader.Loader, (0, _extends2.default)({}, loaderProps, {
        className: loaderClassName
      }));

      var loaderBefore = loaderPosition == 'top' || loaderPosition == 'left';
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        className: containerClassName
      }, others), loaderBefore ? loader : null, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, (0, _extends2.default)({
        modifier: "secondary",
        margin: false
      }, paragraphProps), this.props.children), loaderBefore ? null : loader);
    }
  }]);
  return LoaderWithParagraph;
}(_react.Component);

exports.LoaderWithParagraph = LoaderWithParagraph;
LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  className: null,
  loaderPosition: 'left',
  // Available options: top, right, bottom, left.
  loaderProps: {},
  // Show Loader component.
  paragraphProps: {} // Show Paragraph component.

};