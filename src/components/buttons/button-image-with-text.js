"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonImageWithText = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _buttonImage = require("kitten/components/buttons/button-image");

var _text = require("kitten/components/typography/text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonImage = (0, _radium.default)(_buttonImage.ButtonImage);
var Text = (0, _radium.default)(_text.Text);

var ButtonImageWithTextComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ButtonImageWithTextComponent, _Component);

  function ButtonImageWithTextComponent() {
    _classCallCheck(this, ButtonImageWithTextComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonImageWithTextComponent).apply(this, arguments));
  }

  _createClass(ButtonImageWithTextComponent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: styles
      }, this.renderButtonImage(), this.renderDescription());
    }
  }, {
    key: "renderButtonImage",
    value: function renderButtonImage() {
      return _react.default.createElement(ButtonImage, {
        tag: "span",
        img: this.props.avatarProps,
        withoutPointerEvents: true
      });
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          micro = _this$props.micro,
          tag = _this$props.tag,
          titleRegular = _this$props.titleRegular,
          textRegular = _this$props.textRegular,
          largeGutter = _this$props.largeGutter;
      var size = micro ? 'micro' : 'tiny';
      var Tag = tag;
      var titleWeight = titleRegular ? 'regular' : 'light';
      var textWeight = textRegular ? 'regular' : 'light';
      var styleTag = [styles, tag == 'p' && styles.paragraph];
      var styleText = [styles.text, largeGutter && styles.text.largeGutter];
      return _react.default.createElement("div", {
        style: styleText
      }, _react.default.createElement(Text, {
        tag: Tag,
        size: size,
        weight: titleWeight,
        style: styleTag
      }, title), _react.default.createElement(Text, {
        tag: Tag,
        size: size,
        weight: textWeight,
        style: styleTag
      }, description));
    }
  }]);

  return ButtonImageWithTextComponent;
}(_react.Component);

_defineProperty(ButtonImageWithTextComponent, "propTypes", {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  micro: _propTypes.default.bool,
  tag: _propTypes.default.string,
  largeGutter: _propTypes.default.bool,
  titleRegular: _propTypes.default.bool,
  textRegular: _propTypes.default.bool,
  avatarProps: _propTypes.default.func
});

_defineProperty(ButtonImageWithTextComponent, "defaultProps", {
  avatarProps: {
    src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    alt: ''
  },
  micro: false,
  tag: 'p',
  largeGutter: false,
  titleRegular: false,
  textRegular: false
});

var styles = {
  display: 'flex',
  alignItems: 'center',
  flex: '1',
  text: {
    marginLeft: '10px',
    lineHeight: '1.2',
    largeGutter: {
      marginLeft: '15px'
    }
  },
  paragraph: {
    margin: 0
  }
};
var ButtonImageWithText = (0, _radium.default)(ButtonImageWithTextComponent);
exports.ButtonImageWithText = ButtonImageWithText;