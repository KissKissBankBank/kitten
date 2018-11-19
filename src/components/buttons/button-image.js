"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonImage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var ButtonImage =
/*#__PURE__*/
function (_Component) {
  _inherits(ButtonImage, _Component);

  function ButtonImage() {
    _classCallCheck(this, ButtonImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonImage).apply(this, arguments));
  }

  _createClass(ButtonImage, [{
    key: "renderImage",
    value: function renderImage(props) {
      var className = props.className,
          alt = props.alt,
          others = _objectWithoutProperties(props, ["className", "alt"]);

      var imgClassName = (0, _classnames.default)('k-ButtonImage__img', className);
      return _react.default.createElement("img", _extends({
        className: imgClassName,
        alt: alt || ''
      }, others));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tag = _this$props.tag,
          className = _this$props.className,
          tiny = _this$props.tiny,
          big = _this$props.big,
          huge = _this$props.huge,
          withoutPointerEvents = _this$props.withoutPointerEvents,
          withBorder = _this$props.withBorder,
          img = _this$props.img,
          others = _objectWithoutProperties(_this$props, ["tag", "className", "tiny", "big", "huge", "withoutPointerEvents", "withBorder", "img"]);

      var buttonClassName = (0, _classnames.default)('k-ButtonImage', {
        'k-ButtonImage--tiny': tiny,
        'k-ButtonImage--big': big,
        'k-ButtonImage--huge': huge,
        'k-ButtonImage--withoutPointerEvents': withoutPointerEvents,
        'k-ButtonImage--withBorder': withBorder
      }, className); // Adds keyboard accessibility to `<a>`

      var tabindex = tag == 'a' && !this.props.href ? 0 : null;
      var Tag = tag;
      return _react.default.createElement(Tag, _extends({
        className: buttonClassName,
        tabIndex: tabindex
      }, others), this.renderImage(img));
    }
  }]);

  return ButtonImage;
}(_react.Component);

exports.ButtonImage = ButtonImage;
ButtonImage.defaultProps = {
  tag: 'button',
  className: null,
  tiny: false,
  big: false,
  huge: false,
  withoutPointerEvents: false,
  withBorder: false,
  img: {
    className: null
  }
};