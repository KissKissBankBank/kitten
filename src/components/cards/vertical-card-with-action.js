"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalCardWithAction = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../components/layout/marger");

var _title = require("../../components/typography/title");

var _paragraph = require("../../components/typography/paragraph");

var _button = require("../../components/buttons/button");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var VerticalCardWithAction =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(VerticalCardWithAction, _Component);

  function VerticalCardWithAction() {
    (0, _classCallCheck2.default)(this, VerticalCardWithAction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(VerticalCardWithAction).apply(this, arguments));
  }

  (0, _createClass2.default)(VerticalCardWithAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          title = _this$props.title,
          titleTag = _this$props.titleTag,
          description = _this$props.description,
          descriptionTag = _this$props.descriptionTag,
          button = _this$props.button,
          buttonModifier = _this$props.buttonModifier,
          buttonProps = _this$props.buttonProps,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["imageProps", "title", "titleTag", "description", "descriptionTag", "button", "buttonModifier", "buttonProps"]);
      return _react.default.createElement(_radium.StyleRoot, others, _react.default.createElement(_marger.Marger, {
        bottom: "3"
      }, this.renderImage()), _react.default.createElement(_marger.Marger, {
        top: "3",
        bottom: "3"
      }, this.renderDescription()), _react.default.createElement(_marger.Marger, {
        top: "3",
        style: styles.button
      }, this.renderAction()));
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var _this$props$imageProp = this.props.imageProps,
          style = _this$props$imageProp.style,
          imageProps = (0, _objectWithoutProperties2.default)(_this$props$imageProp, ["style"]);
      return _react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
        style: (0, _extends2.default)({}, style, {}, styles.image)
      }));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          titleTag = _this$props2.titleTag,
          description = _this$props2.description,
          descriptionTag = _this$props2.descriptionTag;
      return _react.default.createElement("div", null, _react.default.createElement(_marger.Marger, {
        bottom: description ? 1.5 : 0
      }, _react.default.createElement(_title.Title, {
        modifier: "senary",
        tag: titleTag,
        margin: false,
        style: styles.text
      }, title)), description && _react.default.createElement(_marger.Marger, {
        top: "1.5"
      }, _react.default.createElement(_paragraph.Paragraph, {
        modifier: "quaternary",
        tag: descriptionTag,
        margin: false,
        style: styles.text
      }, description)));
    }
  }, {
    key: "renderAction",
    value: function renderAction() {
      var _this$props3 = this.props,
          button = _this$props3.button,
          buttonModifier = _this$props3.buttonModifier,
          buttonProps = _this$props3.buttonProps;
      var onClick = buttonProps.onClick,
          href = buttonProps.href,
          others = (0, _objectWithoutProperties2.default)(buttonProps, ["onClick", "href"]);
      return _react.default.createElement(_button.Button, (0, _extends2.default)({}, others, {
        modifier: buttonModifier,
        type: "button",
        onClick: onClick,
        href: href
      }), button);
    }
  }]);
  return VerticalCardWithAction;
}(_react.Component);

exports.VerticalCardWithAction = VerticalCardWithAction;
VerticalCardWithAction.propTypes = {
  imageProps: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired,
    style: _propTypes.default.shape({})
  }).isRequired,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionTag: _propTypes.default.string,
  button: _propTypes.default.string.isRequired,
  buttonModifier: _propTypes.default.string,
  buttonProps: _propTypes.default.shape({
    onClick: _propTypes.default.func,
    href: _propTypes.default.string
  }).isRequired
};
VerticalCardWithAction.defaultProps = {
  imageProps: {
    style: {}
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p',
  buttonModifier: 'helium',
  buttonProps: {
    onClick: null,
    href: null
  }
};
var styles = {
  image: {
    width: '100%',
    display: 'block'
  },
  text: {
    textAlign: 'center',
    color: _colorsConfig.default.font1
  },
  button: {
    textAlign: 'center'
  }
};