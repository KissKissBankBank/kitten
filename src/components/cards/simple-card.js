"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _card = require("../../hoc/card");

var _grid = require("../../components/grid/grid");

var _marger = require("../../components/layout/marger");

var _title = require("../../components/typography/title");

var _text = require("../../components/typography/text");

var _parser = require("../../helpers/utils/parser");

var _horizontalStroke = require("../../components/layout/horizontal-stroke");

var SimpleCardComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SimpleCardComponent, _Component);

  function SimpleCardComponent() {
    (0, _classCallCheck2.default)(this, SimpleCardComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SimpleCardComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(SimpleCardComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          titleProps = _this$props.titleProps,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          paragraph = _this$props.paragraph,
          horizontalStroke = _this$props.horizontalStroke,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["imageProps", "titleProps", "title", "subtitle", "paragraph", "horizontalStroke"]);
      var Tag = this.props.href ? 'a' : 'div';
      var titleClassName = (0, _classnames.default)('k-Card__title', titleProps.className);
      return _react.default.createElement(Tag, others, _react.default.createElement(_marger.Marger, {
        bottom: "2",
        className: "k-Card__imageContainer"
      }, _react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
        className: "k-Card__image",
        style: (0, _extends2.default)({}, imageProps.style, styles.image)
      }))), title && _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: subtitle ? 0.5 : 1
      }, _react.default.createElement(_title.Title, (0, _extends2.default)({
        tag: "p"
      }, titleProps, {
        className: titleClassName,
        margin: false,
        modifier: "senary"
      }), (0, _parser.parseHtml)(title))), subtitle && _react.default.createElement(_marger.Marger, {
        top: ".5",
        bottom: "1.5"
      }, _react.default.createElement(_text.Text, {
        size: "micro",
        weight: "regular"
      }, (0, _parser.parseHtml)(subtitle))), paragraph && _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1.5"
      }, _react.default.createElement(_text.Text, {
        lineHeight: "normal",
        size: "micro",
        weight: "light"
      }, (0, _parser.parseHtml)(paragraph))), horizontalStroke && _react.default.createElement(_marger.Marger, {
        top: "1.5"
      }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
        size: "tiny"
      })));
    }
  }]);
  return SimpleCardComponent;
}(_react.Component);

var styles = {
  image: {
    width: '100%',
    display: 'block'
  }
};
SimpleCardComponent.defaultProps = {
  imageProps: {
    src: 'https://placehold.it/200x200/caf4fe/caf4fe',
    alt: ''
  },
  titleProps: {},
  title: null,
  subtitle: null,
  paragraph: null,
  horizontalStroke: true
};
var SimpleCard = (0, _card.card)(SimpleCardComponent, {
  withoutBoxShadowOnHover: true
});
exports.SimpleCard = SimpleCard;