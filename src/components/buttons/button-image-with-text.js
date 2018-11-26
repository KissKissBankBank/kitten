"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonImageWithText = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _buttonImage = require("../../components/buttons/button-image");

var _text = require("../../components/typography/text");

var ButtonImage = (0, _radium.default)(_buttonImage.ButtonImage);
var Text = (0, _radium.default)(_text.Text);

var ButtonImageWithTextComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ButtonImageWithTextComponent, _Component);

  function ButtonImageWithTextComponent() {
    (0, _classCallCheck2.default)(this, ButtonImageWithTextComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ButtonImageWithTextComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(ButtonImageWithTextComponent, [{
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

ButtonImageWithTextComponent.propTypes = {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  micro: _propTypes.default.bool,
  tag: _propTypes.default.string,
  largeGutter: _propTypes.default.bool,
  titleRegular: _propTypes.default.bool,
  textRegular: _propTypes.default.bool,
  avatarProps: _propTypes.default.func
};
ButtonImageWithTextComponent.defaultProps = {
  avatarProps: {
    src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    alt: ''
  },
  micro: false,
  tag: 'p',
  largeGutter: false,
  titleRegular: false,
  textRegular: false
};
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