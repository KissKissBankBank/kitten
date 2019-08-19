"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackerCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _marger = require("../../components/layout/marger");

var _text = require("../../components/typography/text");

var _buttonImage = require("../../components/buttons/button-image");

var BackerCard = function BackerCard(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      imgProps = _ref.imgProps,
      description = _ref.description,
      others = (0, _objectWithoutProperties2.default)(_ref, ["title", "subtitle", "imgProps", "description"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, others, {
    style: (0, _extends2.default)({}, styles.card, {}, others.style)
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