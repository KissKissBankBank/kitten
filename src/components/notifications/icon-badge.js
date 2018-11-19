"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBadge = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

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

var IconBadge =
/*#__PURE__*/
function (_Component) {
  _inherits(IconBadge, _Component);

  function IconBadge() {
    _classCallCheck(this, IconBadge);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconBadge).apply(this, arguments));
  }

  _createClass(IconBadge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          valid = _this$props.valid,
          big = _this$props.big,
          huge = _this$props.huge,
          style = _this$props.style,
          others = _objectWithoutProperties(_this$props, ["children", "valid", "big", "huge", "style"]);

      var styleBadge = [styles.badge, valid && styles.badge.isValid, big && styles.badge.big, huge && styles.badge.huge, style];
      var styleContent = [styles.content, big && styles.content.big, huge && styles.content.huge];
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("span", _extends({}, others, {
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