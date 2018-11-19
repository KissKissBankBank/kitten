"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoaderWithParagraph = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _loader = require("kitten/components/loaders/loader");

var _paragraph = require("kitten/components/typography/paragraph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoaderWithParagraph =
/*#__PURE__*/
function (_Component) {
  _inherits(LoaderWithParagraph, _Component);

  function LoaderWithParagraph() {
    _classCallCheck(this, LoaderWithParagraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoaderWithParagraph).apply(this, arguments));
  }

  _createClass(LoaderWithParagraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          className = _this$props.className,
          loaderPosition = _this$props.loaderPosition,
          loaderProps = _this$props.loaderProps,
          paragraphProps = _this$props.paragraphProps,
          others = _objectWithoutProperties(_this$props, ["text", "className", "loaderPosition", "loaderProps", "paragraphProps"]);

      var containerClassName = (0, _classnames.default)('k-LoaderWithParagraph', {
        'k-LoaderWithParagraph--column': loaderPosition == 'top' || loaderPosition == 'bottom'
      }, className);
      var loaderClassName = (0, _classnames.default)({
        'k-u-margin-bottom-single': loaderPosition == 'top',
        'k-u-margin-left-single': loaderPosition == 'right',
        'k-u-margin-top-single': loaderPosition == 'bottom',
        'k-u-margin-right-single': loaderPosition == 'left'
      }, loaderProps.className);

      var loader = _react.default.createElement(_loader.Loader, _extends({}, loaderProps, {
        className: loaderClassName
      }));

      var loaderBefore = loaderPosition == 'top' || loaderPosition == 'left';
      return _react.default.createElement("div", _extends({
        className: containerClassName
      }, others), loaderBefore ? loader : null, _react.default.createElement(_paragraph.Paragraph, _extends({
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