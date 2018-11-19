"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackerCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _marger = require("kitten/components/layout/marger");

var _text = require("kitten/components/typography/text");

var _buttonImage = require("kitten/components/buttons/button-image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BackerCard = function BackerCard(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      imgProps = _ref.imgProps,
      description = _ref.description,
      others = _objectWithoutProperties(_ref, ["title", "subtitle", "imgProps", "description"]);

  return _react.default.createElement("div", _extends({}, others, {
    style: _objectSpread({}, styles.card, others.style)
  }), _react.default.createElement(_marger.Marger, {
    top: "4",
    bottom: "1"
  }, _react.default.createElement(_text.Text, {
    color: "primary1",
    weight: "regular",
    lineHeight: "normal"
  }, title, subtitle && _react.default.createElement(_text.Text, {
    color: "font1",
    weight: "light",
    size: "micro",
    style: {
      display: 'block'
    }
  }, subtitle))), _react.default.createElement(_marger.Marger, {
    top: "1",
    bottom: "1"
  }, _react.default.createElement(_buttonImage.ButtonImage, {
    tag: "span",
    img: imgProps,
    style: styles.buttonImage,
    withoutPointerEvents: true,
    huge: true
  })), _react.default.createElement(_marger.Marger, {
    top: "1",
    bottom: "4"
  }, _react.default.createElement(_text.Text, {
    tag: "p",
    color: "font1",
    weight: "light",
    size: "micro",
    lineHeight: "normal",
    style: {
      margin: 0
    }
  }, description)));
};

exports.BackerCard = BackerCard;
BackerCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string,
  imgProps: _propTypes.default.object.isRequired,
  description: _propTypes.default.node.isRequired
};
BackerCard.defaultProps = {
  subtitle: null
};
var styles = {
  card: {
    padding: '0 20px',
    border: "2px solid ".concat(_colorsConfig.default.line1),
    textAlign: 'center',
    wordBreak: 'break-word'
  },
  buttonImage: {
    margin: '0 auto'
  }
};