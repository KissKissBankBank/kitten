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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _loader = require("kitten/components/loaders/loader");

var _paragraph = require("kitten/components/typography/paragraph");

var LoaderWithParagraph =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LoaderWithParagraph, _Component);

  function LoaderWithParagraph() {
    (0, _classCallCheck2.default)(this, LoaderWithParagraph);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoaderWithParagraph).apply(this, arguments));
  }

  (0, _createClass2.default)(LoaderWithParagraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          className = _this$props.className,
          loaderPosition = _this$props.loaderPosition,
          loaderProps = _this$props.loaderProps,
          paragraphProps = _this$props.paragraphProps,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["text", "className", "loaderPosition", "loaderProps", "paragraphProps"]);
      var containerClassName = (0, _classnames.default)('k-LoaderWithParagraph', {
        'k-LoaderWithParagraph--column': loaderPosition == 'top' || loaderPosition == 'bottom'
      }, className);
      var loaderClassName = (0, _classnames.default)({
        'k-u-margin-bottom-single': loaderPosition == 'top',
        'k-u-margin-left-single': loaderPosition == 'right',
        'k-u-margin-top-single': loaderPosition == 'bottom',
        'k-u-margin-right-single': loaderPosition == 'left'
      }, loaderProps.className);

      var loader = _react.default.createElement(_loader.Loader, (0, _extends2.default)({}, loaderProps, {
        className: loaderClassName
      }));

      var loaderBefore = loaderPosition == 'top' || loaderPosition == 'left';
      return _react.default.createElement("div", (0, _extends2.default)({
        className: containerClassName
      }, others), loaderBefore ? loader : null, _react.default.createElement(_paragraph.Paragraph, (0, _extends2.default)({
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