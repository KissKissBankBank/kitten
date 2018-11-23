"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalCard = void 0;

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

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var VerticalCard =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(VerticalCard, _Component);

  function VerticalCard() {
    (0, _classCallCheck2.default)(this, VerticalCard);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(VerticalCard).apply(this, arguments));
  }

  (0, _createClass2.default)(VerticalCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          title = _this$props.title,
          titleTag = _this$props.titleTag,
          description = _this$props.description,
          descriptionTag = _this$props.descriptionTag,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["imageProps", "title", "titleTag", "description", "descriptionTag"]);
      return _react.default.createElement(_radium.StyleRoot, others, _react.default.createElement(_marger.Marger, {
        bottom: "3"
      }, this.renderImage()), _react.default.createElement(_marger.Marger, {
        top: "3"
      }, this.renderDescription()));
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var _this$props$imageProp = this.props.imageProps,
          style = _this$props$imageProp.style,
          imageProps = (0, _objectWithoutProperties2.default)(_this$props$imageProp, ["style"]);
      return _react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
        style: (0, _extends2.default)({}, style, styles.image)
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
        bottom: description ? 1 : 0
      }, _react.default.createElement(_title.Title, {
        modifier: "senary",
        tag: titleTag,
        margin: false,
        style: styles.text
      }, title)), description && _react.default.createElement(_marger.Marger, {
        top: "1"
      }, _react.default.createElement(_paragraph.Paragraph, {
        modifier: "quaternary",
        tag: descriptionTag,
        margin: false,
        style: styles.text
      }, description)));
    }
  }]);
  return VerticalCard;
}(_react.Component);

exports.VerticalCard = VerticalCard;
VerticalCard.propTypes = {
  imageProps: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired,
    style: _propTypes.default.object
  }).isRequired,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionTag: _propTypes.default.string
};
VerticalCard.defaultProps = {
  imageProps: {
    style: {}
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p'
};
var styles = {
  image: {
    width: '100%',
    display: 'block'
  },
  text: {
    textAlign: 'center',
    color: _colorsConfig.default.font1
  }
};