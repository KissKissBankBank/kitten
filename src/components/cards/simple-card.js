"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _card = require("kitten/hoc/card");

var _grid = require("kitten/components/grid/grid");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/components/typography/title");

var _text = require("kitten/components/typography/text");

var _parser = require("kitten/helpers/utils/parser");

var _horizontalStroke = require("kitten/components/layout/horizontal-stroke");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var SimpleCardComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleCardComponent, _Component);

  function SimpleCardComponent() {
    _classCallCheck(this, SimpleCardComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleCardComponent).apply(this, arguments));
  }

  _createClass(SimpleCardComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          titleProps = _this$props.titleProps,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          paragraph = _this$props.paragraph,
          horizontalStroke = _this$props.horizontalStroke,
          others = _objectWithoutProperties(_this$props, ["imageProps", "titleProps", "title", "subtitle", "paragraph", "horizontalStroke"]);

      var Tag = this.props.href ? 'a' : 'div';
      var titleClassName = (0, _classnames.default)('k-Card__title', titleProps.className);
      return _react.default.createElement(Tag, others, _react.default.createElement(_marger.Marger, {
        bottom: "2",
        className: "k-Card__imageContainer"
      }, _react.default.createElement("img", _extends({}, imageProps, {
        className: "k-Card__image",
        style: _objectSpread({}, imageProps.style, styles.image)
      }))), title && _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: subtitle ? 0.5 : 1
      }, _react.default.createElement(_title.Title, _extends({
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