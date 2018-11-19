"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VerticalCard =
/*#__PURE__*/
function (_Component) {
  _inherits(VerticalCard, _Component);

  function VerticalCard() {
    _classCallCheck(this, VerticalCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(VerticalCard).apply(this, arguments));
  }

  _createClass(VerticalCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          title = _this$props.title,
          titleTag = _this$props.titleTag,
          description = _this$props.description,
          descriptionTag = _this$props.descriptionTag,
          others = _objectWithoutProperties(_this$props, ["imageProps", "title", "titleTag", "description", "descriptionTag"]);

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
          imageProps = _objectWithoutProperties(_this$props$imageProp, ["style"]);

      return _react.default.createElement("img", _extends({}, imageProps, {
        style: _objectSpread({}, style, styles.image)
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

_defineProperty(VerticalCard, "propTypes", {
  imageProps: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired,
    style: _propTypes.default.object
  }).isRequired,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionTag: _propTypes.default.string
});

_defineProperty(VerticalCard, "defaultProps", {
  imageProps: {
    style: {}
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p'
});

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