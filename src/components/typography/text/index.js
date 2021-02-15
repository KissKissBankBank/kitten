"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledText = _styledComponents.default.span.withConfig({
  displayName: "text__StyledText",
  componentId: "sc-1jqe2sw-0"
})(["", ""], function (_ref) {
  var cssColor = _ref.cssColor;
  return cssColor && (0, _styledComponents.css)(["color:", ";"], cssColor);
});

var Text = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Text, _Component);

  var _super = _createSuper(Text);

  function Text() {
    (0, _classCallCheck2.default)(this, Text);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          cssColor = _this$props.cssColor,
          decoration = _this$props.decoration,
          lineHeight = _this$props.lineHeight,
          setting = _this$props.setting,
          size = _this$props.size,
          fontStyle = _this$props.fontStyle,
          tag = _this$props.tag,
          transform = _this$props.transform,
          weight = _this$props.weight,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "color", "cssColor", "decoration", "lineHeight", "setting", "size", "fontStyle", "tag", "transform", "weight"]);
      var textClassName = (0, _classnames.default)({
        // Color.
        'k-u-color-font1': color == 'font1',
        'k-u-color-font2': color == 'font2',
        'k-u-color-primary1': color == 'primary1',
        'k-u-color-background1': color == 'background1',
        'k-u-color-error': color == 'error',
        'k-u-color-valid': color == 'valid',
        // Decoration.
        'k-u-decoration-underline': decoration == 'underline',
        'k-u-decoration-none': decoration == 'none',
        // Line height.
        'k-u-line-height-normal': lineHeight == 'normal',
        'k-u-line-height-1': lineHeight == '1',
        'k-u-line-height-1-3': lineHeight == '1.3',
        // Font Feature Settings.
        'k-u-font-setting-tnum': setting == 'tnum',
        // Monospaced numbers.
        // Size.
        'k-u-size-giant': size == 'giant',
        'k-u-size-huge': size == 'huge',
        'k-u-size-big': size == 'big',
        'k-u-size-default': size == 'default',
        'k-u-size-tiny': size == 'tiny',
        'k-u-size-micro': size == 'micro',
        'k-u-size-nano': size == 'nano',
        // Style.
        'k-u-style-normal': fontStyle == 'normal',
        'k-u-style-italic': fontStyle == 'italic',
        // Transform.
        'k-u-transform-uppercase': transform == 'uppercase',
        // Weight.
        'k-u-weight-light': weight == 'light',
        'k-u-weight-regular': weight == 'regular',
        'k-u-weight-bold': weight == 'bold'
      }, className);
      return /*#__PURE__*/_react.default.createElement(StyledText, (0, _extends2.default)({
        as: tag
      }, others, {
        className: textClassName
      }));
    }
  }]);
  return Text;
}(_react.Component);

exports.Text = Text;
Text.propTypes = {
  /**
    Available colors:
  */
  color: _propTypes.default.oneOf(['font1', 'font2', 'primary1', 'background1', 'error', 'valid']),

  /**
    Specify a custom color (as a CSS color string).
  */
  cssColor: _propTypes.default.string,

  /**
    If `tag="a"`, show underline.
  */
  decoration: _propTypes.default.oneOf(['underline', 'none']),

  /**
    `font-feature-settings: 'tnum'` enables tabular (monospace) numerals.
  **/
  setting: _propTypes.default.oneOf(['tnum']),

  /**
    `line-height: normal` correspond approximately to 1.2.
  */
  lineHeight: _propTypes.default.oneOf(['normal', '1', '1.3']),

  /**
    Available sizes:
  */
  size: _propTypes.default.oneOf(['giant', 'huge', 'big', 'default', 'tiny', 'micro', 'nano']),

  /**
    Available font styles (`normal` or `italic`):
  */
  fontStyle: _propTypes.default.oneOf(['normal', 'italic']),

  /**
    `text-transform: uppercase`
  */
  transform: _propTypes.default.oneOf(['uppercase']),

  /**
    Available font weights (`light`, `regular` or `italic`):
  */
  weight: _propTypes.default.oneOf(['light', 'regular', 'bold'])
};
Text.defaultProps = {
  className: null,
  color: null,
  cssColor: null,
  decoration: null,
  lineHeight: null,
  setting: null,
  size: null,
  fontStyle: null,
  tag: 'span',
  transform: null,
  weight: null
};