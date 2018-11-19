"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ButtonIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(ButtonIcon, _Component);

  function ButtonIcon() {
    _classCallCheck(this, ButtonIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonIcon).apply(this, arguments));
  }

  _createClass(ButtonIcon, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          modifier = _this$props.modifier,
          size = _this$props.size,
          withoutHover = _this$props.withoutHover,
          verticalArrow = _this$props.verticalArrow,
          rounded = _this$props.rounded,
          others = _objectWithoutProperties(_this$props, ["className", "tag", "modifier", "size", "withoutHover", "verticalArrow", "rounded"]);

      var buttonIconClassNames = (0, _classnames.default)('k-ButtonIcon', className, (_classNames = {}, _defineProperty(_classNames, "k-ButtonIcon--".concat(modifier), modifier), _defineProperty(_classNames, "k-ButtonIcon--".concat(size), size), _defineProperty(_classNames, 'k-ButtonIcon--withoutHover', withoutHover), _defineProperty(_classNames, 'k-ButtonIcon--verticalArrow', verticalArrow), _defineProperty(_classNames, 'k-ButtonIcon--rounded', rounded), _classNames)); // Adds keyboard accessibility to `<a>`

      var tabindex = tag == 'a' && !this.props.href ? 0 : null;
      var Tag = tag;
      return _react.default.createElement(Tag, _extends({
        className: buttonIconClassNames,
        tabIndex: tabindex
      }, others));
    }
  }]);

  return ButtonIcon;
}(_react.Component);

exports.ButtonIcon = ButtonIcon;
ButtonIcon.defaultProps = {
  tag: 'button',
  size: null,
  modifier: 'hydrogen',
  withoutHover: false,
  verticalArrow: false,
  rounded: false
};