"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var IconBadge =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(IconBadge, _Component);

  function IconBadge() {
    (0, _classCallCheck2.default)(this, IconBadge);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IconBadge).apply(this, arguments));
  }

  (0, _createClass2.default)(IconBadge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          valid = _this$props.valid,
          big = _this$props.big,
          huge = _this$props.huge,
          style = _this$props.style,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["children", "valid", "big", "huge", "style"]);
      var styleBadge = [styles.badge, valid && styles.badge.isValid, big && styles.badge.big, huge && styles.badge.huge, style];
      var styleContent = [styles.content, big && styles.content.big, huge && styles.content.huge];
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("span", (0, _extends2.default)({}, others, {
        style: styleBadge
      }), _react.default.createElement("span", {
        style: styleContent
      }, children)));
    }
  }]);
  return IconBadge;
}(_react.Component);

exports.IconBadge = IconBadge;
var bigSize = {
  minWidth: 40,
  minHeight: 40,
  borderRadius: 40
};
var hugeSize = {
  minWidth: 50,
  minHeight: 50,
  borderRadius: 50
};
var styles = {
  badge: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    minWidth: 30,
    minHeight: 30,
    borderRadius: 30,
    backgroundColor: _colorsConfig.default.primary1,
    big: bigSize,
    huge: hugeSize,
    isValid: {
      backgroundColor: _colorsConfig.default.valid
    }
  },
  content: {
    flexBasis: 11,
    fill: _colorsConfig.default.background1,
    color: _colorsConfig.default.background1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 0,
    big: {
      fontSize: 14
    },
    huge: {
      fontSize: 14
    }
  }
};